package mtg.rnn.sort.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Date;

@Component
@PropertySource("classpath:application.properties")
public class AuthService {

    @Autowired
    UserRepository userRepository;

    private static final long EXPIRATION_TIME = 864_000_000; // 10 days

    @Value("${jwt.secret}")
    private String SECRET;

    @Value("${password.salt}")
    private String SALT;

    public String authenticateUser(User givenUser) throws Exception {
        User foundUser = userRepository.findByUsername(givenUser.getUsername());
        if(foundUser == null) {
            throw new Exception("Error: user not found!");
        }
        MessageDigest md = MessageDigest.getInstance("MD5");
        String saltedPass = givenUser.getPassword()+SALT;
        md.update(saltedPass.getBytes());
        byte[] digest = md.digest();
        String hash = DatatypeConverter.printHexBinary(digest).toLowerCase();
        if(hash.equals(foundUser.getPassword())) {
            // user credentials are valid, generate a jwt for them
            return generateAuthToken(foundUser.getUsername());
        }
        else {
            //user credentials are not valid, throw exception
            throw new Exception("Error: invalid password!");
        }
    }

    private String generateAuthToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }

    public boolean tokenIsValid(String authHeader) {
        if(authHeader == null)
            return false;
        try {
            String[] splitStr = authHeader.split("\\s+");
            String token = splitStr[1];
            String user = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody().getSubject();
            // not sure how necessary this part is
            if(userRepository.findByUsername(user) != null)
                return true;
        } catch (SignatureException e) {
            return false;
        }
        return false;
    }
}

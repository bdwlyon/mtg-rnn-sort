package mtg.rnn.sort;

import mtg.rnn.sort.auth.AuthService;
import mtg.rnn.sort.auth.User;
import mtg.rnn.sort.card.Card;
import mtg.rnn.sort.card.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api")
@RestController
public class MainController {

    @Autowired
    private CardRepository cardRepository;

    @Autowired
    private CardAggregation aggregator;

    @Autowired
    private AuthService authService;


    @RequestMapping(method=RequestMethod.POST, consumes = "application/json",
            path="/authenticate")
    @ResponseBody
    public String authenticate(@RequestBody User creds) {
        try {
            return String.format("{\"token\": \"%s\"}", authService.authenticateUser(creds));
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
            throw new UnauthorizedException();
        }
    }

    @RequestMapping("/cards/example-card")
    @ResponseBody
    public Card unsortedCard() {
        Card exampleCard = new Card();
        exampleCard.setName("King Wumpus");
        exampleCard.setManaCost("{W}{B}{U}{R}{G}{1}");
        exampleCard.setCmc(6);
        exampleCard.setType("creature ~ wumpus");
        exampleCard.setRarity("Mythic rare");
        exampleCard.setText("Trample\nWhenever @ deals combat damage to a player, choose a color. " +
                "Create a 1/1 wumpus creature token of the chosen color");
        exampleCard.setPower("6");
        exampleCard.setToughness("6");

        return exampleCard;
    }

    @RequestMapping("/cards/{cardname}")
    @ResponseBody
    public Card findCard(@PathVariable String cardname) {
        Card foundCard = cardRepository.findByName(cardname);
        if(foundCard == null)
            throw new CardNotFoundException();
        System.out.println("found card: "+foundCard.toString());
        return foundCard;
    }

    @RequestMapping("/cards/unsorted")
    @ResponseBody
    public Card getUnsorted() {
        return aggregator.getUnsorted();
    }


    @RequestMapping(method= RequestMethod.POST, consumes="application/json",
            path="/cards/sorted")
    @ResponseBody
    public Card sortCard(@RequestHeader(value = "Authorization", required = false) String auth,
                         @RequestBody Card card) {
        if(authService.tokenIsValid(auth)) {
            Card sortedCard = aggregator.sortCard(card);
            System.out.println("received a card and sorted it: " + sortedCard.toString());
            return sortedCard;
        }
        else {
            throw new UnauthorizedException();
        }
    }

    @ResponseStatus(value = HttpStatus.NO_CONTENT, reason = "No card found in the db")
    private class CardNotFoundException extends RuntimeException {}

    @ResponseStatus(value = HttpStatus.UNAUTHORIZED, reason = "Either user input credentials or client jwt were invalid")
    private class UnauthorizedException extends RuntimeException {}
}

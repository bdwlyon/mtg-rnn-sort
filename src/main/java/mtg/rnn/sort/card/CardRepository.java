package mtg.rnn.sort.card;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CardRepository extends MongoRepository<Card, String> {

    public Card findByName(String name);
}

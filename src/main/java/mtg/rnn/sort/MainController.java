package mtg.rnn.sort;

import mtg.rnn.sort.card.Card;
import mtg.rnn.sort.card.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api")
@RestController
public class MainController {

    @Autowired
    private CardRepository repository;

    @Autowired
    private CardAggregation aggregator;

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
        Card foundCard = repository.findByName(cardname);
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
    public Card sortCard(@RequestBody Card card) {
        Card sortedCard = aggregator.sortCard(card);
        System.out.println("received a card and sorted it: " + sortedCard.toString());
        return sortedCard;
    }
}

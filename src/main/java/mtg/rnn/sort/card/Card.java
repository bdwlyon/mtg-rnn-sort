package mtg.rnn.sort.card;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "card")
public class Card {

    @Id
    private ObjectId id;

    private String name;

    private String manaCost;

    private int cmc;

    private List<String> colors;

    private List<String> subtypes;

    private List<String> types;

    private List<String> supertypes;

    private String type;

    private String rarity;

    private String text;

    private String power;

    private String toughness;

    private int loyalty;

    private String layout;

    private List<String> names;

    private String number;

    private Tags tags;

    private String validity;

    public Card() {
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getManaCost() {
        return manaCost;
    }

    public void setManaCost(String manaCost) {
        this.manaCost = manaCost;
    }

    public int getCmc() {
        return cmc;
    }

    public void setCmc(int cmc) {
        this.cmc = cmc;
    }

    public List<String> getColors() {
        return colors;
    }

    public void setColors(List<String> colors) {
        this.colors = colors;
    }

    public List<String> getSubtypes() {
        return subtypes;
    }

    public void setSubtypes(List<String> subtypes) {
        this.subtypes = subtypes;
    }

    public List<String> getTypes() {
        return types;
    }

    public void setTypes(List<String> types) {
        this.types = types;
    }

    public List<String> getSupertypes() {
        return supertypes;
    }

    public void setSupertypes(List<String> supertypes) {
        this.supertypes = supertypes;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRarity() {
        return rarity;
    }

    public void setRarity(String rarity) {
        this.rarity = rarity;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getPower() {
        return power;
    }

    public void setPower(String power) {
        this.power = power;
    }

    public String getToughness() {
        return toughness;
    }

    public void setToughness(String toughness) {
        this.toughness = toughness;
    }

    public int getLoyalty() {
        return loyalty;
    }

    public void setLoyalty(int loyalty) {
        this.loyalty = loyalty;
    }

    public String getLayout() {
        return layout;
    }

    public void setLayout(String layout) {
        this.layout = layout;
    }

    public List<String> getNames() {
        return names;
    }

    public void setNames(List<String> names) {
        this.names = names;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Tags getTags(){
        return tags;
    }

    public void setTags(Tags tags) {
        this.tags = tags;
    }

    public String getValidity() {
        return validity;
    }

    public void setValidity(String validity) {
        this.validity = validity;
    }

    @Override
    public String toString() {
        return "Card{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", manaCost='" + manaCost + '\'' +
                ", cmc=" + cmc +
                ", colors=" + colors +
                ", subtypes=" + subtypes +
                ", types=" + types +
                ", supertypes=" + supertypes +
                ", type='" + type + '\'' +
                ", rarity='" + rarity + '\'' +
                ", text='" + text + '\'' +
                ", power='" + power + '\'' +
                ", toughness='" + toughness + '\'' +
                ", loyalty=" + loyalty +
                ", layout='" + layout + '\'' +
                ", names=" + names +
                ", number='" + number + '\'' +
                ", tags=" + tags +
                ", validity='" + validity + '\'' +
                '}';
    }
}

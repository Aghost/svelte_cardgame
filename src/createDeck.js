class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.content = `${this.suit}${this.getVal()}`;
        this.color = suit == "♥" || suit == "♦" ? "red" : "black";
        this.visible = true;
        this.selected = false;
    }

    getVal() {
        switch(this.value) {
            case 1: return "A";
            case 11: return "J";
            case 12: return "Q";
            case 13: return "K";
            default: return this.value;
        }
    }
}

export default function createDeck() {
    var SUITS = ["♠", "♣", "♥", "♦"];
    var VALUES = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];

    return SUITS.flatMap(suit => VALUES.map(value => new Card(suit, value)));
}

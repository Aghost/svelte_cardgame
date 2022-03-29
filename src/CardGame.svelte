<script>
    import createDeck from './createDeck.js';
    import CardController from './CardController.js';

    let deck = createDeck();
    deck = CardController.shuffle(deck);

    let hand = CardController.draw(2, deck);
    hand = CardController.move(deck, 1, hand);

    let score = 0;

    let moveCards = (src, amt, dst) => {
        CardController.move(src, amt, dst);
        hand = hand;
        deck = deck;
    };

    let moveToTop = () => {
        console.log("MOVE TO CARDCONTROLLER");
        for (let i = hand.length - 1; i > -1; i--) {
            if (hand[i].selected) {
                hand[i].selected = false;
                CardController.addTop(deck, hand.splice(i, 1));
            }
        }

        deck = deck;
        hand = hand;
    };

    let moveToBottom = () => {
        console.log("MOVE TO CARDCONTROLLER");
        for (let i = hand.length - 1; i > -1; i--) {
            if (hand[i].selected) {
                hand[i].selected = false;
                CardController.addBottom(deck, hand.splice(i, 1));
            }
        }

        deck = deck;
        hand = hand;
    };

    let addScore = () => {
        let _score = 0;

        hand.forEach(a => {
            console.log(a.value);

            if (a.visible) {
                _score += (a.value > 10) ? 10 : a.value;
            }

        });

        hand.filter(a => a.value === 1 && a.visible).forEach(a => _score += (_score + 10 > 21) ? 0 : 10);

        console.log(_score);
        return _score;
    };
</script>

<h1>BlackJack</h1>
<button on:click={ moveCards(deck, 1, hand) }> Draw a card </button>
<button on:click={ moveCards(hand, 1, deck) }> Return a card </button>

<button on:click={ moveToTop(hand, 1, deck) }> Return to Top</button>
<button on:click={ moveToBottom(hand, 1, deck) }> Return to Bottom </button>

<button on:click={ () => console.log(CardController.peekTop(deck)) }> Peek Top Deck </button>
<button on:click={ () => console.log(CardController.peekBottom(deck)) }> Peek Bottom Deck </button>

<table>
    <tr>
        <h2>Hand:</h2>
        {#each hand as card}
        <td>
            <button class="cardimg {card.color} {card.selected ? "selected" : card.color}" on:click={() => card.selected = !card.selected}>{card.content}</button>
        </td>
        {/each}
    </tr>
    <tr>
        <h2>Deck:</h2>
        {#each deck as card}
        <td>
            <button class="cardimg {card.color} {card.selected ? "selected" : card.color}" on:click={() => card.selected = !card.selected}>{card.content}</button>
        </td>
        {/each}
    </tr>
</table>

<button on:click={ () => deck = CardController.shuffle(deck) }> Shuffle Deck </button>
<button on:click={ () => score = addScore() }> Add Score </button>
{score}

<style>
    .cardimg {
        vertical-align: text-top;
        border: 1px solid #000;
        box-shadow: 3px 3px 1px #420;
        margin: 3px;
        min-width: 64px;
        min-height: 89px;
        font-weight: 1000;
    }

    .cardback {
        background-color: #000;
        color: #000;
        font-weight: 1000;
        vertical-align: text-top;
        border: 1px solid #000;
        box-shadow: 2px 2px 1px #aaa;
        margin: 3px;
        min-width: 64px;
        min-height: 89px;
    }

    .red {
        color: #f00;
    }

    .selected {
        border: 1px solid #0f0;
    }
</style>

export default class CardController {
    static shuffle(cards) {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    static peekTop(cards) {
        return cards[cards.length - 1];
    }

    static peekBottom(cards) {
        return cards[0];
    }

    static addTop(src, cards) {
        cards.forEach(c => {
            src.push(c);
        });

        return src;
    }

    static addBottom(src, cards) {
        cards.forEach(c => {
            src.unshift(c);
        });

        return src;
    }

    static draw(num, cards) {
        return cards.splice(0, num);
    }

    static move(src, num, dst) {
        for (let i = num; i > 0; i--) {
            dst.push(...src.splice(-1, 1));
        }

        return dst;
    }
}

import fm from 'front-matter';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

// Obtém os dados dos cards
const entries = import.meta.glob('/src/assets/cards/*.md', { as: 'raw', eager: true });
const cards = [];
for (let key of Object.keys(entries)) {
    const { attributes, body } = fm(entries[key]);
    const card = {
        ...attributes,
        descricao: DOMPurify.sanitize(marked.parse(body))
    };

    if (card.imagem) {
        card.imagem = new URL(`/src/assets/cards/imagens/${card.imagem}`, import.meta.url).href;
    }

    cards.push(card);
}

// Ordena os cards por ordem crescente pelo id
cards.sort((a, b) => a.id - b.id);

export default {

    getCards() {
        return cards;
    },

    getCard(id) {
        return cards.find(card => card.id === id);
    }

};

import fm from 'front-matter';
import { marked } from '~marked';
import DOMPurify from '~dompurify';


const ARQUIVOS = import.meta.glob(`@/assets/cards/*.md`, { as: 'raw', eager: true });
//const IMAGEM_INDEFINIDA = new URL('/src/assets/card-noimage.png', import.meta.url);

// Arrays que armazenam os dados das cartas
const CARTAS = [];
const GENIOS = [];

// Obtém os dados das cartas a partir dos arquivos .md
for (let key of Object.keys(ARQUIVOS)) {

    // Extrai os atributos e o texto da carta
    const { attributes, body } = fm(ARQUIVOS[key]);
    const carta = {
        ...attributes,
        id: key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.')),
        descricao: DOMPurify.sanitize(marked.parse(body))
    };

    // Define a URL da imagem da carta
    if (carta.imagem) {
        let arquivo = carta.imagem.substring(0, carta.imagem.lastIndexOf('.')) + '.png';
        carta.imagem = new URL(`/src/assets/cards/imagens/${arquivo}`, import.meta.url);
    } else {
        //carta.imagem = IMAGEM_INDEFINIDA;
        carta.imagem = '';
    }

    // Adiciona a carta ao array de cartas
    CARTAS.push(carta);

    // Adiciona o gênio ao array de gênios
    if (carta.genio) {
        GENIOS.push(carta);
    }
}

// Ordena as cartas em ordem crescente pelo id
CARTAS.sort((a, b) => a.id - b.id);


export default {

    /**
     * Retorna um array com todas as cartas.
     * @returns {Array} Retorna um array com todas as cartas.
     */
    buscarCartas() {
        return CARTAS;
    },

    /**
     * Retorna um array com as cartas de gênios.
     * @returns {Array} Retorna um array com as cartas de gênios.
     */
    buscarGenios() {
        return GENIOS;
    },

    /**
     * Retorna um array com as cartas do deck de um gênio específico.
     * @param {String} genio Nome do deck/gênio.
     * @param {Boolean} incluirGenio Se true, inclui a carta do gênio no array.
     * @returns {Array} Retorna um array com as cartas do deck.
     */
    buscarCartasPorGenio(genio, incluirGenio = true) {
        if (incluirGenio) {
            return CARTAS.filter(carta => carta.deck === genio);
        }
        return CARTAS.filter(carta => carta.deck === genio || carta.genio !== genio);
    },

    /**
     * Retorna uma carta a partir de seu id.
     * @param {Number} id Id da carta.
     * @returns {Object} Retorna um objeto com os dados da carta.
     */
    buscarCartaPorId(id) {
        if (typeof id === 'number') {
            return CARTAS[id];
        }
        return CARTAS.find(carta => carta.id === id);
    }

};

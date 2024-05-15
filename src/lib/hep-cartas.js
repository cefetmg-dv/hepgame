import fm from 'front-matter';
import { marked } from 'marked';
import DOMPurify from 'dompurify';


const ARQUIVOS = import.meta.glob(`/src/assets/cards/*.md`, { as: 'raw', eager: true });
const URL_CARTA_SEM_IMAGEM = new URL(`/src/assets/card-noimage.png`, import.meta.url).href;
const PATH_IMAGENS = '/src/assets/cards/imagens';

// Arrays que armazenam os dados das cartas
const CARTAS = [];
const GENIOS = [];

// Obtém os dados das cartas a partir dos arquivos .md
for (let key of Object.keys(ARQUIVOS)) {

    // Extrai os atributos e o texto da carta
    const { attributes, body } = fm(ARQUIVOS[key]);
    const carta = {
        ...attributes,
        descricao: DOMPurify.sanitize(marked.parse(body))
    };

    // Define a URL da imagem da carta
    if (carta.imagem) {

        // Correção temporária até que os arquivos .md das cartas sejam ajustados
        carta.imagem = carta.imagem.substring(0, carta.imagem.lastIndexOf('.'));

        carta.imagem = new URL(`${PATH_IMAGENS}/${carta.imagem}.png`, import.meta.url).href;
    } else {
        carta.imagem = URL_CARTA_SEM_IMAGEM;
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
     * @returns {Array} Retorna um array com as cartas do deck.
     */
    buscarCartasPorGenio(genio) {
        return CARTAS.filter(carta => carta.deck === genio);
    },

    /**
     * Retorna uma carta a partir de seu id.
     * @param {Number} id Id da carta.
     * @returns {Object} Retorna um objeto com os dados da carta.
     */
    buscarCartaPorId(id) {
        return CARTAS.find(carta => carta.id === id);
    }

};

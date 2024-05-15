import hepCartas from '@/lib/hep-cartas.js';

class Jagador {
    constructor(nome, deck) {
        this.nome = nome;
        this.deck = deck;
        this.cartas = [];
        this.energia = 1;
    }
}

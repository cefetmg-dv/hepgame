<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
  
<!-- Aqui ficam posicionados os decks do jogador 1 e 2 -->
  <div class="container">
    <div class="row">
      <div class= "col align-self-center">
        <div class= "row mb-5">
          <Card :cardId="6" class="deck-card-1"  ></Card>
        </div>

        <div class= "row">
          <Card :cardId="6" class="deck-card-2"  ></Card>
        </div>
      </div>

          <!-- Aqui ficam posicionados a mão e o campo do jogador 1 -->

        <div class="col-10">
          <div class="row justify-content-center mb-2">
            <div v-for="(card, index) in player1.cards" :key="index" class="col-1">
                    <Card :cardId="card.id" class="deck-card-1"></Card>
                </div>
          </div>
          <div class="row justify-content-center mb-3">
            <div v-for="(card, index) in player1.cards" :key="index" class="col-2">
                    <Card :cardId="card.id" class="deck-card-1"></Card>
                </div>
          </div>

            <!-- Aqui ficam posicionados a mão e o campo do jogador 2-->

          <div class="row justify-content-center mb-2">
            <div v-for="(card, index) in player2.cards" :key="index" class="col-2">
                    <Card :cardId="card.id" class="deck-card"></Card>
                </div>
          </div>
          <div class="row justify-content-center">
            <div v-for="(card, index) in player2.cards" :key="index" class="col-1">
                    <Card :cardId="card.id" class="deck-card"></Card>
                </div>
          </div>
        </div>
      
<!-- Aqui ficam posicionados os gênios do jogador 1 e 2 -->

        <div class= "col align-self-center">
          <div class= "row mb-5">
            <Card :cardId="6" class="genio-card-1"></Card>
          </div>
          <div class= "row ">
                <Card :cardId="6" class="genio-card-2 "  ></Card>
          </div>
        </div>
      
        
    </div>
  </div>
</template>


<!-- ---------------------------------------------------------------------- -->
<!-- JavaScript                                                             -->
<!-- ---------------------------------------------------------------------- -->
<script>
import cardUtils from '@/composables/card-utils.js';
import Card from '@/components/Card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
        player1: {
            name: 'Player 1',
            cards: [],
        },
        player2: {
            name: 'Player 2',
            cards: [],
        },
      //
    };
  },
  created() {
  
    this.player1.cards.push(cardUtils.getCard(1));
    this.player1.cards.push(cardUtils.getCard(2));
    this.player1.cards.push(cardUtils.getCard(3));
    this.player1.cards.push(cardUtils.getCard(4));
    this.player1.cards.push(cardUtils.getCard(5));

    this.player2.cards.push(cardUtils.getCard(1));
    this.player2.cards.push(cardUtils.getCard(2));
    this.player2.cards.push(cardUtils.getCard(3));
    this.player2.cards.push(cardUtils.getCard(4));
    this.player2.cards.push(cardUtils.getCard(5));
  },
  mounted() {
    // TODO
  },
  methods: {
    //função para preencher uma mão 
    preencher(){
      this.player1.cards.push(cardUtils.getCard(this.gerarNumeroAleatorio(1,10)));
    },
    gerarNumeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
};
</script>


<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped>
.deck-card-1{
  transform: rotate(180deg);
}
.genio-card-1{
  transform: rotate(180deg);
}
</style>

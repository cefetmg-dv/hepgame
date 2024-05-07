<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
    <div class="row">
        <div class="col-12">
          <div class="row justify-content-center">
            <div class="col-1">
              <Card :cardId="6" class="deck-card"></Card>
            </div>
            <div class="col-1">
              <Card :cardId="7" class="deck-card"></Card>
            </div>
            <div class="col-1">
              <Card :cardId="8" class="deck-card"></Card>
            </div>
          </div>
        </div>
        <div class="col-12">
            <div class="row justify-content-center">
                <div v-for="(card, index) in player1.cards" :key="index" class="col-1">
                    <Card :cardId="card.id" class="deck-card"></Card>
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
      //
    };
  },
  created() {
    this.player1.cards.push(cardUtils.getCard(1));
    this.player1.cards.push(cardUtils.getCard(2));
    this.player1.cards.push(cardUtils.getCard(3));
    this.player1.cards.push(cardUtils.getCard(4));
    this.player1.cards.push(cardUtils.getCard(5));
  },
  mounted() {
    // TODO
  },
  methods: {
    // TODO
  }
};
</script>


<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped>
</style>

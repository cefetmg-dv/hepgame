<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
    <div class="row">
        <div class="col-12">
          <div class="row justify-content-center">
            <div class="col-1">
              <Carta :carta="6" class="deck-card"></Carta>
            </div>
            <div class="col-1">
              <Carta :carta="7" class="deck-card"></Carta>
            </div>
            <div class="col-1">
              <Carta :carta="8" class="deck-card"></Carta>
            </div>
          </div>
        </div>
        <div class="col-12">
            <div class="row justify-content-center">
                <div v-for="(carta, idx) in jogador_1.cartas" :key="index" class="col-1">
                    <Carta :carta="carta.id" class="deck-card"></Carta>
                </div>
            </div>
        </div>
    </div>
</template>


<!-- ---------------------------------------------------------------------- -->
<!-- JavaScript                                                             -->
<!-- ---------------------------------------------------------------------- -->
<script>
import hepCartas from '@/lib/hep-cartas.js';
import Carta from '@/components/Carta.vue';

export default {
  components: {
    Carta
  },
  data() {
    return {
        jogador_1: {
            nome: 'Jogador 1',
            cartas: [],
        },
      //
    };
  },
  created() {
    this.jogador_1.cartas.push(hepCartas.buscarCartaPorId(1));
    this.jogador_1.cartas.push(hepCartas.buscarCartaPorId(2));
    this.jogador_1.cartas.push(hepCartas.buscarCartaPorId(3));
    this.jogador_1.cartas.push(hepCartas.buscarCartaPorId(4));
    this.jogador_1.cartas.push(hepCartas.buscarCartaPorId(5));
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

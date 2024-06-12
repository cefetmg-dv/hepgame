<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
  <!--Primeira linha de cartas do jogador 2-->
    <div class="row justify-content-center">
      <div class="col-1 align-self-center">
        <Carta :carta="6" class="deck-card-2"></Carta>
      </div>

      <div class="col-10">
        <div class="row justify-content-center">
          <div v-for="(carta, idx) in jogador_1.cartas" :key="idx" class="col-1">
            <Carta :carta="carta.id" class="deck-card-2"></Carta>
          </div>
        </div>
      </div>

      <div class="col-1 align-self-center">
        <Carta :carta="6" class="deck-card-2"></Carta>
      </div>

    </div>
    <!-- Segunda linha de cartas do jogador 1 e 2-->
    <div class="row justify-content-center">
      <div class="col-1 align-self-center mt-3 ">
        <Carta :carta="6" class="deck-card-2"></Carta>
      </div>
      <div class="col-10">
        <div class="row row justify-content-center">
          <div class="col-8">
            <div class="row justify-content-center">
              <div v-for="(carta, idx) in jogador_1.cartas" :key="idx" class="col-2">
                <Carta :carta="carta.id" class="deck-card-2"></Carta>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>

      <div class="col-1 align-self-center mt-3">
        <Carta :carta="6" class="deck-card-1"></Carta>
      </div>
      <div class="col-10">
        <div class="row justify-content-center mt-2">
          <div class="col-8">
            <div class="row justify-content-center">
              <div v-for="(carta, idx) in jogador_2.cartas" :key="idx" class="col-2">
                <Carta :carta="carta.id" class="deck-card-1"></Carta>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>

     <!-- Terceira linha de cartas do jogador 2-->
    <div class="row justify-content-center">
      <div class="col-1 align-self-center mt-3">
        <Carta :carta="6" class="deck-card-1"></Carta>
      </div>

      <div class="col-10">
        <div class="row justify-content-center mt-3">
          <div v-for="(carta, idx) in jogador_2.cartas" :key="idx" class="col-1">
            <Carta :carta="carta.id" class="deck-card-1"></Carta>
          </div>
        </div>
      </div>

      <div class="col-1 align-self-center">
        <Carta :carta="6" class="deck-card-1"></Carta>
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
      jogador_2: {
        nome: 'Jogador 2',
        cartas: [],
      }
    };
  },
  created() {
    this.jogador_1.cartas.push(hepCartas.buscarCartaPorId(1));
    this.jogador_1.cartas.push(hepCartas.buscarCartaPorId(2));
    this.jogador_1.cartas.push(hepCartas.buscarCartaPorId(3));
    this.jogador_1.cartas.push(hepCartas.buscarCartaPorId(4));
    this.jogador_1.cartas.push(hepCartas.buscarCartaPorId(5));

    this.jogador_2.cartas.push(hepCartas.buscarCartaPorId(1));
    this.jogador_2.cartas.push(hepCartas.buscarCartaPorId(2));
    this.jogador_2.cartas.push(hepCartas.buscarCartaPorId(3));
    this.jogador_2.cartas.push(hepCartas.buscarCartaPorId(4));
    this.jogador_2.cartas.push(hepCartas.buscarCartaPorId(5));
  },
  mounted() {
    // TODO
  },
  methods: {
  }
};
</script>


<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped>
</style>
<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
  
<!-- Aqui ficam posicionados os decks do jogador 1 e 2 -->
  <div class="container">
    <div class="row">
      <div class= "col align-self-center">
        <div class= "row mb-5">
          <Carta :carta="6" class="deck-card-1"  ></Carta>
        </div>

        <div class= "row">
          <Carta :carta="6" class="deck-card-2"  ></Carta>
        </div>
      </div>

          <!-- Aqui ficam posicionados a mão e o campo do jogador 1 -->

        <div class="col-10">
          <div class="row justify-content-center mb-2">
            <div v-for="(carta, idx) in jogador_1.cartas" :key="idx" class="col-1">
                    <Carta :carta="carta.id" class="deck-card-1"></Carta>
                </div>
          </div>
          <div class="row justify-content-center mb-3">
            <div v-for="(carta, idx) in jogador_1.cartas" :key="idx" class="col-2">
                    <Carta :carta="carta.id" class="deck-card-1"></Carta>
                </div>
          </div>

            <!-- Aqui ficam posicionados a mão e o campo do jogador 2-->

          <div class="row justify-content-center mb-2">
            <div v-for="(carta, idx) in jogador_2.cartas" :key="idx" class="col-2">
              <Carta :carta="carta.id" class="deck-card"></Carta>
            </div>
          </div>
          <div class="row justify-content-center">
            <div v-for="(carta, idx) in jogador_2.cartas" :key="index" class="col-1">
              <Carta :carta="carta.id" class="deck-card"></Carta>
            </div>
          </div>
        </div>
      
<!-- Aqui ficam posicionados os gênios do jogador 1 e 2 -->

        <div class= "col align-self-center">
          <div class= "row mb-5">
            <Carta :carta="6" class="genio-card-1"></Carta>
          </div>
          <div class= "row ">
            <Carta :carta="6" class="genio-card-2 "  ></Carta>
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
    //função para preencher uma mão 
    preencher() {
      this.jogador_1.cartas.push(hepCartas.buscarCartaPorId(this.gerarNumeroAleatorio(1,10)));
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

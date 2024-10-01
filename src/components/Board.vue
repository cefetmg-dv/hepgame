<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
  
  <!--Primeira linha de cartas do jogador 2-->
    <div class="row justify-content-center">
      <div class="col-1 align-self-center">
        <div class="row">
          <div class="col-10">
            <Carta :carta="6" class="deck-card-2"></Carta>
          </div>
        </div>
       
      </div>

      <div class="col-10">
        <div class="row justify-content-center">
          <div v-for="(carta, idx) in jogador_1.cartas" :key="idx" class="col-1">
            <Carta :carta="carta.id" class="deck-card-2"></Carta>
          </div>
        </div>
      </div>

      <div class="col-1 align-self-center">
        <div class="row">
          <div class="col-10">
            <Carta :carta="6" class="deck-card-2"></Carta>
          </div>
        </div>
      </div>

    </div>
    <!-- Segunda linha de cartas do jogador 1 e 2-->
    <div class="row justify-content-center mt-5">
      <div class="col-1 align-self-center mt-3 ">
        <div class="card">
          <div class="border"></div>
          <Carta :carta="6" class="genio"></Carta>
        </div>
        
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
        <div class="card">
          <div class="border">
          </div>
          <Carta :carta="6" class="genio"></Carta>
        </div>
        
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
    <div class="row justify-content-center mt-5">
      <div class="col-1 align-self-center mt-3">
        <div class="row">
          <div class="col-10">
            <Carta :carta="6" class="deck-card-1"></Carta>
          </div>
        </div>
      </div>

      <div class="col-10">
        <div class="row justify-content-center mt-3">
          <div v-for="(carta, idx) in jogador_2.cartas" :key="idx" class="col-1">
            <Carta :carta="carta.id" class="deck-card-1"></Carta>
          </div>
        </div>
      </div>

      <div class="col-1 align-self-center">
        <div class="row">
          <div class="col-10">
            <Carta :carta="6" class="deck-card-1"></Carta>
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
  }
};
</script>


<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped>
.deck-card-2{
  border: solid 1px rgb(250, 82, 82);
  border-radius: 7px;
}
.deck-card-1{
  border: solid 1px rgb(123, 123, 243);
  border-radius: 7px;
}

.border{
  position: absolute;
  inset: 0;
  background: conic-gradient(from 0deg,white, rgb(214, 19, 201), white, rgb(216, 13, 231));
}

.border::after{
  content: '';
  position: absolute;
  inset: 0;
  top:50%;
  left: 50%;
  min-width: 200%;
  min-height: 200%;
  aspect-ratio: 1/1;
  background: conic-gradient(from 0deg,white, rgb(214, 19, 201), white, rgb(216, 13, 231));
  transform: translate(-50%, -50%) rotate(0deg);
  animation: rotate 5s linear infinite;
  filter: blur(5px);
}
.card{
  --border-width: 4px;
  position: relative;
  display: inline-block;
  padding: var(--border-width);
  overflow: hidden;
  background-color: rgb(54, 51, 51);
  
}
.genio{
  position: relative;
  
}

@keyframes rotate{
  to{
    transform:  translate(-50%, -50%) rotate(360deg);
  }
}
</style>
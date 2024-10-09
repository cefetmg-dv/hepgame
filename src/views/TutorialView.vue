<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
  <back-to-menu />
  <div class="container-fluid p-5 ">
    <div class="m-auto">
      <h2 style="color: #0aaaf5;">Objetivo da Partida</h2>
      <br>
      <p>Os jogadores deverão formar um átomo escolhido no início da partida a partir de partículas elementares.
        Quem formar o átomo primeiro, vence.</p>
      <p>Por exemplo, um jogo onde o objetivo é formar um átomo de hidrogênio.</p>
      <div class="row justify-content-center mb-3">
        <div class="col-3 ">
          <Carta :carta="18" class="deck-card-2 " data-aos="fade-right"></Carta>
        </div>
      </div>
      <p>Veja que o número atômico é 1, logo os jogadores nesta partida deverão formar 1 próton, 1 nêutron e 1 elétron.
        Quem formar primeiro o hidrogênio, vence!
      </p>
      <p>Mas neste jogo os gênios da física criam as partículas elementares somente, assim para formar um prótons e
        nêutrons
        é preciso:</p>
      <h3>Próton = 2 quarks up + 1 quark down + 1 glúon </h3>

      <div class="row justify-content-center mt-5  mb-5 ">
        <div class="col-2 ">
          <Carta :carta="19" class="deck-card-2" data-aos="fade-right" data-aos-delay="100"></Carta>
        </div>
        <div class="col-1 d-flex align-items-center justify-content-center">
          <h1 data-aos="fade-right" data-aos-delay="150">=2x</h1>
        </div>

        <div class="col-2 ">
          <Carta :carta="12" class="deck-card-2" data-aos="fade-right" data-aos-delay="200"></Carta>
        </div>
        <div class="col-1 d-flex align-items-center justify-content-center">
          <h1 data-aos="fade-right" data-aos-delay="250">1x</h1>
        </div>
        <div class="col-2 ">
          <Carta :carta="11" class="deck-card-2" data-aos="fade-right" data-aos-delay="300"></Carta>
        </div>
        <div class="col-1 d-flex align-items-center justify-content-center">
          <h1 data-aos="fade-right" data-aos-delay="350">1x</h1>
        </div>
        <div class="col-2 ">
          <Carta :carta="8" class="deck-card-2" data-aos="fade-right" data-aos-delay="400"></Carta>
        </div>
      </div>

      <h3>Nêutron = 1 quark up + 2 quarks down + 1 glúon </h3>

      <div class="row justify-content-center mt-5 mb-5">
        <div class="col-2 ">
          <Carta :carta="19" class="deck-card-2" data-aos="fade-right" data-aos-delay="100"></Carta>
        </div>
        <div class="col-1 d-flex align-items-center justify-content-center">
          <h1 data-aos="fade-right" data-aos-delay="150">=1x</h1>
        </div>

        <div class="col-2 ">
          <Carta :carta="12" class="deck-card-2" data-aos="fade-right" data-aos-delay="200"></Carta>
        </div>
        <div class="col-1 d-flex align-items-center justify-content-center">
          <h1 data-aos="fade-right" data-aos-delay="250">2x</h1>
        </div>
        <div class="col-2 ">
          <Carta :carta="11" class="deck-card-2" data-aos="fade-right" data-aos-delay="300"></Carta>
        </div>
        <div class="col-1 d-flex align-items-center justify-content-center">
          <h1 data-aos="fade-right" data-aos-delay="350">1x</h1>
        </div>
        <div class="col-2 ">
          <Carta :carta="8" class="deck-card-2" data-aos="fade-right" data-aos-delay="400"></Carta>
        </div>
      </div>

      <h2 style="color: #0aaaf5;">Início da Partida</h2>
      <p>Suponha que vc escolher o deck de gênio Murray GellMann, após embaralhamento sua mão inicial é essa:</p>
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-3">
          <Carta :carta="7" class="deck-card-2" data-aos="fade-right"></Carta>
        </div>
      </div>
      <p>O gênio GellMann já começa na mesa, pois foi o gênio escolhido pelo jogador.
      </p>
      <p>A sua mão inicial foi:</p>

      <div class="row justify-content-center mt-5 mb-5">
        <div class="col-2 ">
          <Carta :carta="11" class="deck-card-2" data-aos="fade-right" data-aos-delay="100"></Carta>
        </div>
        <div class="col-2 ">
          <Carta :carta="11" class="deck-card-2" data-aos="fade-right" data-aos-delay="200"></Carta>
        </div>
        <div class="col-2 ">
          <Carta :carta="8" class="deck-card-2" data-aos="fade-right" data-aos-delay="300"></Carta>
        </div>
        <div class="col-2 ">
          <Carta :carta="12" class="deck-card-2" data-aos="fade-right" data-aos-delay="400"></Carta>
        </div>
      </div>
      <p>Caso o jogador não goste da mão selecionada é possível realizar um mulligan, nesse processo o jogador pode
        descartar a mão,
        embaralhar novamente, e comprar do topo 4 quartas, com o pagamento de descartar 1 carta dentre as 4 compradas.
        Cada mulligan
        feito é pago com o descarte de 1 carta.</p>
      <h2 style="color: #0aaaf5;">1º Turno</h2>
      <p>O jogador que inicia o jogo não compra carta.
      </p>
      <p>No primeiro turno todos os jogadores só tem 1 energia para gastar. Todas as cartas têm o custo de energia
        marcado em sua descrição, veja:
      </p>
      <div class="row mb-3">
        <div class="col-1"></div>
        <div class="col-10 d-flex align-items-center justify-content-center">
          <img src="../assets/tutorial_img/tutorial1.png" alt="tutorial 1" class="img-fluid" data-aos="fade-right"
            style="width: 400px; height: 100px; max-width: auto; max-height: auto;">
        </div>
        <div class="col-1"></div>
      </div>
      <p>Pague 2, ou seja, duas energias para jogar a carta. Pagando o custo dela, a carta sai de sua mão e vai para a
        mesa.
        Essa carta é o quark down.</p>
      <p>Essa carta necessita de 2 energias, porém existe uma habilidade passiva do gênio GellMann</p>

      <div class="row mb-3">
        <div class="col-1"></div>
        <div class="col-10 d-flex align-items-center justify-content-center">
          <img src="../assets/tutorial_img/tutorial2.png" alt="tutorial 1" class="img-fluid" data-aos="fade-right"
            style="width: 400px; height: 100px; max-width: auto; max-height: auto">
        </div>
        <div class="col-1"></div>
      </div>
      <p>Com essa habilidade o jogador pode jogar a jogar a carta quark down por 2 – 1 energias, ou seja, paga somente 1
        e joga a carta.
      </p>
      <p>Por isso no primeiro turno ele poderia jogar qualquer quark, seja down ou up, já que ambos têm o mesmo custo de
        energia.</p>
      <p>Ainda no primeiro turno, quando o primeiro jogador fizer a jogada e terminar seu turno, o próximo jogador,
        antes de jogar,
        deve comprar uma carta. E assim será para o resto do jogo, todo jogador, antes de iniciar seu turno, compra uma
        carta.
      </p>
      <p>Caso o jogador não queira usar suas energias disponíveis é só escolher passar fase até que termine o turno.
      </p>
      <p>O mais promissor no jogo é usar suas energias o mais efetivamente possível, tentando desperdiçar o menos
        possível.</p>
      <h2 style="color: #0aaaf5;">2º Turno</h2>
      <p> No segundo turno os jogadores terão disponíveis 2 energias para serem gastas, na fase inicial de cada jogador
        deve-se comprar 1 carta.</p>
      <h2 style="color: #0aaaf5;">Turnos seguintes</h2>
      <p>A partida prossegue do mesmo modo até alguém formar o elemento atômico escolhido como condição de vitória.
        O jogo possui várias cartas que trazem reviravoltas e habilidades diferentes. Comece a jogar e descubra as
        incríveis interações que criamos para vocês!</p>
      <h2 style="color: #0aaaf5;">Fases de Cada Jogador</h2>

      <h4 style="color: red;">Fase Inicial</h4>
      <p>Aqui o jogador ganha energia de acordo com o turno e depois compra uma carta, se permitido.</p>

      <h4 style="color: red;">Fase Intermediária</h4>
      <p>Aqui o jogador joga as cartas ou habilidades de acordo com o conteúdo de energia disponível para gastar.</p>

      <h4 style="color: red;">Fase Final</h4>
      <p>Aqui o jogador forma as partículas compostas possíveis, se assim desejar, e termina seu turno.</p>
    </div>
  </div>
</template>


<!-- ---------------------------------------------------------------------- -->
<!-- JavaScript                                                             -->
<!-- ---------------------------------------------------------------------- -->
<script>
import { RouterLink, RouterView } from 'vue-router';
import BackToMenu from '@/components/BackToMenu.vue';
import Carta from '@/components/Carta.vue';


export default {
  components: {
    BackToMenu,
    Carta
  }
};
</script>


<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped>
h3,h2{
  text-align: center;
}

p {
 
  text-align: justify;
}

.deck-card {
  opacity: 0; /* As cartas começam invisíveis */
  transition: opacity 0.5s ease-out; /* Transição suave para a opacidade */
}

/* Quando a animação é aplicada */
[data-aos="fade-up"] {
  opacity: 1;
}

.container-fluid {
  max-width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
}

</style>

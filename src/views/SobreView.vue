<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
  <back-to-menu />
  <div class="container-fluid p-5 ">
    <div class="m-auto">
      
      <h2 style="color: #0aaaf5;">Qual é o nosso objetivo?</h2>
      <br>
      <p>Nosso objetivo é desenvolver um jogo online, gratuito, visualmente atrativo e multiplataforma, inspirado em renomados jogos de cartas, voltado para o ensino de física de partículas, atomística, química e estrutura da matéria.
      </p>
      <h2 style="color: #0aaaf5;">Quem somos?</h2>
      <br>
      <p>O HEP-TCG é uma iniciativa dos professores Rafael Marcelino do Carmo Silva e André Luiz Maravilha Silva, do CEFET-MG campus Divinópolis. Este projeto, ativo desde 2021, integra uma pesquisa nas áreas de ensino, física de partículas, atomística e programação. Toda a construção do jogo tem sido realizada pela comunidade do CEFET-MG, com o apoio valioso de alunos e professores listados a seguir.</p>
      <br>
      <strong>Equipe</strong>
      <br><br>
      <ul>
        <li><strong>Rafael Marcelino do Carmo Silva</strong><br>Professor efetivo no CEFET-MG campus Divinópolis, bacharel em Física, mestre em Física Teórica e doutor em Física de Partículas. Fã de Diablo 4, Path of Exile e Magic: The Gathering. @rafamarce<br><br></li>
        <li><strong>André Luiz Maravilha Silva</strong><br>Professor efetivo no CEFET-MG campus Divinópolis, graduado em Sistemas de Informação, mestre e doutor em Engenharia Elétrica. @andrelmaravilha<br><br></li>
        <li><strong>Savanna Campagnani</strong><br>Ex-aluna do curso técnico em Mecatrônica no CEFET-MG campus Divinópolis, foi a primeira participante do projeto, auxiliando na construção da mecânica do jogo através de um BIC-Jr (2021-2022). Também criou a arte do gênio da física Richard Feynman. @savanna.campagnani<br><br></li>
        <li><strong>Marcela Membrive</strong><br>Ex-aluna do curso técnico de Produção de Moda no CEFET-MG campus Divinópolis, responsável pela arte do deck do físico Murray Gell-Mann e pelos avatares do jogo. @mcela_ml<br><br></li>
        <li><strong>Marco Túlio Amaral</strong><br>Ex-aluno do curso técnico em Informática no CEFET-MG campus Divinópolis. Foi responsável pela arte de todo o deck do gênio da física Paul Dirac. @mtamaral_<br><br></li>
        <li><strong>Luiza Moreira</strong><br>Ex-aluna do curso técnico de Produção de Moda no CEFET-MG campus Divinópolis. Foi responsável pela moldura e identidade visual de todas as cartas da versão alpha do jogo. @luuh.moreir4<br><br></li>
        <li><strong>Thomás Teixeira Pereira</strong><br>Aluno do curso de graduação em Engenharia de Computação no CEFET-MG campus Divinópolis. Foi bolsista em um projeto BCE em 2021-2022, responsável pela implementação inicial do projeto na plataforma GitHub e pelos desenvolvimentos iniciais em JavaScript (React). @thomasteix_<br><br></li>
        <li><strong>Gustavo Henrique D’Anunciação Ferreira</strong><br>Aluno do curso de graduação em Engenharia de Computação no CEFET-MG campus Divinópolis. Foi bolsista em um projeto BCE em 2022-2023, responsável pela implementação inicial dos recursos do jogo em Vue e melhorias no site. @gustavo.henrique_92<br><br></li>
        <li><strong>Mateus Henrique Pereira</strong><br>Aluno do curso de graduação em Engenharia de Computação no CEFET-MG campus Divinópolis. Foi bolsista em dois projetos BCE em 2023-2024. Foi responsável pela versão atual do site e pela finalização do jogo em sua fase alpha de forma física, além de projetar uma visualização se como seria a mesa do jogo. @mteusw<br><br></li>
        <li><strong>Mariana Manoel</strong><br>Aluna do curso técnico de Produção de Moda no CEFET-MG campus Divinópolis. Foi responsável pela criação do logo do jogo. @mareanalu<br><br></li>
      </ul>
    </div>
  </div>
</template>

<!-- ---------------------------------------------------------------------- -->
<!-- JavaScript                                                             -->
<!-- ---------------------------------------------------------------------- -->
<script>
import { RouterLink, RouterView } from 'vue-router';
import BackToMenu from '@/components/BackToMenu.vue';

export default {
  components: {
    BackToMenu
  }
};
</script>

<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped>
h2 {
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
  margin: 0 auto;
}
</style>

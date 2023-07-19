<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
  <div class="container-fluid menu">
    <div class="row menu-row">
      <div class="col menu-item text-center">
        <RouterLink to="/jogo" data-text="Jogar">Jogar</RouterLink>
      </div>
      <div class="col menu-item text-center">
        <RouterLink to="/tutorial" data-text="Tutorial">Tutorial</RouterLink>
      </div>
      <div class="col menu-item text-center">
        <RouterLink to="/decks" data-text="Decks">Decks</RouterLink>
      </div>
      <div class="col menu-item text-center">
        <RouterLink to="/sobre" data-text="Sobre">Sobre</RouterLink>
      </div>
    </div>
  </div>
</template>


<!-- ---------------------------------------------------------------------- -->
<!-- JavaScript                                                             -->
<!-- ---------------------------------------------------------------------- -->
<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>


<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped>
.menu {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    overflow: hidden;
}

.menu-row {
    position: relative;
    display: flex;
    flex-direction: column;
}

.menu-item {
    font-family: 'Poppins', sans-serif;
    list-style: none;
    transition: 0.5s;
}

.menu-item a {
    padding: 0 10px;
    position: relative;
    color: transparent;
    text-decoration: none;
    text-transform: uppercase;
    font-weight:900;
    font-size: 5em;
    letter-spacing: 2px;
    line-height: 1.2em;
}

@media (max-width: 992px) {
.menu-item a { 
    font-size: 2.5em;
}}

.menu-item a:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    -webkit-text-stroke: 1px #0aaaf5;
    transform: translateX(0);
    transition: 0.5s;
    pointer-events: none;
}

.menu-item a:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    color: #03f4f2;
    -webkit-text-stroke: 1px #0aaaf5;
    transform: translateX(-100%);
    transition: 0.5s;
    opacity: 0;
    pointer-events: none;
}

.menu-item a:hover:before {
    transform: translateX(100%);
    opacity: 0;
}

.menu-item a:hover:after {
    transform: translateX(0);
    opacity: 1;
}
</style>

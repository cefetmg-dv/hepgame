<!-- ---------------------------------------------------------------------- -->
<!-- JavaScript                                                             -->
<!-- ---------------------------------------------------------------------- -->
<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>


<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
  <back-to-menu />
  <div class="container">
    <div class="genio1">
      <p class="drag" draggable="true">Genio 1</p>
    </div>
    <div class="campo1">
      <div class="cards1 hands">
        <div class="drag_item">
          <p class="drag" draggable="true">2</p>
        </div>
        <div class="drag_item">
          <p class="drag" draggable="true">2</p>
        </div>
        <div class="drag_item">
          <p class="drag" draggable="true">3</p>
        </div>
        <div class="drag_item">
          <p class="drag" draggable="true">4</p>
        </div>
        <div class="drag_item">
          <p class="drag" draggable="true">5</p>
        </div>
      </div>
      <div class="cards1 place">
          <div class="drop_item"></div>
          <div class="drop_item"></div>
          <div class="drop_item"></div>
          <div class="drop_item"></div>
          <div class="drop_item"></div>
      </div>


    </div>
    <div class="deck1">
      <p class="drag" draggable="true">deck 1</p>
    </div>
    <div class="genio2">
      <p class="drag" draggable="true">Genio 2</p>
    </div>
    <div class="campo2">
      <div class="cards2 place">
        <div class="drop_item"></div>
          <div class="drop_item"></div>
          <div class="drop_item"></div>
          <div class="drop_item"></div>
          <div class="drop_item"></div>
      </div>

      <div class="cards2 hands">
        <div class="drag_item">
          <p class="drag" draggable="true">2</p>
        </div>
        <div class="drag_item">
          <p class="drag" draggable="true">2</p>
        </div>
        <div class="drag_item">
          <p class="drag" draggable="true">3</p>
        </div>
        <div class="drag_item">
          <p class="drag" draggable="true">4</p>
        </div>
        <div class="drag_item">
          <p class="drag" draggable="true">5</p>
        </div>
      </div>
    </div>
    <div class="deck2">
      <p class="drag" draggable="true">deck 2 </p>
    </div>
  </div>
</template>

<script>
import BackToMenu from '../components/BackToMenu.vue';
import cardUtils from '@/composables/card-utils.js';
import { RouterLink, RouterView } from 'vue-router';
import Card from '@/components/Card.vue';
export default {
  components: {
    Card,
    BackToMenu
  },
  data() {
    return {
      cards: cardUtils.getCards(),
    };
  },

}


</script>

<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped>
.container {
  width: 1700px;
  height: 650px;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px;

  padding: 1px;
  justify-items: center;
  align-items: center;
}

.drag_item{
  width: 100px;
  height: 120px;
  border-radius: 5px;
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
}
.drop_item {
    width: 120px;
    height: 160px;
    border-radius: 5px;
    background-color: white;
    margin-left: 10px;
    margin-right: 10px;
    
}


.genio1 {
  padding: 1px;
  height: 200px;
  width: 150px;
}


.campo1 {
  padding: 1px;
  height: 300px;
  width: 750px;
  display: grid;
  grid-template-rows: 1fr, 1fr;
  justify-items: center;
  align-items: center;
}

.cards1.place {
  display: flex;
  justify-content: center;
  
}

.cards1.hands {
  height: 120px;
  width: 650px;
  display: flex;
  justify-content: center;

}

.deck1 {
  padding: 1px;
  height: 200px;
  width: 150px;
}

.genio2 {
  padding: 1px;
  height: 200px;
  width: 150px;
}

.campo2 {
  padding: 1px;
  height: 300px;
  width: 750px;
  display: grid;
  grid-template-rows: 1fr, 1fr;
  justify-items: center;
  align-items: center;

}



.cards2.place {
  display: flex;
  justify-content: center;

}

.cards2.hands {
  height: 120px;
  width: 650px;
  display: flex;
  justify-content: center;
}


.deck2 {

  padding: 1px;
  height: 200px;
  width: 150px;
}
.drag {
  font-size: 36px;
  font-weight: bold;
  width: 100%;
  height: 100%;
  background-color: goldenrod;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>

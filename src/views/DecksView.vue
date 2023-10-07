<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>

  <BackToMenu/>
  <!-- Modal para exibir detalhes do card -->
  <div id="cardModal" class="modal" tabindex="-1">
    <div class="modal-dialog modal-lg modal-fullscreen-md-down modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content text-dark">
        <div class="modal-header">
          <h1 class="modal-title h5">{{ modal.card?.nome }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-5 mb-3 text-center">
                <img :src="modal.card?.imagem" :alt="modal.card?.nome" class="img-fluid img-thumbnail rounded">
              </div>
              <div class="col-12 col-md-7 mb-3">
                <div class="row">
                  <div class="col-12 mb-3">
                    <div class="hstack gap-3">
                      <span v-if="modal.card?.genio" class="badge text-bg-success">Gênio</span>
                      <span v-for="(tag, index) in modal.card?.tags" :key="index" class="badge text-bg-primary">{{ tag }}</span>
                    </div>
                  </div>
                  <div class="col-12" v-html="modal.card?.descricao">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Listagem dos cards -->
  <div class="container">
    <div class="row py-5 gx-5 gy-5">
      <div v-for="(card, index) in cards" :key="index" class="col-12 col-md-3">
        <Card :cardId="card.id" @click="() => { exibirModal(card.id) }" class="deck-card hvr-grow"></Card>
      </div>
    </div>
  </div>

</template>


<!-- ---------------------------------------------------------------------- -->
<!-- JavaScript                                                             -->
<!-- ---------------------------------------------------------------------- -->
<script>
import { RouterLink, RouterView } from 'vue-router';
import Card from '@/components/Card.vue';
import * as bootstrap from 'bootstrap';
import cardUtils from '@/composables/card-utils.js';
import BackToMenu from '../components/BackToMenu.vue';

export default {
  components: {
    RouterLink,
    RouterView,
    Card,
    BackToMenu
  },
  data() {
    return {
      cards: cardUtils.getCards(),
      modal: {
        elemento: null,
        card: null
      }
    };
  },
  created() {
  },
  mounted() {
    this.modal.elemento = new bootstrap.Modal(document.querySelector('#cardModal'));
  },
  methods: {
    exibirModal(id) {
      this.modal.card = cardUtils.getCard(id);
      this.modal.elemento.show();
    }
  }
};
</script>


<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped>
.deck-card {
  cursor: pointer;
}
</style>

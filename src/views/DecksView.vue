<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>

  <BackToMenu/>
  <!-- Modal para exibir detalhes do card -->
  <div id="modal-carta" class="modal" tabindex="-1">
    <div class="modal-dialog modal-lg modal-fullscreen-md-down modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content text-dark">
        <div class="modal-header">
          <h1 class="modal-title h5">{{ modal.carta?.nome }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-5 mb-3 text-center">
                <img :src="modal.carta?.imagem" :alt="modal.carta?.nome" class="img-fluid img-thumbnail rounded">
              </div>
              <div class="col-12 col-md-7 mb-3">
                <div class="row">
                  <div class="col-12 mb-3">
                    <div class="hstack gap-3">
                      <span v-if="modal.carta?.genio" class="badge text-bg-success">Gênio</span>
                      <span v-for="(tag, idx) in modal.carta?.tags" :key="idx" class="badge text-bg-primary">{{ tag }}</span>
                    </div>
                  </div>
                  <div class="col-12" v-html="modal.carta?.descricao">
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
      <div v-for="(carta, idx) in cartas" :key="idx" class="col-12 col-md-2">
        <Carta :carta="carta.id" @click="() => { exibirModal(carta.id) }" class="hep-carta hvr-grow"></Carta>
      </div>
    </div>
  </div>

</template>


<!-- ---------------------------------------------------------------------- -->
<!-- JavaScript                                                             -->
<!-- ---------------------------------------------------------------------- -->
<script>
import HEPCartas from '@/lib/hep-cartas.js';
import Carta from '@/components/Carta.vue';
import BackToMenu from '@/components/BackToMenu.vue'
import * as bootstrap from '~bootstrap';

export default {
  components: {
    Carta,
    BackToMenu
  },
  data() {
    return {
      cartas: HEPCartas.buscarCartas(),
      modal: {
        elemento: null,
        carta: null
      }
    };
  },
  created() {
  },
  mounted() {
    this.modal.elemento = new bootstrap.Modal(document.querySelector('#modal-carta'));
  },
  methods: {
    exibirModal(id) {
      this.modal.carta = HEPCartas.buscarCartaPorId(id);
      this.modal.elemento.show();
    }
  }
};
</script>


<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped>
.hep-carta {
  cursor: pointer;
}
</style>

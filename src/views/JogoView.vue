<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
  <back-to-menu/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <Board />
      </div>
    </div>
  </div>
</template>


<!-- ---------------------------------------------------------------------- -->
<!-- JavaScript                                                             -->
<!-- ---------------------------------------------------------------------- -->
<script>
import BackToMenu from '../components/BackToMenu.vue';
import Board from '@/components/Board.vue';

export default {
  components: {
    BackToMenu,
    Board
  },
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {
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

<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
    <div class="hep-card">
        <img :src="card.imagem" :alt="card.nome" class="rounded">
    </div>
</template>


<!-- ---------------------------------------------------------------------- -->
<!-- JavaScript                                                             -->
<!-- ---------------------------------------------------------------------- -->
<script>
import cardUtils from '@/composables/card-utils.js';
export default {
    props: {
        cardId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            card: null,
        }
    },
    methods: {
    },
    created() {
        this.card = cardUtils.getCard(this.cardId);
    },
}
</script>


<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped>
.hep-card {
    margin: 0;
    padding: 0;
    max-width: 100% !important;
    width: 100% !important;
}

.hep-card img {
    width: 100%;
    height: auto;
}
</style>

<!-- ---------------------------------------------------------------------- -->
<!-- HTML                                                                   -->
<!-- ---------------------------------------------------------------------- -->
<template>
    <div class="hep-carta">
        <img :src="dados.imagem" :alt="dados.nome" class="rounded">
    </div>
</template>


<!-- ---------------------------------------------------------------------- -->
<!-- JavaScript                                                             -->
<!-- ---------------------------------------------------------------------- -->
<script>
import hepCartas from '@/lib/hep-cartas.js';

export default {
    props: {
        carta: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            dados: null
        }
    },
    methods: {
    },
    created() {
        this.dados = hepCartas.buscarCartaPorId(this.carta);
    },
}
</script>


<!-- ---------------------------------------------------------------------- -->
<!-- CSS                                                                    -->
<!-- ---------------------------------------------------------------------- -->
<style scoped>
.hep-carta {
    margin: 0;
    padding: 0;
    max-width: 100% !important;
    width: 100% !important;
}

.hep-carta img {
    width: 100%;
    height: auto;
}
</style>

<template>
    <div class="container-fluid">

        <tarjeta :id="this.$store.state.formulario.id" :email="this.$store.state.formulario.email" />

    </div>
</template>
<script>
import tarjeta from "~/components/forms/tarjeta.vue"
export default {

    beforeCreate() {

    },

    components: {
        tarjeta
    }

}
</script>
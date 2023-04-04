<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-4 text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png"
            class="img-fluid" width="150px" />
        </div>
        <div class="col-12 col-lg-4">
          <div class="row">
            <div class="col-12 col-lg-6 text-center">
              {{ this.$store.state.formulario.nombre }}
              {{ this.$store.state.formulario.paterno }}
              {{ this.$store.state.formulario.materno }}
            </div>
            <div class="col-12 col-lg-6 text-center">
              {{ this.$store.state.formulario.telefono }}
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 align-self-center">

        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6 py-lg-4 my-auto text-center">
          <img src="img/gatos.webp" class="img-fluid" width="500">
        </div>

        <div class="col-12 col-md-6 col-lg-6">
          <formulario />
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import formulario from "~/components/forms/formulario.vue"

export default {
  name: 'IndexPage',
  components: {
    formulario,

  }
}



</script>

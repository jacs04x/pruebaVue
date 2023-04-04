<template>
    <div class="container-fluid">

        <tarjeta :id="this.$store.state.formulario.id" :email="this.$store.state.formulario.email" />
        <!--       <div class="table-responsive">
        <table class="table table-striped">
          <thead style="background-color: #dedede">
            <tr>
              <th scope="col">Cobertura</th>
              <th scope="col">Suma asegurada</th>
              <th scope="col">Deducible</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in this.$store.state.coberturas"
              :key="index"
            >
              <td>{{ item | showName }}</td>
              <td>{{ item | showSuma }}</td>
              <td>{{ item | showDeducible }}</td>
            </tr>
          </tbody>
        </table>
      </div> -->
    </div>
</template>
<script>
import tarjeta from "~/components/forms/tarjeta.vue"
export default {

    beforeCreate() {

    },

    components: {
        tarjeta
    },
    filters: {

    }

}
</script>
<template>
    <div class="col-12 col-md-6 col-lg-10 m-auto">
        <form method="POST" @submit.prevent="validar()">
            <div class="row">
                <div class="col-12 text-center">
                    <h1> Autores de libros</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12 form mt-4">
                    <select class="form-control mb-2" title="marca" v-model="$store.state.formulario.marca" required=""
                        name="marca" id="marca" style="overflow: hidden; width: 100%">
                        <option value>Selecciona Autor</option>
                        <option v-for="marca in formData.marcas" :key="marca.id">
                            {{ marca.name }}
                        </option>
                    </select>

                </div>
            </div>
            <div class="row mt-5">
                <span class="col-12 ">
                    <button type="submit" class="btn btn-block btn-success ">
                        <div class="row justify-content-center">
                            <strong>Ver información</strong>

                        </div>
                    </button>
                </span>
            </div>

        </form>


    </div>
</template>


<script>
import Marcas from "~/plugins/marcas.js"

const marca = new Marcas()
export default {

    data() {
        return {
            formData: {
                marcas: [],
                resto: []
            }
        }
    },

    async created() {
        this.getMarcas()
    },

    methods: {
        validar: function () {
            this.cuerpo()
            $nuxt._router.push({ path: '/gracias' });
        },
        getMarcas() {
            marca.marca().then((resp) => {
                console.log(resp);
                this.formData.marcas = resp.data

            }
            ).catch((error) => {
                alert("error")
            })

        },

        cuerpo() {
            if (this.$store.state.formulario.marca != '') {
                this.formData.marcas.forEach(element => {
                    if (element.name == this.$store.state.formulario.marca) {
                        this.$store.state.formulario.id = element.id
                        this.$store.state.formulario.email = element.email
                    }
                });
            }
        }

    }

}
</script>
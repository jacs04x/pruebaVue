import Vuex from "vuex"

const createStore = () => {

    return new Vuex.Store(
        {
            state: {
                formulario: {
                    nombre: 'Jonatan Alejandro',
                    paterno: 'Castro',
                    materno: 'Mejia',
                    correo: 'jonatanacm01@gmail.com ',
                    cp: '56428',
                    telefono: '5583233224',
                    marca: ''
                },
            }
        }
    )
}

export default createStore;
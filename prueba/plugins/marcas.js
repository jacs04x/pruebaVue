import axios from 'axios'

class Marcas {

    marca () {
        return axios({
            method: 'get',
            url : process.env.api
        })
    }

}

export default Marcas
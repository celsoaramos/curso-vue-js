import Vue from 'vue'
import axios from 'axios'

// URL base para acessar o banco global
//axios.defaults.baseURL = 'https://curso-vue-b7146.firebaseio.com/'
//axios.defaults.headers.common['Authorization'] = 'abc123'
//axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({

    install(Vue) {
        // para deixar o $http disponível para toda a app
        // dessa forma acessaremos o axios de forma global
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-b7146.firebaseio.com/',
            headers: {
                /*
                get: {
                    "Authorization": "abc123"
                }
                */
                // enviará Authorization para todas requisições
                // pode servir para enviar o token do usuario logado em cada request
                "Authorization": "abc123"
            }
        })

        // para interceptar as requisicoes
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)

            /*
            if (config.method == 'post') {
                config.method = 'put'
            }

            console.log(config.method)
            */

            return config
        }, error => Promise.reject(error))

        
        // interceptar resposta
        /*
        Vue.prototype.$http.interceptors.response.use(resp => {
            /*
            const array = []

            for (let chave in resp.data) {
                array.push({ id: chave, ...resp.data[chave] })
                // ou
              //array.push({ id: chave, nome: resp.data[chave].nome, email: resp.data[chave].email })
            }

            resp.data = array
            return resp
            
        }, error => Promise.reject(error))
        */
    } 
})




import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
//import Usuario from './components/usuario/Usuario'
//import UsuarioLista from './components/usuario/UsuarioLista'
//import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
//import UsuarioEditar from './components/usuario/UsuarioEditar'
import Menu from './components/template/Menu'
import MenuAlternativo from './components/template/MenuAlternativo'

// registra o plugin do Router dentro do VUE
Vue.use(Router)

// para usar lazy load
// /* webpackChunkName: "usuario" */  é para carregar um grupo de componentes
const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

const router = new Router ({

    // hash ou history
    // no modo history é preciso configurar o servidor web (olhar documentação do VueRouter)
    // no modo history você consegue digitar a URL para navegar para uma página, porém tem que ter o servidor configurado
    // no modo history também é possível utilizar as setas do browser para navegação
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {

        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }

    },
    routes: [
        {
            path: '/',
            name: 'inicio',
            // component: Inicio,
            components: {
                default: Inicio,
                menu: Menu
            }
        }, 
        {
            path: '/usuario/',
            //component: Usuario,
            components: {
                default: Usuario,
                menu: MenuAlternativo,
                menuInferior: MenuAlternativo,
            },
            props: true,
            children: [
                { path: '', component: UsuarioLista },
                {   path: ':id', 
                    component: UsuarioDetalhe, 
                    props: true, 
                    beforeEnter: (to, from, next) => { 
                        console.log('antes da rota -> Usuario detalhe') 
                        next()
                    }
                },
                { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' },
            ]
        }, {
            // quando tiver a URL / redirecionar jogará para Usuario
            path: '/redirecionar',
            redirect: '/usuario'
        }, {
            // quando for digitado URL não mapeada redirecionará para a home
            path: '*',
            redirect: '/'
        }
    ]

})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global')

    next()
    /*
    if (to.path != 'usuario') {
        next('/usuario')
    } else {
        next()
    }
    */
})

export default router

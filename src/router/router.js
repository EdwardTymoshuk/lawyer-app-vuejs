import Vue from 'vue'
import Router from 'vue-router'

import store from '../vuex/store'
import CasesContainer from '../components/Cases/CasesContainer'
import CasesContainerFullItem from '../components/Cases/CasesContainerFullItem'
import Login from '../components/Login'
import Registration from '../components/Registration'



Vue.use(Router)

const ifNotAuth= (to, from, next) => {
    if (!store.getters.IS_AUTH.isAuth) {
      next()
      return
    }
    next('/')
  }
  const ifAuth= (to, from, next) => {
    if (store.getters.IS_AUTH.isAuth) {
      next()
      return
    }
    next('/login')
  }

let router = new Router({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'main',
        component: CasesContainer,
        props: true,
        beforeEnter: ifAuth
    },
    {
        path: '/cases',
        name: 'cases',
        component: CasesContainer,
        props: true,
        beforeEnter: ifAuth
    },
    {
        path: '/cases/:caseId',
        name: 'caseElement',
        component: CasesContainerFullItem,
        props: true,
        beforeEnter: ifAuth
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        props: true,
        beforeEnter: ifNotAuth
    },
    {
        path: '/registration',
        name: 'registration',
        component: Registration,
        props: true,
        beforeEnter: ifNotAuth
    }
]
})

export default router;
import Vue from 'vue'
import Router from 'vue-router'

import CasesContainer from '../components/Cases/CasesContainer'
import CasesContainerFullItem from '../components/Cases/CasesContainerFullItem'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
    {
        path: '/cases/:caseId',
        name: 'caseElement',
        component: CasesContainerFullItem,
        props: true
    },
    {
        path: '/cases',
        name: 'cases',
        component: CasesContainer,
        props: true
    },
    {
        path: '/',
        name: 'main',
        component: CasesContainer,
        props: true
    }
]
})

export default router;
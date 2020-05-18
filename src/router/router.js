import Vue from 'vue'
import Router from 'vue-router'

import CasesContainer from '../components/Cases/CasesContainer'
import CasesContainerFullItem from '../components/Cases/CasesContainerFullItem'

Vue.use(Router)

let router = new Router({
    routes: [
    {
        path: '/',
        name: 'main',
        component: CasesContainer
    },
    {
        path: '/cases/case',
        name: 'caseElement',
        component: CasesContainerFullItem,
        props: true
    }
]
})

export default router;
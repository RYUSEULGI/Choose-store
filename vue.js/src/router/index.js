import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculator from '@/views/Calculator'
import TodoList from '@/views/TodoList'

Vue.use(VueRouter)

const routes = [
    {
        path: '/calculator',
        name: Calculator,
        component: Calculator
    },
    {
        path: '/todoList',
        name: TodoList,
        component: TodoList
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
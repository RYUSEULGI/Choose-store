import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculator from '@/views/Calculator'
import TodoList from '@/views/TodoList'
import Place from '@/views/Place'
import Signup from '@/views/member/Signup'
import Login from '@/views/member/Login'

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
    },
    {
        path: '/Signup',
        name: Signup,
        component: Signup
    },
    {
        path: '/login',
        name: Login,
        component: Login
    },
    {
        path: '/place',
        name: Place,
        component: Place
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
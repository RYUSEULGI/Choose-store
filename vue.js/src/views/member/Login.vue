<template>
    <div>
        <h2>login</h2>

        <form @submit.prevent="handleSubmit" action="">
            <v-text-field
            v-model="email"
            label="email"
            :rules="rules"
            hide-details="auto"
            ></v-text-field>
            <v-text-field v-model="password" :rules="rules" label="password"></v-text-field>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name:'Login',
        data(){
            return{
                email: '',
                password: ''
            }
        },
        methods: {
            async hadleSubmit(){
                const response = await axios.post('http://localhost:7777/login', {
                    email: this.email,
                    password: this.password
                });
                localStorage.setItem('token', response.data.token);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="signupForm">
        <h2>Signup</h2>
        <!-- prevent = e.preventDefault(); -->
        <form @submit.prevent="handleSubmit" action="">
            <v-text-field
            v-model="name"
            label="name"
            :rules="rules"
            hide-details="auto"
            ></v-text-field>
            <v-text-field v-model="email" :rules="rules" label="email"></v-text-field>
            <v-text-field v-model="password" :rules="rules" label="password"></v-text-field>
            <v-text-field v-model="password_confirm" :rules="rules" label="password_confirm"></v-text-field>
            <v-btn type="submit" block>등록하기</v-btn>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'Signup',
        data(){
            return{
                rules: [
                    value => !!value || '입력해주세요.',
                    value => ( value && value.length)
                ],
                name: '',
                email: '',
                password: '',
                password_confirm: ''
            }
        },
        methods: {
            async handleSubmit(){
                const response = await axios.post('http://localhost:7777/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirm: this.password_confirm
                });
                console.log(response);
                this.$router.push('/login');
            }
        },
    } 
</script>

<style>
.signupForm{
    padding: 10px;
}
</style>
<template>
    <div class="todoList">
        <v-text-field
            v-model="newTaskTitle"
            @click:append="addTask"
            @keyup.enter="addTask"
            class="pa-4"
            outlined
            label="해야할일"
            append-icon="mdi-plus"
            hide-details
            clearable
        >
        </v-text-field>
        <v-list flat>
            <div class="section"
                v-for="task in tasks"
                :key="task.id">
                <v-list-item 
                    @click="doneTask(task.id)"
                    :class="{ 'blue lighten-5' : task.done }"
                >
                    <template v-slot:default>
                        <v-list-item-action>
                        <v-checkbox
                            :input-value="task.done"
                            color="primary"
                        ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title 
                            :class="{ 'text-decoration-line-through' : task.done }"
                        >
                        {{ task.title }}
                        </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn @click.stop="deleteBtn(task.id)" icon>
                                <v-icon color="primary">mdi-delete</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </template>
                </v-list-item>
                <v-divider></v-divider>
            </div>
        </v-list>
    </div>
</template>

<script>
    export default {
        name: 'TodoList',
        data(){
            return{
                newTaskTitle: '',
                tasks:[
                    {id: 1, title : '투두리스트 샘플', done: false},
                ]
            }
        },
        methods: {
            doneTask(id){
                const task = this.tasks.filter(task => task.id === id)[0];
                task.done = !task.done;
            },
            deleteBtn(id){
                this.tasks = this.tasks.filter(task => task.id !== id);
            },
            addTask(){
                const newTask = {
                    id: Date.now(),
                    title: this.newTaskTitle,
                    done: false
                };
                this.tasks.push(newTask);
                this.newTaskTitle = '';
            }
        }
    }
</script>

<style>

</style>
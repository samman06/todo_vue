<template>
    <section class="real-app">
        <div>
            <h4 v-if="error" class="error">Task Name is Required</h4>
            <input
                    type="text"
                    class="add-input"
                    autofocus="autofocus"
                    placeholder="Task Name"
                    v-model="taskName"
                    @keyup.enter="addTodo"
            >
        </div>
        <div class="scroll">
            <item
                    :todo="todo"
                    v-for="todo in filteredTodos"
                    :key="todo.id"
                    @delete="deleteTodo"
            />
        </div>
        <tabs
                :filter="filter"
                :todos="todos"
                @toggle="toggleFilter"
                @clearAllCompleted="clearAllCompleted"
        />
    </section>
</template>

<script>
    import Item from './item.vue'
    import Tabs from './tabs.vue'

    let id = 0
    export default {
        data() {
            return {
                todos: [],
                filter: 'all',
                error: false,
                taskName: ""
            }
        },
        components: {
            Item,
            Tabs,
        },
        computed: {
            filteredTodos() {
                if (this.filter === 'all') {
                    return this.todos
                }
                const completed = this.filter === 'completed'
                return this.todos.filter(todo => completed === todo.completed)
            }
        },
        methods: {
            addTodo() {
                if (this.taskName === "") {
                    this.error = true
                } else {
                    this.todos.unshift({
                        id: id++,
                        content: this.taskName.trim(),
                        completed: false
                    })
                    this.error = false
                    this.taskName = ''
                }
            },
            deleteTodo(id) {
                this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
            },
            toggleFilter(state) {
                this.filter = state
            },
            clearAllCompleted() {
                this.todos = this.todos.filter(todo => !todo.completed)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .real-app {
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666
    }

    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 60px;
    }

    .error {
        color: red;
        text-align: center;
        padding 5 0 0 0;
    }

    .scroll {
        height: 575px;
        overflow-x: hidden;
        overflow-y: auto;
        text-align: justify;
    }
</style>



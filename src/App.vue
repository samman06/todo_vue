<template>
    <div id="app">
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/header.vue'
    import Footer from './components/footer.jsx'
    import Todo from './components/todo.vue'

    export default {
        components: {
            Header,
            Footer,
            Todo,
        }
    }
</script>

<style lang="stylus" scoped>
    #app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }

    #cover {
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        opacity .9
        z-index -1
    }
</style>



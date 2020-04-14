<template>
    <div class="main-body">
        <div class="books">
            <VueBook
                v-for="(book, index) in this.$store.state.showBooks"
                :key="index"
                :book="book"
                :index="(index+1)"
            />
            <div class="is-empty" v-if="!this.$store.state.showBooks.length">
                No books
            </div>
        </div>
    </div>
</template>


<script>
    import VueBook from './VueBook.vue'

    export default {
        data: function () {
            return {
            }
        },
        components: {
            VueBook
        },
        created(){
            this.$store.getters.filterBooks
        }
    }
</script>

<style scoped>
    .main-body{
        padding: 0px 4%;
    }
    .is-empty{
        display: flex;
        justify-content: center;
        align-items: center;
        color: gray;
        width: 100%;
        height: 200px;
    }
</style>
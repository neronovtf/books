<template>
    <div class="main-body">
        <div class="books">
            <VueBook
                v-for="(book, index) in this.$store.getters.getBooksCertainType"
                :key="index"
                :book="book"
                :index="(index+1)"
            />
            <div class="is-empty" v-if="!this.$store.getters.getBooksCertainType.length">
                No books found
            </div>
            <!-- <VueBook :books="books"/> -->
        </div>
    </div>
</template>


<script>
    import VueBook from './VueBook.vue'
    // import Axios from "axios"

    export default {
        data: function () {
            return {
            }
        },
        components: {
            VueBook
        },
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
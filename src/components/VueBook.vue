<template>
    <div class="book">
        <div class="number-book">{{index}}</div>
        <div class="book-info">
            <div class="title">{{book.title}}</div>
            <div class="author">
                <div>{{book.author}}</div>
                <VueLikes :book="book"/>
            </div>
            <div class="description">{{book.description}}</div>
        </div>
    </div>
</template>


<script>
    import VueLikes from './VueLikes.vue'

    export default {
        props: ["book", "index"],
        data(){
            return {

            }
        },
        components: {
            VueLikes
        }
    };

</script>

<style scoped>
.book{
    display: flex;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: .5px solid #E6E6E6;
    /* margin-bottom: ; */
}
.book:last-child{
    margin-bottom: 0px;
    padding-bottom: 0px;
    border-bottom: none;
}
.number-book{
    width: 50px;
    height: 50px;
    background-color: #435869;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 1.5rem;
}
.book-info{
    /* display: inline-block; */
    flex: 1 0;
    color: #212a31;
}
.title{
    font-size: 1.2rem;
    font-weight: 400;
}
.author{
    display: flex;
    font-weight: 100;
    font-size: .8em;
    line-height: 20px;
    color: gray;
    justify-content: space-between;
    margin-bottom: 10px;
}
</style>
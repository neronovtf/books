
import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"

Vue.use(Vuex)

let library = new Vuex.Store({
    state:{
        books: []
    },
    mutations: { // последовательне
        SET_BOOKS: (state, books) =>{
            state.books = books
        }
    }, 
    actions: { // асинхронные
        GET_BOOKS({commit}){
            return Axios('http://localhost:3000/books', {
                method: "GET"
            })
            .then((books) => {
                commit('SET_BOOKS', books.data);
            })
            .catch((error) =>{
                console.log(error);                
            })
        }
    },
    getters: {
        BOOKS(state){
            return state.books;
        }
    }
})

export default library;
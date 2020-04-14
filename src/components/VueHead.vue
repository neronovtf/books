<template>
    <div class="head">
        <div class="name-site">
            <div class="title">{{title}}</div>
            <div class="new-book" @click="addNewBook">
                ADD BOOK
            </div>
        </div>
        <div class="search">
            <form>
                <input
                    v-model="findBooks"
                    placeholder="Search by book or author"
                    @keypress.enter.prevent
                >
                <svg height="30" width="30" viewBox="0 0 48 48">
                    <path d="M31 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55v1.58l10 9.98 2.98-2.98-9.98-10zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/>
                    <path d="M0 0h48v48h-48z" fill="none"/>
                </svg>
            </form>
        </div>
        <div class="panel">
            <div class="filter">
                <span>Filter</span>
                <ul>
                    <li
                        v-for="(type, index) in types"
                        :key="index"
                        :class="{ active: type.isActive }"
                        @click="changeType(type)"
                    >{{type.text}} ({{fill(type)}})</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'LIBRARY',
      types: [
          {key: 0, text: 'All', isActive: true},
          {key: 1, text: 'My', isActive: false},
          {key: 2, text: 'Liked', isActive: false},
      ]
    }
  },
    methods:{
        changeType(type){
            this.types.forEach(type => type.isActive = false)
            type.isActive = true
            this.$store.state.activeType = type.key
            this.$store.getters.filterBooks
        },
        fill(type){
            let count = 0
            switch (type.key) {
                case 0: count = this.$store.state.books.length; break;
                case 1: count = this.$store.state.books.filter(book => book.myBook).length; break;
                case 2: count = this.$store.state.books.filter(book => book.ILike).length; break;
            }
            return count;
        },
        addNewBook(){
            this.$store.state.showPopup = true
        },
    },
    computed:{
        findBooks:{
            get(){
                return this.$store.state.searchText
            },
            set(value){
                this.$store.state.searchText = value
                this.$store.getters.filterBooks
            }
        }
    }
}
</script>

<style scoped>
    .name-site{
        padding: 20px 4% 20px 5%;
        background-color: #435869;
        color: #e7f0ed;
        font-weight: 100;
        display: flex;
        align-items: center;
    }
    .name-site .title{
        font-size: 2rem;
        width: 100%;
    }
    .search{
        padding: 15px 4% 0px 4%;
    }
        .search form{
            position: relative;
            display: flex;
        }
        .search input {
            width: 100%;
            border-radius: 4px;
            height: 42px;
            border: 1px solid #435869;
            padding-left: 15px;
            padding-right: 35px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .search svg{
            position: absolute;
            top: 9px;
            fill: #435869;
            right: 6px;
        }
    .panel{
        padding: 15px 4%;
        display: flex;
        margin-bottom: 10px;
        user-select: none;
    }
    .filter{
        display: flex;
        align-items: center;
        width: 100%;
        color: #212a31;
    }
    .filter span{
        border-right: 1px solid #E6E6E6;
        padding-right: 10px;
    }
    .filter ul{
        margin: 0px;
        padding: 0px 0px 0px 10px;
    }
    .filter li{
        display: inline;
        margin-right: 10px;
        cursor: pointer;
    }
    .filter li:last-child{
        margin-right: 0px;
    }
    .filter .active{
        border-bottom: 1px solid #435869;
    }
    .new-book{
        white-space: nowrap;
        color:  #f97f02;
        color: #fecb02;
        background-color: #fecb02;
        padding: 5px 15px;
        border-radius: 20px;
        color: #435869;
        font-weight: 400;
        line-height: 30px;
        cursor: pointer;
    }
</style>
<template>
    <div>
        <div class="name-site">
            <div class="title">{{title}}</div>
            <div class="new-book">
                ADD BOOK
            </div>
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
      ],
    }
  },
    methods:{
        changeType: function(type){
            this.types.forEach(type => type.isActive = false)
            type.isActive = true
            this.$store.state.activeType = type.key
        },
        fill(type){
            let count = 0
            switch (type.key) {
                case 0: count = this.$store.state.books.length; break;
                case 1: count = this.$store.state.books.filter(book => book.myBook).length; break;
                case 2: count = this.$store.state.books.filter(book => book.ILike).length; break;
            }
            return count;
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
    .panel{
        /* padding: 5px 4% 5px 5%; */
        padding: 15px 4%;
        display: flex;
        margin-bottom: 10px;
        user-select: none;

        /* background-color: thistle; */
    }
    .filter{
        display: flex;
        align-items: center;
        /* justify-content: center; */
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
        /* border: 1px solid #000; */
        /* padding: 3px; */
    }
    .filter li:last-child{
        margin-right: 0px;
    }
    .filter .active{
        border-bottom: 1px solid #435869;
    }
    .new-book{
        /* float: right; */
        white-space: nowrap;
        /* background-color: #f97f02; */
        color:  #f97f02;
        color: #fecb02;
        background-color: #fecb02;
        padding: 5px 15px;
        border-radius: 20px;
        color: #435869;
        font-weight: 400;
        line-height: 30px;
        /* padding: 5px 5px; */
    }

</style>
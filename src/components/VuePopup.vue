<template>
    <div class="popup" v-if="this.$store.state.showPopup" @click="close">
        <div class="popup-mask" @click.stop>
            <div class="popup-head">
                ADD NEW BOOK
            </div>
            <div class="popup-body">
                <div class="row">
                    <label>Name of the book</label>
                    <input v-model="titleBook" placeholder="Enter book title"/>
                </div>
                <div class="row">
                    <label>Book author</label>
                    <input v-model="authorBook" placeholder="Enter author of the book"/>
                </div>
                <div class="row">
                    <label>Book description</label>
                    <textarea v-model="descriptionBook" placeholder="Enter book description"></textarea>
                </div>
                <div class="button">
                    <span @click="close" class="cancel">Cancel</span>
                    <button @click="save">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: function () {
        return {
            titleBook: '',
            authorBook: '',
            descriptionBook: ''
        }
    },
    methods: {
        close(){
            this.$store.state.showPopup = false
        },
        save(){
            this.$store.state.books.push({
                title: this.titleBook,
                author: this.authorBook,
                countLikes: 0,
                ILike: false,
                myBook: true,
                description: this.descriptionBook
            });
            this.$store.state.showPopup = false
        }
    }
}
</script>

<style scoped>
.popup{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

}
.popup-mask{
    /* background-color: #e7f0ed; */
    background-color: white;
}
.popup-head{
    background-color: #435869;
    color: #e7f0ed;
    font-weight: 100;
    font-size: 1.7rem;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
}
.popup-body{
    padding: 10px 20px 20px 20px;
}
.row{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
.row:first-child{
    margin-top: 0px;
}
.popup-body label{
    padding-bottom: 5px;
    font-weight: 500;
}
.button{
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    justify-content: space-between;
}
button{
    width: 45%;
    padding: 5px 0px;
}
.cancel{
    color: gray;
    font-size: 14px;
    cursor: pointer;
    /* text-decoration: underline; */
}
textarea{
    max-width: 293px;
    min-height: 50px;
}
</style>
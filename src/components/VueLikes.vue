<template>
    <div class="likes" @click="likeAction">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path v-bind="propertiesSvg"/>
        </svg>
        <span>{{book.countLikes}}</span>
    </div>
</template>

<script>
export default {
    props: ["book"],
    computed:{
        propertiesSvg: function(){
            var redHead = `M12 21c.71-.75 4.762-4.628 7.296-7.306 2.27-2.401 2.222-5.9.157-8.071-2.063-2.172-5.4-2.163-7.453.021-2.053-2.184-5.39-2.193-7.454-.021-2.064 2.17-2.11 5.67.158 8.071C7.237 16.372 11.29 20.25 12 21z`;
            var head = `M12 19.587c-1.116-1.104-3.173-3.126-3.917-3.87l-.317-.317c-.912-.914-1.69-1.712-2.335-2.393-1.867-1.975-1.894-4.871-.16-6.695 1.668-1.756 4.341-1.748 6 .017l.729.775.729-.775c1.659-1.765 4.331-1.773 6-.017 1.734 1.824 1.707 4.72-.16 6.695-.644.681-1.424 1.478-2.335 2.393l-.316.316c-.738.737-2.8 2.765-3.918 3.871z`;
            let properties = {
                "fill-rule": "evenodd"
            };
            properties.fill = this.book.ILike ? "#E00" : "none"
            if(!this.book.ILike){
                properties.stroke = "#222";
                properties['stroke-width'] = 2;
            }
            properties.d = this.book.ILike ? redHead : head

            return properties
        }
    },
    methods:{
        likeAction: function(){
            // alert(this.book.title);
            var isLike = this.book.ILike;
            this.book.ILike = !isLike;
            isLike ? --this.book.countLikes : ++this.book.countLikes;
        }
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.likes{
    height: 20px;
    display: flex;
    cursor: pointer;
}
span{
    font-size: 12px;
    line-height: 20px;
    margin-left: 5px;
}
</style>
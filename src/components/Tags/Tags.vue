<script>
import tag from "./Tag"
import newTag from "./NewTag"

export default {
    components : {
        "vs-new-tag" : newTag ,
        "vs-tag" : tag
    },

    props : {
        "tags" : {
             type: Object,
             default: function () {
                 return [];
                }
            }
    },

    data(){
        return {
            tags : [],
            deletable : true
        }
    },

    methods : {
        newTag(tag) {

            if(!tag){

                this.$emit("error",{
                    type: "warning",
                    message : "The new tag title cannot be empty!"
                })

            } else {
                this.tags.push(tag);
            }
            
        }
    }
  
}
</script>


<template>
    <div class="container">
        <div class="block">
            <vs-new-tag v-on:add="newTag"></vs-new-tag>
            <vs-tag v-for="(item, index) in tags" :key="item" :title="item" :deletable="deletable" @del="tags.splice(index,1)"></vs-tag>
        </div>
        
    </div>
</template>

<style lang="scss">


</style>

<template>
  <div class="container">
      <div class="block">
          <div v-for="record in records" :key="record">
              <span>{{record.title}}</span>
              <span>{{record.price}}</span>

              <vs-tag v-for="(tag, index) in record.tags" :key="tag" :title="tag" :deletable="deletable" @del="record.tags.splice(index,1)"></vs-tag>
          </div>
      </div>
  </div>
</template>

<script>
import tag from "../Tags/Tag"

export default {

    components : {
        "vs-tag" : tag
    },
    
    methods : {
        del : function(title) {

            // alert(title)
            console.log(arguments)

            // this.tags.splice(this.tags.indexOf(title) ,1);

        }
    },
    // props : ["records"],

    data(){
        return {
            records : [
                {
                    title : "кенгурушка",
                    price : 599,
                    tags : ["джемпер","кенгурушка"]
                }, 
                {
                    title : "штаны",
                    price : 699,
                    tags : ["брюки","штаны"]
                }
            ],

            deletable : false
        }
    }

}
</script>


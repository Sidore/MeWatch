
<script>
import warn from "../Warning/Warning"

export default {
    components : {
    
        "vs-warn" : warn
    
    },
    data : function() {
        return {


            }
        }
}
</script>


<template>

    <div class="mainBlock">

    <vs-warn v-for="warn in warnings" :key="warn" :warn="warn" ></vs-warn>

         <div class="sideBar">
             <div class="history">

             </div>
             <div id="tags">
                 <div class="newTag">

                 </div>
                 <div class="tags">

                 </div>
             </div>
             

         </div>

         <div class="content">

             <div class="currentItem">


             </div>

             <div class="toolbar">

             </div>

         </div>

    </div>

</template>
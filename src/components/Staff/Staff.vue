
<script>
import warn from "../Warning/Warning"
import tags from "../Tags/Tags"
import history from "../HistoryStaff/HistoryStaff"
import staffItem from "../Staff/StaffItem"
import toolbar from "../Staff/StaffToolbar"

export default {
    components : {
    
        "vs-warn" : warn ,
        "vs-tags" : tags ,
        "vs-history" : history,
        "vs-staff-item" : staffItem,
        "vs-toolbar" : toolbar
    
    },
    data : function() {
        return {

            warnings : []

            }
        },
    methods : {
        errorHandler : function(warn) {
            if (warn && warn.message) {
                this.warnings.push(warn)
            }
        },
        removeHandler : function(warn) {
            this.warnings.splice(this.warnings.indexOf(warn),1);
        }
    }
}
</script>


<template>

    <div class="mainBlock">

    <div class="container" v-if="warnings.length > 0">
        <vs-warn v-for="warn in warnings" :key="warn" :warn="warn" @remove="removeHandler" hidein="4500"></vs-warn>      
    </div>

         <div class="sideBar">
             
                 <vs-history></vs-history>
             
                 <vs-tags @error="errorHandler"></vs-tags>             

         </div>

         <div class="content">

             <div class="currentItem">

                 <vs-staff-item></vs-staff-item>

             </div>

             <div class="toolbar">

                 <vs-toolbar></vs-toolbar>

             </div>

         </div>

    </div>

</template>
<script>
import warn from "../Warning/Warning"

export default {
    components : {
    
        "vs-warn" : warn
    
    },

    methods : {

        removeHandler : function(item) {

            let index = this.warnings.indexOf(item);
            this.warnings.splice(index,1);
            
        }

    },

    data : function() {
        return {
            
            warnings : [
                { type : "error" , message : "lol kek cheburek" },
                { type : "warning" , message : "kek lol orbidol" },
                { type : "succes" , message : "ok" },
                { type : "info" , message : "FYI" },
                { type : "error" , message : "lol kek cheburek" },
                { type : "warning" , message : "kek lol orbidol" },
                { type : "succes" , message : "ok" },
                { type : "info" , message : "FYI" },
                { type : "simple" , message : "OLolo" }
            ]
        }
    }
}
</script>

<template>

    <div class="container">

        <!-- <div v-for="warn in warnings" :key="warn" class="alert" :class="warn.type">
            {{warn.message}}
        </div> -->

    <vs-warn v-for="(warn, index) in warnings" :key="warn" :warn="warn" @remove="removeHandler" :hidein="500 * index + 1000">
        
    </vs-warn>

        <div class="row">

            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, minima suscipit optio placeat unde explicabo ducimus impedit illum, velit ullam incidunt magnam tenetur? Nisi quaerat sapiente, fugiat alias necessitatibus sed!</div>
            <div>78</div>
            <div>9</div>

        </div>
    </div>

</template>

<style lang="scss">

    .container {
        margin: 15px 15px 0;
        display: flex;
        align-content: center;
        flex-direction: column;
        overflow: auto;
    }

    .block {
        // margin: 0 0 15px;
        padding: 15px;
        background: #FAFAFA;
        color: #212121;
    }

    .row {
        flex-direction: row;
    }

    .column {
        flex-direction: column;
    }

    .row , .column {

        display: flex;
        justify-content: space-between;
        align-items: stretch;

        div {

            display: flex;
            margin: 0 0 15px 15px;
            padding: 15px;
            background: #FAFAFA;
            color: #212121;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }

            
        }
    }

    .alert {

        margin: 0 0 15px;
        padding: 15px;
        color: white;
        background: #03A9F4;

        &.error {
            background: #E53935;           
        }

        &.warning {
            background: #FF9800;
        }

        &.succes {
            background: #8BC34A;
        }

        &.info {
            background: #03A9F4
        }

        &.simple {
            background: #FAFAFA;
            color: #212121;
        }

    }

</style>

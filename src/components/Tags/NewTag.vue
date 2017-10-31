<template>
    <div  @keyup.enter="add">
        <input v-model="data" /> 
        <button @click="add"><i class="fa fa-plus-square" aria-hidden="true"></i></button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            data : ""
        }
    },
    methods: {
        add : function(event) {
            event.preventDefault();
            this.$emit('add', this.data);
            this.data = "";
            
        }
    }
}
</script>


<template>
  
    <transition name="fade">
        <div class="alert" :class="warn.type" @dblclick="remove">
            <i :class="classes[warn.type]"></i>   {{warn.message}}
                <slot></slot>
        </div>
    </transition>

</template>

<script>


export default {
    
    props : ["warn","hidein"],
    data(){
        return {
            classes : {
                error : "fa fa-times-circle",
                warning : "fa fa-exclamation-circle",
                succes : "fa fa-check-circle",
                info : "fa fa-info-circle",
                simple : "fa fa-comment"

            },
            timeout : 0
        }
    },
    methods : {
        remove : function(){
            this.$emit('remove', this.warn);
        }
    },

    created(){
        if (this.hidein && (!isNaN(this.hidein) || this.hidein === "slow" || this.hidein === "fast")) {
            
            let time = !isNaN(this.hidein) ? Number(this.hidein) : this.hidein === "slow" ? 10000 : 4000;
            
            this.timeout = setTimeout(this.remove,time)
        }
    }

}
</script>


<style lang="scss">


    .alert {

        font-size: 16px;
        margin: 0 0 15px;
        padding: 15px;
        color: white;
        background: #03A9F4;
        border-top: 4px solid #0288D1;

        &:last-child {
            margin-bottom: 0;
        }
        

        i {
            color: #0288D1;
            font-size: 24px;
            vertical-align: sub;
            margin-right: 10px;
        }

        &.error {
            background: #E53935;   
            border-top-color: #C62828;   

            i {
                color: #C62828;
            }     
        }

        &.warning {
            background: #FF9800;
            border-top-color: #F57C00; 
            
            i {
                color: #F57C00;
            }       
        }

        &.succes {
            background: #8BC34A;
            border-top-color: #689F38;    
            
            i {
                color: #689F38;
            }    
            
        }

        &.info {
            background: #03A9F4;
            border-top-color: #0288D1;     
            
            i {
                color: #0288D1;
            }   
            
        }

        &.simple {
            background: #FAFAFA;
            border-top-color: #BDBDBD;   
            
            i {
                color: #BDBDBD;
            }     
            
            color: #212121;
        }

    }
</style>



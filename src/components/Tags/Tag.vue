<template>

    <transition name="fade">
        <div class="tag-item">

            {{title}} <i class="fa fa-times" aria-hidden="true" v-if="deletable" @click="del"></i>

        </div>
    </transition>
</template>

<script>
export default {
  props : ["title","deletable"] ,

  methods : {
      del : function(){
          this.$emit("del",this.title);
      }
  }
}
</script>

<style lang="scss">

    .tag-item {

        padding: 10px;
        border-radius: 100px;
        background: #304FFE;
        color: #FAFAFA;
        margin: 10px 10px 0 0;
        display: inline-block;

        i {
            cursor: pointer;
        }

    }


        fade-enter-active, .fade-leave-active {
            transition: all 1s
        }

        .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
          opacity: 0;
        }

</style>



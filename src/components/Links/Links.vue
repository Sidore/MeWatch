<script>

    import logo from "../../assets/images/iMac-icon.png"

  export default {
    created() {
        this.$router.options.routes.forEach(route => {
            this.items.push({
                name: route.name
                , path: route.path
            })
        })
    }
    , data() {
        return {
            items: [],
            logo
        }
    }
}  
</script>

<template >
    <div id="links">

        <div class="link">

            <img :src="logo" width="20" height="20"/>

        </div>

        <router-link v-for="item in items" :to="item.path" :key="item.path" class="link">
            <span>{{item.name}}</span>
        </router-link> 
    </div>
</template>

<style lang="scss">

    #links {

       display: flex;
       align-content:  center;
       padding: 0;
       margin: 0;
       background: #EEEEEE; 
       border-bottom: 1px solid #BDBDBD;

       .link {

            display: flex;
            text-decoration: none;
            background: #EEEEEE;
            border-right: 1px solid #BDBDBD;
            padding: 10px;
            color: #424242;

                &.router-link-exact-active {
                    background: #E0E0E0;
                    color: #212121;
                }

            }

       }


</style>




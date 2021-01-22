<template>
    <div>
        <el-button><router-link to="/main/client/newClient">增加產品</router-link></el-button>
        <br>
        <el-divider/>
        <br>
        <router-view/>
        <span>產品列表</span>
    </div>
</template>

<script>
    export default {
        name: "productData",
        data(){
            return {
                productInfo:[{},{},{}]
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <el-input v-model="input" aria-placeholder="請輸入用戶名"></el-input>
        <el-button @click="submitQuery">查詢</el-button>
        <el-button><router-link to="/main/client/newClient">增加用戶</router-link></el-button>
        <br>
        <el-divider/>
        <br>
        <router-view/>
        <span>用戶列表</span>
    </div>
</template>

<script>
    export default {
        name: "userCtrl",
        data(){
            return {
                userList:[{},{},{}]
            }
        }
    }
</script>

<style scoped>

</style>
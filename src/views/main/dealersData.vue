<template>
    <div>
        <el-input v-model="input" aria-placeholder="請輸入門店編號"></el-input>
        <el-button @click="submitQuery">查詢</el-button>
        <el-button><router-link to="/main/client/newClient">增加施工店</router-link></el-button>
        <br>
        <el-divider/>
        <br>
        <router-view/>
        <span>增加施工店</span>
    </div>
</template>

<script>
    export default {
        name: "dealersData"
    }
</script>

<style scoped>

</style>
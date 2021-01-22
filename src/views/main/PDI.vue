<template>
    <div>
        <el-input v-model="input" aria-placeholder="請輸入保固卡號"></el-input>
        <el-input v-model="input" aria-placeholder="請輸入VIN碼後4位"></el-input>
        <el-button @click="submitQuery">查詢</el-button>
        <el-button @click="submitPatch">批量導入</el-button>
        <el-button><router-link to="">手工增加</router-link></el-button>
        <br>
        <el-divider/>
        <br>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "PDI",
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <el-input v-model="input" aria-placeholder="請輸入車主姓名"></el-input>
        <el-input v-model="input" aria-placeholder="請輸入車主手機號碼"></el-input>
        <el-input v-model="input" aria-placeholder="請輸入車牌號碼"></el-input>
        <el-input v-model="input" aria-placeholder="請輸入保固卡號"></el-input>
        <el-radio v-model="radio" label="1">普通車輛</el-radio>
        <el-radio v-model="radio" label="2">PDI車輛</el-radio>
        <el-button @click="submitQuery">查詢</el-button>

        <br>
        <el-divider/>
        <br>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "clientModify",
        data(){
            return {
                radio:'1'
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="subpage">
        <el-input v-model="searchInput1.inputName" aria-placeholder="請輸入車主姓名"></el-input>
        <el-input v-model="searchInput1.inputPhone" aria-placeholder="請輸入車主手機號碼"></el-input>
        <el-input v-model="searchInput1.inputNum" aria-placeholder="請輸入車牌號碼"></el-input>
        <el-input v-model="warrantyNum" aria-placeholder="請輸入保固卡號"></el-input>
        <el-radio v-model="radioVehicle" label="normalVehicle">普通車輛</el-radio>
        <el-radio v-model="radioVehicle" label="PDIVehicle">PDI車輛</el-radio>
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
                radioVehicle:'normalVehicle',
                searchInput1:{
                    inputName:'',
                    inputPhone:'',
                    inputNum:''
                },
                warrantyNum:''
            }
        },
        methods:{
            submitQuery(){
                alert('提交查詢')
            }
        }
    }
</script>

<style scoped>
    .subpage {
        height:100%
    }
</style>
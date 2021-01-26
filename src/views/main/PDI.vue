<template>
    <div>
        <el-input v-model="inputQuery.inputWarranty" aria-placeholder="請輸入保固卡號"></el-input>
        <el-input v-model="inputQuery.inputVin4" aria-placeholder="請輸入VIN碼後4位"></el-input>
        <el-button @click="submitQuery">查詢</el-button>
        <el-button @click="submitPatch">批量導入</el-button>
        <el-button @click="newPDIVisible = true">手工增加</el-button>
        <el-dialog
                title="增加PDI車輛" :visible.sync="newPDIVisible" width="75%" center>
            <span>PDI車輛信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitPDI">確定</el-button>
                <el-button @click="newPDIVisible = false">取消</el-button>
            </span>
        </el-dialog>
        <br>
        <el-divider/>
        <br>
        <span>客戶信息</span>
        <el-table
                :data="PDIList"
                stripe
                border
                height="120"
                style="width:100%">
            <el-table-column prop="dealerCode" label="門店編號" width="200px"></el-table-column>
            <el-table-column prop="Vin4" label="VIN碼後4位" width="200px"></el-table-column>
            <el-table-column prop="warrantyNum" label="保固卡號" width="200px"></el-table-column>
            <el-table-column label="操作" width="300px"><el-button>查看施工信息</el-button><el-button>刪除</el-button></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "PDI",
        data(){
            return{
                newPDIVisible:false,
                inputQuery:{
                    inputWarranty:'',
                    inputVin4:''
                },
                PDIList:[
                    {dealerCode:'Y0001', Vin4:'1234', warrantyNum:'1234'},
                    {dealerCode:'Y0002', Vin4:'1212', warrantyNum:'1212'},
                    {dealerCode: 'Y0003', Vin4: '1313', warrantyNum: '1313'}
                ],
            }
        },
        mounted() {
            alert('取PDI數據')
        },
        methods:{
            submitQuery(){
                alert('提交PDI查詢')
            },
            submitPatch(){
                alert('批量導入PDI查詢')
            },
            submitPDI(){
                alert('提交PDI信息')
            }
        }
    }
</script>

<style scoped>

</style>
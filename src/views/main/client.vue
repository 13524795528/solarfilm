<template>
    <div>
        <el-input v-model="searchInput.inputName" aria-placeholder="請輸入車主姓名"></el-input>
        <el-input v-model="searchInput.inputPhone" aria-placeholder="請輸入車主手機號碼"></el-input>
        <el-input v-model="searchInput.inputNum" aria-placeholder="請輸入車牌號碼"></el-input>
        <el-button @click="submitQuery">查詢</el-button>
        <el-button @click="newClientVisible = true">增加車輛信息</el-button>

        <el-dialog
            title="增加車輛信息" :visible.sync="newClientVisible" width="75%" center>
            <span>車輛信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="nextStep">確定</el-button>
                <el-button @click="newClientVisible = false">取消</el-button>
            </span>
        </el-dialog>
        <br>
        <el-divider/>
        <br>
        <el-table
            :data="clientList"
            stripe
            border
            height="120"
            style="width:100%">
            <el-table-column prop="owner" label="車主姓名" width="80px"></el-table-column>
            <el-table-column prop="gender" label="車主性別" width="60px"></el-table-column>
            <el-table-column prop="phone" label="手機號" width="100px"></el-table-column>
            <el-table-column prop="email" label="郵箱" width="100px"></el-table-column>
            <el-table-column prop="city" label="所在城市" width="80px"></el-table-column>
            <el-table-column prop="address" label="地址" ></el-table-column>
            <el-table-column prop="brand" label="車輛品牌" width="80px"></el-table-column>
            <el-table-column prop="vehicleType" label="車型" width="80px"></el-table-column>
            <el-table-column prop="vehicleNum" label="車牌號碼" width="80px"></el-table-column>
            <el-table-column prop="Vin4" label="VIN碼後4位" width="100px"></el-table-column>
            <el-table-column prop="warrantyNum" label="保固卡號" width="100px"></el-table-column>
            <el-table-column label="操作" width="260px"><el-button>查看施工信息</el-button><el-button>刪除</el-button></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "client",
        data(){
            return {
                newClientVisible:false,
                searchInput:{
                    inputName:'',
                    inputPhone:'',
                    inputNum:''
                },
                clientList:
                    [{owner:'張三',gender:'男',phone:'0911111111',email:'11@11',city:'台北市',address:'1路2號',brand:'audi',vehicleType:'car',vehicleNum:'1111',Vin4:'1111',warrantyNum:'111111',dealerCode:'111111111'},
                     {owner:'李四',gender:'男',phone:'0922222222',email:'11@11',city:'台北市',address:'1路2號',brand:'audi',vehicleType:'RV',vehicleNum:'2222',Vin4:'2222',warrantyNum:'222222',dealerCode:'111111111' },
                     {owner:'王武',gender:'男',phone:'0933333333',email:'11@11',city:'台北市',address:'1路2號',brand:'audi',vehicleType:'car',vehicleNum:'3333',Vin4:'3333',warrantyNum:'333333',dealerCode:'111111111' }
                    ],
            }
        },
        mounted() {
            alert('取車輛數據')
        },
        methods:{
            submitQuery(){
                alert('tijiao查詢')
            },
            nextStep(){
                alert("tijiao新車輛");
                this.newClientVisible = false
            }
        }
    }
</script>

<style scoped>

</style>
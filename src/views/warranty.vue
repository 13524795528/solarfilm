<template>
    <div>
        <span>施工門店信息</span>
        <el-table
                :data="dealerData"
                style="width: 100%">
            <el-table-column
                    prop="dealer"
                    label="施工店名稱"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="dealerCode"
                    label="門店編號"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="所在城市"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="dealerPhone"
                    label="門店電話"
                    width="180">
            </el-table-column>
        </el-table>
        <span>車輛信息</span>
        <el-table
                :data="vehicleData"
                style="width: 100%">
            <el-table-column
                    prop="owner"
                    label="客戶姓名"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="gender"
                    label="性別"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="手機號"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="email"
                    label="郵箱"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="所在城市"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="brand"
                    label="車輛品牌"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="vehicletype"
                    label="車輛型號"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="vehicleNum"
                    label="車牌號碼"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="Vin4"
                    label="VIN碼後4位"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="warrantyNum"
                    label="保固卡號"
                    width="120">
            </el-table-column>
        </el-table>
        <span>施工信息</span>
        <el-table :data="warrantyData">
            <el-table-column
                    prop="position"
                    label="施工部位"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="productCode"
                    label="產品編號"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="batchCode"
                    label="生產批次號"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="boxCode"
                    label="產品包裝盒號"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="warrantyTime"
                    label="保固期"
                    width="180">
            </el-table-column>
        </el-table>

        <br/>
        <el-table
                :data="warrantyDate">
            <el-table-column
                    prop="warrantyDate"
                    label="施工日期"
                    width="180">
            </el-table-column>
        </el-table>
        <br><br>
        <el-button @click="turnback()">關閉頁面</el-button>
    </div>
</template>

<script>
    export default {
        name: "warranty",
        data() {
            return {
                dealerData: [{
                    dealer:'门店1',
                    dealerCode: 'M022-003-02',
                    city: '台北市',
                    address: '台北市普陀区金沙江路 1518 弄',
                    dealerPhone: '091234567'
                }],
                vehicleData:[{
                    owner:'张三',
                    gender:'male',
                    phone:'0912341234',
                    email:'aaa@123',
                    city:'Taipei',
                    address:'xxx',
                    brand:'audi',
                    vehicletype:'轎車',
                    vehicleNum:'123aaa',
                    Vin4:'1234',
                    warrantyNum:'12341234'
                }],
                warrantyData:[{
                    position:"前擋",
                    productCode:'010203',
                    batchCode:'1234',
                    boxCode:'1212',
                    warrantyTime:'4年'
                },{
                    position:"前側擋",
                    productCode:'011213',
                    batchCode:'1234',
                    boxCode:'1224',
                    warrantyTime:'3年'
                },{
                    position:"後側擋",
                    productCode:'010203',
                    batchCode:'1234',
                    boxCode:'1212',
                    warrantyTime:'1年'
                },{
                    position:"後擋",
                    productCode:'010203',
                    batchCode:'1234',
                    boxCode:'1212',
                    warrantyTime:'2年'
                },{
                    position:"天窗",
                    productCode:'010203',
                    batchCode:'1234',
                    boxCode:'1212',
                    warrantyTime:'5年'
                }],
                warrantyDate:[{
                    warrantyDate:'2021-01-14'
                }]
            }
        },
        methods:{
            turnback(){
                this.$router.push('/customLogin')
            },
            // getData(){
            //     this.axios({
            //         method:'get',
            //         url:'https://...'
            //     }).then().catch()
            // }
        }
    }
</script>

<style scoped>

</style>
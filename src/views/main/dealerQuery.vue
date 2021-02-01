<template>
    <div class="subpage">
        <el-input v-model="inputDealer" aria-placeholder="請輸入施工門店編號"></el-input>
        <el-date-picker
                v-model="valueDate"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
        </el-date-picker>
        <el-radio v-model="radioVehicle" label="normal">普通車輛</el-radio>
        <el-radio v-model="radioVehicle" label="PDI">PDI車輛</el-radio>
        <el-button @click="submitQuery(radioVehicle)">查詢</el-button>
        <br>
        <el-divider/>
        <br>
        <el-table
                :data="clientList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                stripe
                border
                height="70%"
                style="width:100%">
            <el-table-column prop="dealerName" label="施工店名稱" width="120px"></el-table-column>
            <el-table-column prop="dealerCode" label="門店編號" width="120px"></el-table-column>
            <el-table-column prop="owner" label="車主姓名" width="120px"></el-table-column>
            <el-table-column prop="phone" label="手機號" width="120px"></el-table-column>
            <el-table-column prop="vehicleNum" label="車牌號" width="120px"></el-table-column>
            <el-table-column prop="Vin4" label="VIN碼後4位" width="120px"></el-table-column>
            <el-table-column prop="warrantyNum" label="保固卡號" width="120px"></el-table-column>
            <el-table-column label="操作" width="120px">
                <template slot-scope="scope">
                    <el-button size="mini" @click="showWarranty(scope.$index, scope.row)">查看詳情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[1,2,10, 20, 30, 40]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="clientList.length">
            </el-pagination>
        </div>
        <el-dialog
                title="施工信息" :visible.sync="warrantyVisible" width="70%" center>
            <span>施工門店編號：</span> {{dealerCode}}
            <br>
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
                        label="車型"
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
            <el-button @click="warrantyVisible = false">關閉頁面</el-button>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "dealerQuery",
        data() {
            return {
                dealerCode:'',
                warrantyVisible:false,
                inputDealer:'',
                radioVehicle:'normal',
                currentPage:1,
                pageSize:10,
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }],
                    queryList:[]
                },
                valueDate: '',
                clientList: [{
                    dealerName:'',
                    dealerCode:'',
                    owner: '',
                    phone:'',
                    vehicleNum: '',
                    Vin4:'',
                    warrantyNum:''
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
            handleSizeChange(val){
                console.log(`每頁${val}條`);
                this.pageSize = val;
            },
            handleCurrentChange(val){
                console.log(`當前頁：${val}`);
                this.currentPage = val;
            },
            submitQuery(radioVehicle){
                alert('查詢數據統計,類別：'+ radioVehicle)
            },
            showWarranty(index, row){
                alert('顯示該客户施工信息，車牌號：'+ row.vehicleNum);
                this.warrantyVisible = true
            }
        }
    }
</script>

<style scoped>
    .subpage {
        height:100%
    }
</style>
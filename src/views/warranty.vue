<template>
    <div id="app">
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="login_Form">
            <h2>太陽膜質保查詢</h2>
            <el-form-item label="手機號碼" prop="userphone">
                <el-input v-model="ruleForm.userphone"></el-input>
            </el-form-item>
            <el-form-item label="車牌號碼" prop="vehicleNum">
                <el-input v-model="ruleForm.vehicleNum"></el-input>
            </el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="submitForm('ruleForm')" >確認查詢</el-button>
        </el-form>
    </div>
        <el-dialog
                title="太陽膜質保信息" :visible.sync="warrantyInfoVisible" width="90%" top="20px" center>
    <div id="warranty">
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
        <el-button >保存PDF</el-button>
        <el-button icon="el-icon-switch-button" @click="turnback()">關閉頁面</el-button>
    </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "warranty",
        data() {
            return {
                warrantyInfoVisible:false,
                ruleForm:{
                    userphone:"",
                    vehicleNum:""
                },
                rules:{
                    userphone:[
                        {required:true, message:'請輸入您的手機號碼', trigger:'blur' },
                        {min:10, max:10, message:'長度10位數字', trigger:'blur'}
                    ],
                    vehicleNum: [
                        {required:true, message:'請輸入您的車牌號碼', trigger:'blur' },
                    ]
                },
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
                this.warrantyInfoVisible = false;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('请求校验，请求数据')
                        this.warrantyInfoVisible = true;
                        this.$refs[formName].resetFields();
                    } else {
                        this.$message({
                            message: '未查詢到相關信息，請確保輸入的手機號碼或車牌號碼正確無誤！',
                            type: 'warning'
                        });
                        return false
                    }
                })
            }
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
    #warranty{
        width: 90%;
        margin: 20px auto;
        border: 1px solid #dcdfe6;
        padding: 10px 20px 30px 15px;
        border-radius: 3px;
        box-shadow: 0 0 10px #DCDFE6;
    }
    .login_Form {
        width: 320px;
        margin: 180px auto;
        border: 1px solid #DCDFE6;
        padding: 10px 20px 30px 15px;
        border-radius: 3px;
        box-shadow: 0 0 10px #DCDFE6;
    }
</style>
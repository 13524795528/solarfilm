<template>
    <div class="subpage">
        <el-input v-model="inputQuery.inputWarranty" aria-placeholder="請輸入保固卡號"></el-input>
        <el-input v-model="inputQuery.inputVin4" aria-placeholder="請輸入VIN碼後4位"></el-input>
        <el-button icon="el-icon-search" @click="submitQuery">查詢</el-button>
        <el-button icon="el-icon-folder-add" @click="submitPatch">批量導入</el-button>
        <el-button icon="el-icon-circle-plus-outline" @click="addNewPDI">手工增加</el-button>
        <el-dialog
                title="增加PDI信息" :visible.sync="newPDIVisible" width="70%" center>
            <span>施工門店編號：</span> {{dealerCode}}
            <br><br>
            <span>車輛信息</span>
            <el-form ref="newPDI" :rules="rules" :model="newPDI" label-width="20%" class="check-ruleForm">
                <el-form-item label="車主姓名" prop="owner">
                    <el-input v-model="newPDI.owner"></el-input>
                </el-form-item>
                <el-form-item label="車主性別" prop="gender">
                    <el-select v-model="newPDI.gender" placeholder="請選擇車主性別">
                        <el-option label="男" value="male"></el-option>
                        <el-option label="女" value="female"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="手機號" prop="phone">
                    <el-input v-model="newPDI.phone"></el-input>
                </el-form-item>
                <el-form-item label="郵箱" prop="email">
                    <el-input v-model="newPDI.email"></el-input>
                </el-form-item>
                <el-form-item label="所在城市" prop="city">
                    <el-select v-model="newPDI.city" placeholder="請選擇所在城市">
                        <el-option v-for='item in cityList' :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="newPDI.address"></el-input>
                </el-form-item>
                <el-form-item label="車輛品牌" prop="brand">
                    <el-select v-model="newPDI.brand" placeholder="請選擇車輛品牌">
                        <el-option v-for='item in vehicleBrandList' :key="item.value" :label="item.lable" :value="item.label"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="車型" prop="vehicleType">
                    <el-select v-model="newPDI.vehicleType" placeholder="請選擇車型">
                        <el-option label="轎車" value="car"></el-option>
                        <el-option label="休旅車" value="RV"></el-option>
                        <el-option label="皮卡車" value="Pickup"></el-option>
                        <el-option label="貨車" value="lorry"></el-option>
                        <el-option label="其他" value="other"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="車牌號碼" prop="vehicleNum">
                    <el-input v-model="newPDI.vehicleNum"></el-input>
                </el-form-item>
                <el-form-item label="VIN碼後4位" prop="Vin4">
                    <el-input v-model="newPDI.Vin4"></el-input>
                </el-form-item>
                <el-form-item label="保固卡號" prop="warrantyNum">
                    <el-input v-model="newPDI.warrantyNum"></el-input>
                </el-form-item>
                <span>施工信息</span>
                <el-form-item label="前擋產品編碼" prop="frontFaceProductCode">
                    <el-select v-model="newPDI.frontFaceProductCode" placeholder="請選擇產品編碼">
                        <el-option v-for="item in productList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="前擋卷號" prop="frontFaceBatchCode">
                    <el-input v-model="newPDI.frontFaceBatchCode"></el-input>
                </el-form-item>
                <el-form-item label="前擋包裝盒號" prop="frontFaceBoxCode">
                    <el-input v-model="newPDI.frontFaceBoxCode"></el-input>
                </el-form-item>
                <el-form-item label="前側產品編碼" prop="frontSideProductCode">
                    <el-select v-model="newPDI.frontSideProductCode" placeholder="請選擇產品編碼">
                        <el-option v-for="item in productList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="前側卷號" prop="frontSideBatchCode">
                    <el-input v-model="newPDI.frontSideBatchCode"></el-input>
                </el-form-item>
                <el-form-item label="前側包裝盒號" prop="frontSideBoxCode">
                    <el-input v-model="newPDI.frontSideBoxCode"></el-input>
                </el-form-item>
                <el-form-item label="後側產品編碼" prop="backSideProductCode">
                    <el-select v-model="newPDI.backSideProductCode" placeholder="請選擇產品編碼">
                        <el-option v-for="item in productList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="後側卷號" prop="backSideBatchCode">
                    <el-input v-model="newPDI.backSideBatchCode"></el-input>
                </el-form-item>
                <el-form-item label="後側包裝盒號" prop="backSideBoxCode">
                    <el-input v-model="newPDI.backSideBoxCode"></el-input>
                </el-form-item>
                <el-form-item label="後擋產品編碼" prop="backFaceProductCode">
                    <el-select v-model="newPDI.backFaceProductCode" placeholder="請選擇產品編碼">
                        <el-option v-for="item in productList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="後擋卷號" prop="backFaceBatchCode">
                    <el-input v-model="newPDI.backFaceBatchCode"></el-input>
                </el-form-item>
                <el-form-item label="後擋包裝盒號" prop="backFaceBoxCode">
                    <el-input v-model="newPDI.backFaceBoxCode"></el-input>
                </el-form-item>
                <el-form-item label="天窗產品編碼" prop="skylightProductCode">
                    <el-select v-model="newPDI.skylightProductCode" placeholder="請選擇產品編碼">
                        <el-option v-for="item in productList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="天窗卷號" prop="skylightBatchCode">
                    <el-input v-model="newPDI.skylightBatchCode"></el-input>
                </el-form-item>
                <el-form-item label="天窗包裝盒號" prop="skylightBoxCode">
                    <el-input v-model="newPDI.skylightBoxCode"></el-input>
                </el-form-item>
                <el-form-item label="施工日期" prop="warrantyDate">
                    <el-date-picker
                            v-model="newPDI.warrantyDate"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" icon="el-icon-check" @click="submitForm('newPDI')">確定</el-button>
                <el-button icon="el-icon-close" @click="newPDIVisible = false">取消</el-button>
            </div>
        </el-dialog>
        <br>
        <el-divider/>
        <br>
        <span>客戶信息</span>
        <el-table
                :data="PDIList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                stripe
                border
                height="70%"
                style="width:100%">
            <el-table-column prop="dealerCode" label="門店編號" width="200px"></el-table-column>
            <el-table-column prop="Vin4" label="VIN碼後4位" width="200px"></el-table-column>
            <el-table-column prop="warrantyNum" label="保固卡號" width="200px"></el-table-column>
            <el-table-column label="操作" width="300px">
                <template slot-scope="scope">
                    <el-button size="mini" icon="el-icon-search" @click="showWarranty(scope.$index, scope.row)">查看施工信息</el-button>
                    <el-button size="mini" icon="el-icon-delete" @click="deleteClient(scope.$index, scope.row)">刪除</el-button>
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
                    :total="PDIList.length">
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
            <el-button icon="el-icon-switch-button" @click="warrantyVisible = false">關閉頁面</el-button>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "PDI",
        data(){
            return{
                dealerCode:'Y0001',
                newPDIVisible:false,
                warrantyVisible:false,
                currentPage:1,
                pageSize:10,
                inputQuery:{
                    inputWarranty:'',
                    inputVin4:''
                },
                PDIList:[
                    {dealerCode:'Y0001', Vin4:'1234', warrantyNum:'1234'},
                    {dealerCode:'Y0002', Vin4:'1212', warrantyNum:'1212'},
                    {dealerCode: 'Y0003', Vin4: '1313', warrantyNum: '1313'}
                ],
                newPDI: {
                    owner: '',
                    gender: '',
                    phone:'',
                    email:'',
                    city:'',
                    address:'',
                    brand: '',
                    vehicleType: '',
                    vehicleNum: '',
                    Vin4:'',
                    warrantyNum:'',
                    frontFaceProductCode:'',
                    frontFaceBatchCode:'',
                    frontFaceBoxCode:'',
                    frontSideProductCode:'',
                    frontSideBatchCode:'',
                    frontSideBoxCode:'',
                    backSideProductCode:'',
                    backSideBatchCode:'',
                    backSideBoxCode:'',
                    backFaceProductCode:'',
                    backFaceBatchCode:'',
                    backFaceBoxCode:'',
                    skylightProductCode:'',
                    skylightBatchCode:'',
                    skylightBoxCode:'',
                    warrantyDate:''
                },
                rules: {
                    owner: [
                        { required: false, message: '請輸入車主姓名', trigger: 'blur' },
                    ],
                    gender: [
                        { required: false, message: '請選擇車主性別', trigger: 'blur' },
                    ],
                    phone: [
                        { required: false, message: '請輸入車主手機號碼', trigger: 'blur' },
                        {min:10, max:10, message:'長度10位數字', trigger:'blur'}
                    ],
                    email: [
                        { required: false, message: '請輸入電子郵箱', trigger: 'blur' },
                    ],
                    city: [
                        { required: false, message: '請選擇所在城市', trigger: 'blur' },
                    ],
                    address: [
                        { required: false, message: '請輸入車主地址', trigger: 'blur' },
                    ],
                    brand: [
                        { required: false, message: '請選擇車輛品牌', trigger: 'blur' }
                    ],
                    vehicleType: [
                        { required: false, message: '請選擇車型', trigger: 'blur'}
                    ],
                    vehicleNum: [
                        { required: false, message: '請輸入車牌號碼', trigger: 'blur' }
                    ],
                    Vin4: [
                        { required: true, message: '請輸入VIN碼後4位', trigger: 'blur' }
                    ],
                    warrantyNum: [
                        { required: true, message: '請輸入保固卡號', trigger: 'blur' }
                    ],
                    frontFaceProductCode: [
                        { required: true, message: '請輸入產品編碼', trigger: 'blur' }
                    ],
                    frontFaceBatchCode: [
                        { required: true, message: '請輸入產品卷號', trigger: 'blur' }
                    ],
                    frontFaceBoxCode: [
                        { required: false, message: '請輸入產品包裝盒號', trigger: 'blur' }
                    ],
                    frontSideProductCode: [
                        { required: true, message: '請輸入產品編碼', trigger: 'blur' }
                    ],
                    frontSideBatchCode: [
                        { required: true, message: '請輸入產品卷號', trigger: 'blur' }
                    ],
                    frontSideBoxCode: [
                        { required: false, message: '請輸入產品包裝盒號', trigger: 'blur' }
                    ],
                    backSideProductCode: [
                        { required: true, message: '請輸入產品編碼', trigger: 'blur' }
                    ],
                    backSideBatchCode: [
                        { required: true, message: '請輸入產品卷號', trigger: 'blur' }
                    ],
                    backSideBoxCode: [
                        { required: false, message: '請輸入產品包裝盒號', trigger: 'blur' }
                    ],
                    backFaceProductCode: [
                        { required: true, message: '請輸入產品編碼', trigger: 'blur' }
                    ],
                    backFaceBatchCode: [
                        { required: true, message: '請輸入產品卷號', trigger: 'blur' }
                    ],
                    backFaceBoxCode: [
                        { required: false, message: '請輸入產品包裝盒號', trigger: 'blur' }
                    ],
                    skylightProductCode: [
                        { required: true, message: '請輸入產品編碼', trigger: 'blur' }
                    ],
                    skylightBatchCode: [
                        { required: true, message: '請輸入產品卷號', trigger: 'blur' }
                    ],
                    skylightBoxCode: [
                        { required: false, message: '請輸入產品包裝盒號', trigger: 'blur' }
                    ],
                    warrantyDate: [
                        { required: true, message: '請選擇施工日期', trigger: 'blur' }
                    ]
                },
                cityList:["台北市", "新北市","桃園市", "台中市","台南市", "高雄市", "基隆市","新竹市","嘉義市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","屏東縣","宜蘭縣","花蓮縣","臺東縣", "澎湖縣","金門縣","連江縣"],
                vehicleBrandList:[
                    {label:'Alfa_Romeo 愛快_羅密歐',value:'AlfaRomeo'}, {label:'Aston_Martin 奧斯頓_馬丁',value:'AstonMartin'}, {label:'Audi 奧迪',value:'Audi'}, {label:'Acura 歐歌',value:'Acura'}, {label:'Austin 奧斯丁',value:'Austin'},
                    {label:'Bentley 賓利',value:'Bentley'}, {label:'BMW 寶馬',value:'BMW'}, {label:'Buick 別克',value:'Buick'}, {label:'Bugatti 布卡堤',value:'Bugatti'},
                    {label:'Cadillac 凱迪拉克',value:'Cadillac'}, {label:'Citroen 雪鐵龍',value:'Citroen'}, {label:'Chrysler 克萊斯勒',value:'Chrysler'}, {label:'CMC 中華汽車',value:'CMC'}, {label:'Chevrolet 雪佛蘭',value:'Chevrolet'},
                    {label:'Daihatsu 大發',value:'Daihatsu'}, {label:'Dodge 道奇',value:'Dodge'}, {label:'DFSK 東風小康',value:'DFSK'},
                    {label:'Ferrari 法拉利',value:'Ferrari'}, {label:'Fiat 飛雅特',value:'Fiat'}, {label:'Ford 福特',value:'Ford'}, {label:'Formosa 福爾摩沙',value:'Formosa'}, {label:'Foton 福田',value:'Foton'},
                    {label:'GMC 通用',value:'GMC'},
                    {label:'Honda 本田',value:'Honda'}, {label:'Hyundai 現代',value:'Hyundai'}, {label:'Hummer 悍馬',value:'Hummer'},
                    {label:'Ino 日野',value:'Ino'}, {label:'Infiniti 極致',value:'Infiniti'}, {label:'Isuzu 五十鈴',value:'Isuzu'}, {label:'IVECO 威凱',value:'IVECO'},
                    {label:'Jaguar 捷豹',value:'Jaguar'}, {label:'Jeep 吉普',value:'Jeep'},
                    {label:'Kia 起亞',value:'Kia'},
                    {label:'Lamborghini 藍寶堅尼',value:'Lamborghini'}, {label:'Land_Rover 荒原路華',value:'LandRover'}, {label:'Lexus 凌志',value:'Lexus'}, {label:'Lotus 蓮花',value:'Lotus'},{label:'Luxgen 納智捷',value:'Luxgen'}, {label:'Lincoln 林肯',value:'Lincoln'},
                    {label:'Mercedes_Benz 賓士',value:'MercedesBenz'}, {label:'Maserati 瑪莎拉蒂',value:'Maserati'}, {label:'Mazda 馬自達',value:'Mazda'}, {label:'Mini 迷你',value:'Mini'}, {label:'Mitsubishi 三菱',value:'Mitsubishi'}, {label:'McLaren 麥拿侖',value:'McLaren'}, {label:'Morgan 摩根',value:'Morgan'},
                    {label:'Nissan 日產',value:'Nissan'},
                    {label:'Opel 歐寶',value:'Opel'},
                    {label:'Pagani 帕加尼',value:'Pagani'}, {label:'Peugeo 寶獅',value:'Peugeo'}, {label:'Porsche 保時捷',value:'Porsche'},
                    {label:'Rolls_Royce 勞斯萊斯',value:'RollsRoyce'}, {label:'Renault 雷諾',value:'Renault'},
                    {label:'Saab 紳寶',value:'Saab'}, {label:'Skoda 斯柯達',value:'Skoda'}, {label:'Smart 斯馬特',value:'Smart'}, {label:'Ssangyong 雙龍',value:'Ssangyong'}, {label:'Subaru 速霸陸',value:'Subaru'}, {label:'Suzuki 鈴木',value:'Suzuki'},
                    {label:'Toyota 豐田',value:'Toyota'}, {label:'Tesla 特斯拉',value:'Tesla'},
                    {label:'Volkswagen 福斯',value:'Volkswagen'}, {label:'Volvo 富豪',value:'Volvo'}
                ],
                productList:['MK70','MK35','N25','R20'],
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
        mounted() {
            alert('取PDI數據')
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
            submitQuery(){
                alert('提交PDI查詢')
            },
            submitPatch(){
                alert('批量導入PDI查詢');
                this.newPDIVisible = false;
                alert('重新請求PDI數據')
            },
            addNewPDI(){
                alert('請求產品數據');
                this.newPDIVisible = true
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert("提交新PDI信息");
                        this.newClientVisible = false;
                        alert("重新請求PDI信息");
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            deleteClient() {
                this.$confirm('此操作将永久删除该用戶, 是否继续?', '重要提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    alert('发请求删除PDI客户！');
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            showWarranty(index, row){
                alert('顯示該PDI客户施工信息，VIN：'+ row.Vin4);
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
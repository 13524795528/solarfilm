<template>
    <div class="subpage">
        <el-input v-model="searchInput1.inputName" aria-placeholder="請輸入車主姓名"></el-input>
        <el-input v-model="searchInput1.inputPhone" aria-placeholder="請輸入車主手機號碼"></el-input>
        <el-input v-model="searchInput1.inputNum" aria-placeholder="請輸入車牌號碼"></el-input>
        <el-input v-model="warrantyNum" aria-placeholder="請輸入保固卡號"></el-input>
        <el-radio v-model="radioVehicle" label="normal">普通車輛</el-radio>
        <el-radio v-model="radioVehicle" label="PDI">PDI車輛</el-radio>
        <el-button @click="submitQuery(radioVehicle)">查詢</el-button>

        <br>
        <el-divider/>
        <br>
        <el-dialog
                title="修改客戶信息" :visible.sync="modifyVisible" width="70%" center>
            <span>施工門店編號：</span> {{dealerCode}}
            <br>
            <span>車輛信息</span>
            <el-form ref="modifyClient" :rules="rules" :model="modifyClient" label-width="20%" class="check-ruleForm">
                <el-form-item label="車主姓名" prop="owner">
                    <el-input v-model="modifyClient.owner"></el-input>
                </el-form-item>
                <el-form-item label="車主性別" prop="gender">
                    <el-select v-model="modifyClient.gender" placeholder="請選擇車主性別">
                        <el-option label="男" value="male"></el-option>
                        <el-option label="女" value="female"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="手機號" prop="phone">
                    <el-input v-model="modifyClient.phone"></el-input>
                </el-form-item>
                <el-form-item label="郵箱" prop="email">
                    <el-input v-model="modifyClient.email"></el-input>
                </el-form-item>
                <el-form-item label="所在城市" prop="city">
                    <el-select v-model="modifyClient.city" placeholder="請選擇所在城市">
                        <el-option v-for='item in cityList' :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="modifyClient.address"></el-input>
                </el-form-item>
                <el-form-item label="車輛品牌" prop="brand">
                    <el-select v-model="modifyClient.brand" placeholder="請選擇車輛品牌">
                        <el-option v-for='item in vehicleBrandList' :key="item.value" :label="item.lable" :value="item.label"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="車型" prop="vehicleType">
                    <el-select v-model="modifyClient.vehicleType" placeholder="請選擇車型">
                        <el-option label="轎車" value="car"></el-option>
                        <el-option label="休旅車" value="RV"></el-option>
                        <el-option label="皮卡車" value="Pickup"></el-option>
                        <el-option label="貨車" value="lorry"></el-option>
                        <el-option label="其他" value="other"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="車牌號碼" prop="vehicleNum">
                    <el-input v-model="modifyClient.vehicleNum"></el-input>
                </el-form-item>
                <el-form-item label="VIN碼後4位" prop="Vin4">
                    <el-input v-model="modifyClient.Vin4"></el-input>
                </el-form-item>
                <el-form-item label="保固卡號" prop="warrantyNum">
                    <el-input v-model="modifyClient.warrantyNum"></el-input>
                </el-form-item>
                <span>施工信息</span>
                <el-form-item label="前擋產品編碼" prop="frontFaceProductCode">
                    <el-select v-model="modifyClient.frontFaceProductCode" placeholder="請選擇產品編碼">
                        <el-option v-for="item in productList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="前擋卷號" prop="frontFaceBatchCode">
                    <el-input v-model="modifyClient.frontFaceBatchCode"></el-input>
                </el-form-item>
                <el-form-item label="前擋包裝盒號" prop="frontFaceBoxCode">
                    <el-input v-model="modifyClient.frontFaceBoxCode"></el-input>
                </el-form-item>
                <el-form-item label="前側產品編碼" prop="frontSideProductCode">
                    <el-select v-model="modifyClient.frontSideProductCode" placeholder="請選擇產品編碼">
                        <el-option v-for="item in productList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="前側卷號" prop="frontSideBatchCode">
                    <el-input v-model="modifyClient.frontSideBatchCode"></el-input>
                </el-form-item>
                <el-form-item label="前側包裝盒號" prop="frontSideBoxCode">
                    <el-input v-model="modifyClient.frontSideBoxCode"></el-input>
                </el-form-item>
                <el-form-item label="後側產品編碼" prop="backSideProductCode">
                    <el-select v-model="modifyClient.backSideProductCode" placeholder="請選擇產品編碼">
                        <el-option v-for="item in productList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="後側卷號" prop="backSideBatchCode">
                    <el-input v-model="modifyClient.backSideBatchCode"></el-input>
                </el-form-item>
                <el-form-item label="後側包裝盒號" prop="backSideBoxCode">
                    <el-input v-model="modifyClient.backSideBoxCode"></el-input>
                </el-form-item>
                <el-form-item label="後擋產品編碼" prop="backFaceProductCode">
                    <el-select v-model="modifyClient.backFaceProductCode" placeholder="請選擇產品編碼">
                        <el-option v-for="item in productList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="後擋卷號" prop="backFaceBatchCode">
                    <el-input v-model="modifyClient.backFaceBatchCode"></el-input>
                </el-form-item>
                <el-form-item label="後擋包裝盒號" prop="backFaceBoxCode">
                    <el-input v-model="modifyClient.backFaceBoxCode"></el-input>
                </el-form-item>
                <el-form-item label="天窗產品編碼" prop="skylightProductCode">
                    <el-select v-model="modifyClient.skylightProductCode" placeholder="請選擇產品編碼">
                        <el-option v-for="item in productList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="天窗卷號" prop="skylightBatchCode">
                    <el-input v-model="modifyClient.skylightBatchCode"></el-input>
                </el-form-item>
                <el-form-item label="天窗包裝盒號" prop="skylightBoxCode">
                    <el-input v-model="modifyClient.skylightBoxCode"></el-input>
                </el-form-item>
                <el-form-item label="施工日期" prop="warrantyDate">
                    <el-date-picker
                            v-model="modifyClient.warrantyDate"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions">
                    </el-date-picker>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitForm('modifyClient')">確定</el-button>
                <el-button @click="modifyVisible = false">取消</el-button>
            </div>
        </el-dialog>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "clientModify",
        data(){
            return {
                modifyVisible:false,
                dealerCode:'',
                radioVehicle:'normal',
                searchInput1:{
                    inputName:'',
                    inputPhone:'',
                    inputNum:''
                },
                warrantyNum:'',
                modifyClient: {
                    owner: '123',
                    gender: '',
                    phone:'1231231231',
                    email:'123',
                    city:'',
                    address:'',
                    brand: '',
                    vehicleType: '123',
                    vehicleNum: '123',
                    Vin4:'1233',
                    warrantyNum:'132',
                    frontFaceProductCode:'123',
                    frontFaceBatchCode:'132',
                    frontFaceBoxCode:'132',
                    frontSideProductCode:'132',
                    frontSideBatchCode:'132',
                    frontSideBoxCode:'132',
                    backSideProductCode:'132',
                    backSideBatchCode:'132',
                    backSideBoxCode:'132',
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
                        { required: false, message: '請輸入VIN碼後4位', trigger: 'blur' }
                    ],
                    warrantyNum: [
                        { required: false, message: '請輸入保固卡號', trigger: 'blur' }
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
                pickerOptions:{
                    disabledDate(time)
                    {
                        return time.getTime() > Date.now()
                    }
                }
            }
        },
        methods:{
            submitQuery(radioVehicle){
                alert('提交查詢,類別:'+radioVehicle)
                this.modifyVisible = true
            },
            submitForm(modifyClient){
                alert('提交數據,需後台根據類型較驗必選字段');
                this.modifyVisible = false
            }
        }
    }
</script>

<style scoped>
    .subpage {
        height:100%
    }
</style>
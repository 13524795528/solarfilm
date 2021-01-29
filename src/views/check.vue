<template>
    <div>
        <p>請補充您的車輛信息使質保信息生效，以便更好地為您服務！</p>
        <el-table
                :data="PDIData"
                style="width: 100%">
            <el-table-column
                    prop="Vin4"
                    label="VIN碼後4位"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="warrantyNum"
                    label="保固卡號"
                    width="180">
            </el-table-column>
        </el-table>
        <br/>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="check-ruleForm">
            <el-form-item label="車主姓名" prop="owner">
                <el-input v-model="ruleForm.owner"></el-input>
            </el-form-item>
            <el-form-item label="性別" prop="gender">
                <el-select v-model="ruleForm.gender" placeholder="請選擇車主性別">
                    <el-option label="男" value="male"></el-option>
                    <el-option label="女" value="female"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="手機號碼" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="郵箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="所在城市" prop="city">
                <el-select v-model="ruleForm.city" placeholder="請選擇所在城市">
                    <el-option v-for='item in cityList' :key="item" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="地址" prop="address">
                <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
            <el-form-item label="車輛品牌" prop="brand">
                <el-select v-model="ruleForm.brand" placeholder="請選擇車輛品牌">
                    <el-option v-for='item in vehicleBrandList' :key="item.value" :label="item.lable" :value="item.label"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="車型" prop="vehicleType">
                <el-select v-model="ruleForm.vehicleType" placeholder="請選擇車型">
                    <el-option label="轎車" value="car"></el-option>
                    <el-option label="休旅車" value="RV"></el-option>
                    <el-option label="皮卡車" value="Pickup"></el-option>
                    <el-option label="貨車" value="lorry"></el-option>
                    <el-option label="其他" value="other"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="車牌號碼" prop="vehicleNum">
                <el-input v-model="ruleForm.vehicleNum"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">認證</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "check",
        data() {
            return {
                PDIData:[{
                    Vin4:'1234',
                    warrantyNum:'123123123'
                }],
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
                ruleForm: {
                    owner: '',
                    gender: '',
                    phone:'',
                    email:'',
                    city:'',
                    address:'',
                    brand: '',
                    vehicleType: '',
                    vehicleNum: ''
                },
                rules: {
                    owner: [
                        { required: true, message: '請輸入車主姓名', trigger: 'blur' },
                    ],
                    gender: [
                        { required: false, message: '請選擇車主性別', trigger: 'blur' },
                    ],
                    phone: [
                        { required: true, message: '請輸入車主手機號碼', trigger: 'blur' },
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
                        { required: true, message: '請輸入車牌號碼', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert("提交");
                        this.open();
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            open() {
                this.$confirm('認證信息提交後無法更改, 是否繼續提交?', '重要提示', {
                    confirmButtonText: '確定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '提交成功!'
                    });
                    alert('發起提交請求');
                    this.$router.push('/customlogin')
                }).catch(() => {});
            }
        }
    }
</script>

<style scoped>
    .check_Form {
        width: 320px;
        margin: 180px auto;
        border: 1px solid #dcdfe6;
        padding: 10px 20px 30px 15px;
        border-radius: 3px;
        box-shadow: 0 0 10px #DCDFE6;
    }
</style>
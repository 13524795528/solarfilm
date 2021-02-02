<template>
    <div class="subpage">
        <el-input v-model="inputDealerCode" aria-placeholder="請輸入門店編號"></el-input>
        <el-button icon="el-icon-search" @click="submitQuery">查詢</el-button>
        <el-button icon="el-icon-circle-plus-outline" @click="showAddDealer">增加施工店</el-button>
        <el-dialog
                title="增加施工店" :visible.sync="newDealerVisible" width="75%" center>
            <span>施工店信息</span>
            <el-form ref="newDealer" :rules="rules" :model="newDealer" label-width="20%" class="check-ruleForm">
                <el-form-item label="施工店名稱" prop="dealerName">
                    <el-input v-model="newDealer.dealerName"></el-input>
                </el-form-item>
                <el-form-item label="門店編碼" prop="dealerCode">
                    <el-input v-model="newDealer.dealerCode"></el-input>
                </el-form-item>
                <el-form-item label="業務範圍" prop="dealerRange">
                    <el-select v-model="newDealer.dealerRange" multiple placeholder="请选择">
                        <el-option
                            v-for="item in cityList"
                            :key="item"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所在城市" prop="city">
                    <el-select v-model="newDealer.city" placeholder="請選擇所在城市">
                        <el-option v-for='item in cityList' :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="newDealer.address"></el-input>
                </el-form-item>
                <el-form-item label="門店類型" prop="dealerType">
                    <el-select v-model="newDealer.dealerType" placeholder="請選擇門店類型">
                        <el-option label="銷售級施工店" value="advancedDealer"></el-option>
                        <el-option label="施工店" value="dealer"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="門店電話" prop="dealerPhone">
                    <el-input v-model="newDealer.dealerPhone"></el-input>
                </el-form-item>
                <el-form-item label="加盟日期" prop="joinDate">
                    <el-date-picker
                            v-model="newDealer.joinDate"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="合同截止日期" prop="endDate">
                    <el-date-picker
                            v-model="newDealer.endDate"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" icon="el-icon-check" @click="submitForm('newDealer')">確定</el-button>
                <el-button icon="el-icon-close" @click="newDealerVisible = false">取消</el-button>
            </span>
        </el-dialog>
        <br>
        <el-divider/>
        <br>
        <span>增加施工店</span>
        <el-table
                :data="dealersList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                stripe
                border
                height="70%"
                style="width:100%">
            <el-table-column prop="dealerName" label="施工店名稱" width="100px"></el-table-column>
            <el-table-column prop="dealerCode" label="門店編碼" width="100px"></el-table-column>
            <el-table-column prop="dealerRange" label="業務範圍" width="100px"></el-table-column>
            <el-table-column prop="city" label="所在城市" width="100px"></el-table-column>
            <el-table-column prop="address" label="地址" width="100px"></el-table-column>
            <el-table-column prop="dealerType" label="門店類型" width="100px"></el-table-column>
            <el-table-column prop="dealerPhone" label="門店電話" width="100px"></el-table-column>
            <el-table-column prop="joinDate" label="加盟日期" width="100px"></el-table-column>
            <el-table-column prop="endDate" label="合同截止日期" width="100px"></el-table-column>
            <el-table-column label="操作" width="260px">
                <template slot-scope="scope">
                    <el-button size="mini" icon="el-icon-edit" @click="modifyDealer(scope.$index, scope.row)">修改</el-button>
                    <el-button size="mini" icon="el-icon-delete" @click="deleteDealer(scope.$index, scope.row)">刪除</el-button>
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
                    :total="dealersList.length">
            </el-pagination>
        </div>
        <el-button >导出资料</el-button>
        <el-dialog
                title="修改施工店信息" :visible.sync="modifyDealerVisible" width="75%" center>
            <span>施工店信息</span>
            <el-form ref="modiDealer" :rules="rules" :model="modiDealer" label-width="20%" class="check-ruleForm">
                <el-form-item label="施工店名稱" prop="dealerName">
                    <el-input v-model="modiDealer.dealerName"></el-input>
                </el-form-item>
                <el-form-item label="門店編碼" prop="dealerCode">
                    <el-input v-model="modiDealer.dealerCode" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="業務範圍" prop="dealerRange">
                    <el-select v-model="modiDealer.dealerRange" multiple placeholder="请选择">
                        <el-option
                                v-for="item in cityList"
                                :key="item"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所在城市" prop="city">
                    <el-select v-model="modiDealer.city" placeholder="請選擇所在城市">
                        <el-option v-for='item in cityList' :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="modiDealer.address"></el-input>
                </el-form-item>
                <el-form-item label="門店類型" prop="dealerType">
                    <el-select v-model="modiDealer.dealerType" placeholder="請選擇門店類型">
                        <el-option label="銷售級施工店" value="advancedDealer"></el-option>
                        <el-option label="施工店" value="dealer"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="門店電話" prop="dealerPhone">
                    <el-input v-model="modiDealer.dealerPhone"></el-input>
                </el-form-item>
                <el-form-item label="加盟日期" prop="joinDate">
                    <el-date-picker
                            v-model="modiDealer.joinDate"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="合同截止日期" prop="endDate">
                    <el-date-picker
                            v-model="modiDealer.endDate"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" icon="el-icon-check" @click="submitForm('modiDealer')">確定</el-button>
                <el-button icon="el-icon-close" @click="modifyDealerVisible = false">取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "dealersData",
        data(){
            return {
                inputDealerCode:'',
                newDealerVisible:false,
                modifyDealerVisible:false,
                currentPage:1,
                pageSize:10,
                dealersList:[
                    {dealerName:'taibei路傑',dealerCode:'Y0001',dealerRange:['taibei,taizhong'],city:'taibei',address:'1路5號',dealerType:'施工店',dealerPhone:'123123123',joinDate:'2019.01.02',endDate:'2029.01.01'},
                    {dealerName:'taibei路傑2',dealerCode:'Y0002',dealerRange:['tainan,taizhong'],city:'taibei2',address:'1路6號',dealerType:'施工店',dealerPhone:'123123124',joinDate:'2019.01.02',endDate:'2029.01.01'},
                    {dealerName:'taibei路傑3',dealerCode:'Y0003',dealerRange:['taizhong'],city:'taibei3',address:'1路7號',dealerType:'施工店',dealerPhone:'123123125',joinDate:'2019.01.02',endDate:'2029.01.01'},
                ],
                newDealer:{
                    dealerName:'',
                    dealerCode:'',
                    dealerRange:[],
                    city:'',
                    address:'',
                    dealerType:'',
                    dealerPhone:'',
                    joinDate:'',
                    endDate:''
                },
                cityList:["台北市", "新北市","桃園市", "台中市","台南市", "高雄市", "基隆市","新竹市","嘉義市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","屏東縣","宜蘭縣","花蓮縣","臺東縣", "澎湖縣","金門縣","連江縣"],
                rules: {
                    dealerName: [
                        { required: true, message: '請輸入門店名稱', trigger: 'blur' },
                    ],
                    dealerCode: [
                        { required: true, message: '請輸入門店編碼', trigger: 'blur' },
                    ],
                    dealerRange: [
                        { required: true, message: '請選擇業務範圍', trigger: 'blur' },
                    ],
                    city: [
                        { required: true, message: '請選擇門店所在城市', trigger: 'blur' },
                    ],
                    address: [
                        { required: true, message: '請輸入門店地址', trigger: 'blur' },
                    ],
                    dealerType: [
                        { required: true, message: '請選擇門店類型', trigger: 'blur' }
                    ],
                    dealerPhone: [
                        { required: false, message: '請輸入門店電話', trigger: 'blur'}
                    ],
                    joinDate: [
                        { required: false, message: '請選擇門店加盟日期', trigger: 'blur' }
                    ],
                    endDate: [
                        { required: false, message: '請選擇合同到期日', trigger: 'blur' }
                    ]
                },
                oldDealerCode:'',
                modiDealer:{}
            }
        },
        mounted() {
            alert('取施工店數據')
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
            showAddDealer(){
                this.oldDealerCode = '';
                this.newDealerVisible = true
            },
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert("提交施工店信息+oldDealerCode，新門店編碼後台建立系統用戶");
                        this.newDealerVisible = false;
                        this.modifyDealerVisible = false;
                        alert("重新請求信息");
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            submitQuery(){
                alert('取查詢數據')
            },
            modifyDealer(index,row){
                alert('修改施工店，門店編碼：'+row.dealerCode)
                this.modiDealer = row;
                this.oldDealerCode = row.dealerCode;
                this.modifyDealerVisible = true
            },
            deleteDealer(index,row) {
                this.$confirm('此操作将永久删除该施工店信息, 是否继续?', '重要提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    alert('发请求删除施工店！');
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
        }
    }
</script>

<style scoped>
    .subpage {
        height:100%
    }
</style>
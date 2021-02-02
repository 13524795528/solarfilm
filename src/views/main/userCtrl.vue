<template>
    <div class="subpage">
        <el-input v-model="inputUser" aria-placeholder="請輸入用戶名"></el-input>
        <el-button icon="el-icon-search" @click="submitQuery">查詢</el-button>
        <el-button icon="el-icon-circle-plus-outline" @click="showNewUser">增加用戶</el-button>
        <el-dialog
                title="增加用戶" :visible.sync="newUserVisible" width="75%" center>
            <span>用戶信息</span>
            <el-form ref="newUser" :rules="rules" :model="newUser" label-width="20%" class="check-ruleForm">
                <el-form-item label="用戶名" prop="userName">
                    <el-input v-model="newUser.userName"></el-input>
                </el-form-item>
                <el-form-item label="密碼" prop="passWord">
                    <el-input v-model="newUser.passWord"></el-input>
                </el-form-item>
                <el-form-item label="確認密碼" prop="checkPass">
                    <el-input v-model="newUser.checkPass"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="userRole">
                    <el-select v-model="newUser.userRole" placeholder="請選擇類別">
                        <el-option label="施工店" value="施工店"></el-option>
                        <el-option label="管理員" value="管理員"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所屬施工店" prop="userDealer">
                    <el-select v-model="newUser.userDealer" placeholder="請選擇施工店">
                        <el-option v-for='item in dealerNameList' :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="聯繫方式" prop="userPhone">
                    <el-input v-model="newUser.userPhone"></el-input>
                </el-form-item>
                <el-form-item label="狀態" prop="userStatus">
                    <el-select v-model="newUser.userStatus" placeholder="請選擇狀態">
                        <el-option label="正常" value="正常"></el-option>
                        <el-option label="禁用" value="禁用"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" icon="el-icon-check" @click="submitForm('newUser')">確定</el-button>
                <el-button icon="el-icon-close" @click="resetForm('newUser')">重置</el-button>
            </span>
        </el-dialog>
        <br>
        <el-divider/>
        <br>
        <span>用戶列表</span>
        <el-table
                :data="userList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                stripe
                border
                height="70%"
                style="width:100%">
            <el-table-column prop="userName" label="用戶名" width="100px"></el-table-column>
            <el-table-column prop="userRole" label="角色" width="100px"></el-table-column>
            <el-table-column prop="userDealer" label="所屬施工店" width="100px"></el-table-column>
            <el-table-column prop="userPhone" label="聯繫方式" width="100px"></el-table-column>
            <el-table-column prop="userStatus" label="狀態" width="100px"></el-table-column>
            <el-table-column label="操作" width="260px">
                <template slot-scope="scope">
                    <el-button size="mini" icon="el-icon-edit" @click="modifyUser(scope.$index, scope.row)">修改</el-button>
                    <el-button size="mini" icon="el-icon-delete" @click="deleteUser(scope.$index, scope.row)">刪除</el-button>
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
                    :total="userList.length">
            </el-pagination>
        </div>
        <el-dialog
                title="增加用戶" :visible.sync="modifyUserVisible" width="75%" center>
            <span>用戶信息</span>
            <el-form ref="modiUser" :rules="rules2" :model="modiUser" label-width="20%" class="check-ruleForm">
                <el-form-item label="用戶名" prop="userName">
                    <el-input v-model="modiUser.userName" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="密碼" prop="passWord">
                    <el-input v-model="modiUser.passWord"></el-input>
                </el-form-item>
                <el-form-item label="確認密碼" prop="checkPass">
                    <el-input v-model="modiUser.checkPass"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="userRole">
                    <el-select v-model="modiUser.userRole" placeholder="請選擇類別">
                        <el-option label="施工店" value="dealer"></el-option>
                        <el-option label="管理員" value="administer"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所屬施工店" prop="userDealer">
                    <el-select v-model="modiUser.userDealer" placeholder="請選擇施工店">
                        <el-option v-for='item in dealerNameList' :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="聯繫方式" prop="userPhone">
                    <el-input v-model="modiUser.userPhone"></el-input>
                </el-form-item>
                <el-form-item label="狀態" prop="userStatus">
                    <el-select v-model="modiUser.userStatus" placeholder="請選擇狀態">
                        <el-option label="正常" value="正常"></el-option>
                        <el-option label="禁用" value="禁用"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" icon="el-icon-check" @click="submitForm('modiUser')">確定</el-button>
                <el-button icon="el-icon-close" @click="modifyUserVisible = false">取消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "userCtrl",
        data(){
            var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.newUser.checkPass !== '') {
                    this.$refs.newUser.validateField('checkPass');
                }
                callback();
            }
        };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.newUser.passWord) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            var validatePass3 = (rule, value, callback) => {
                if (this.modiUser.checkPass !== '') {
                    this.$refs.modiUser.validateField('checkPass');
                }
                callback();
            };
            var validatePass4 = (rule, value, callback) => {
                if (value !== this.modiUser.passWord) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                inputUser:'',
                newUserVisible:false,
                modifyUserVisible:false,
                currentPage:1,
                pageSize:10,
                userList:[
                    {userName:'aaa',userRole:'施工店',userDealer:'Y0001',userPhone:'123123123',userStatus:'正常'},
                    {userName:'bbb',userRole:'施工店',userDealer:'Y0002',userPhone:'123123124',userStatus:'禁用'},
                    {userName:'ccc',userRole:'施工店',userDealer:'Y0003',userPhone:'123123125',userStatus:'正常'}
                    ],
                newUser:{
                    userName:'',
                    passWord:'',
                    checkPass:'',
                    userRole:'',
                    userDealer:'',
                    userPhone:'',
                    userStatus:''
                },
                dealerNameList:['A','B','C','D','E'],
                rules: {
                    userName: [
                        { required: true, message: '請輸入用戶名', trigger: 'blur' },
                    ],
                    passWord: [
                        { required: true, validator: validatePass, trigger: 'blur' },
                        { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
                    ],
                    checkPass: [
                        { required: true, validator: validatePass2, trigger: 'blur' }
                    ],
                    userRole: [
                        { required: true, message: '請選擇用戶角色', trigger: 'blur' },
                    ],
                    userDealer: [
                        { required: true, message: '請選擇用戶所屬施工店', trigger: 'blur' },
                    ],
                    userPhone: [
                        { required: false, message: '請輸入聯繫方式', trigger: 'blur' },
                    ],
                    userStatus: [
                        { required: false, message: '請選擇狀態', trigger: 'blur' },
                    ]
                },
                rules2: {
                    userName: [
                        { required: false, message: '請輸入用戶名', trigger: 'blur' },
                    ],
                    passWord: [
                        { validator: validatePass3, trigger: 'blur' },
                        { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass4, trigger: 'blur' }
                    ],
                    userRole: [
                        { required: false, message: '請選擇用戶角色', trigger: 'blur' },
                    ],
                    userDealer: [
                        { required: false, message: '請選擇用戶所屬施工店', trigger: 'blur' },
                    ],
                    userPhone: [
                        { required: false, message: '請輸入聯繫方式', trigger: 'blur' },
                    ],
                    userStatus: [
                        { required: false, message: '請選擇狀態', trigger: 'blur' },
                    ]
                },
                oldUserName:'',
                modiUser:{
                    userName:'',
                    passWord:'',
                    checkPass:'',
                    userRole:'',
                    userDealer:'',
                    userPhone:'',
                    userStatus:''}
            }
        },
        mounted() {
            alert('取用戶數據')
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
            showNewUser(){
                alert('取施工店名列表');
                this.oldUserName = '';
                this.newUserVisible = true
            },
            submitQuery(){
                alert('取用戶數據')
            },
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('提交新用戶+oldUserName以判斷是新增還是修改');
                        this.newUserVisible = false;
                        this.modifyUserVisible = false;
                        alert("重新請求信息");
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            modifyUser(index,row){
                alert('修改用戶名：'+row.userName)
                this.modiUser = row;
                this.oldUserName = row.userName;
                this.modifyUserVisible = true
            },
            deleteUser(index,row) {
                this.$confirm('此操作将永久删除该用戶, 是否继续?', '重要提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    alert('发请求删除用戶！用戶名：'+ row.userName);
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
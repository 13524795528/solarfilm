<template>
    <div class="subpage">
        <el-input v-model="inputUser" aria-placeholder="請輸入用戶名"></el-input>
        <el-button @click="submitQuery">查詢</el-button>
        <el-button @click="showNewUser">增加用戶</el-button>
        <el-dialog
                title="增加用戶" :visible.sync="newUserVisible" width="75%" center>
            <span>用戶信息</span>
            <el-form ref="newUser" :rules="rules" :model="newUser" label-width="20%" class="check-ruleForm">
                <el-form-item label="用戶名" prop="userName">
                    <el-input v-model="newUser.userName"></el-input>
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
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitForm('newUser')">確定</el-button>
                <el-button @click="newUserVisible = false">取消</el-button>
            </span>
        </el-dialog>
        <br>
        <el-divider/>
        <br>
        <span>用戶列表</span>
        <el-table
                :data="userList"
                stripe
                border
                height="95%"
                style="width:100%">
            <el-table-column prop="userName" label="用戶名" width="100px"></el-table-column>
            <el-table-column prop="userRole" label="角色" width="100px"></el-table-column>
            <el-table-column prop="userDealer" label="所屬施工店" width="100px"></el-table-column>
            <el-table-column prop="userPhone" label="聯繫方式" width="100px"></el-table-column>
            <el-table-column label="操作" width="260px">
                <template slot-scope="scope">
                    <el-button size="mini" @click="modifyUser(scope.$index, scope.row)">修改</el-button>
                    <el-button size="mini" @click="deleteUser(scope.$index, scope.row)">刪除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
                title="增加用戶" :visible.sync="modifyUserVisible" width="75%" center>
            <span>用戶信息</span>
            <el-form ref="modiUser" :rules="rules" :model="modiUser" label-width="20%" class="check-ruleForm">
                <el-form-item label="用戶名" prop="userName">
                    <el-input v-model="modiUser.userName" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="userRole">
                    <el-select v-model="modiUser.userRole" placeholder="請選擇類別">
                        <el-option label="施工店" value="dealer"></el-option>
                        <el-option label="管理員" value="administer"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所屬施工店" prop="userDealer">
                    <el-select v-model="modiUser.userDealer" placeholder="請選擇施工店" :disabled="true">
                        <el-option v-for='item in dealerNameList' :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="聯繫方式" prop="userPhone">
                    <el-input v-model="modiUser.userPhone"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitForm('modiUser')">確定</el-button>
                <el-button @click="modifyUserVisible = false">取消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "userCtrl",
        data(){
            return {
                inputUser:'',
                newUserVisible:false,
                modifyUserVisible:false,
                userList:[
                    {userName:'aaa',userRole:'施工店',userDealer:'Y0001',userPhone:'123123123'},
                    {userName:'bbb',userRole:'施工店',userDealer:'Y0002',userPhone:'123123124'},
                    {userName:'ccc',userRole:'施工店',userDealer:'Y0003',userPhone:'123123125'}
                    ],
                newUser:{
                    userName:'',
                    userRole:'',
                    userDealer:'',
                    userPhone:''
                },
                dealerNameList:['A','B','C','D','E'],
                rules: {
                    userName: [
                        { required: true, message: '請輸入用戶名', trigger: 'blur' },
                    ],
                    userRole: [
                        { required: true, message: '請選擇用戶角色', trigger: 'blur' },
                    ],
                    userDealer: [
                        { required: false, message: '請選擇用戶所屬施工店', trigger: 'blur' },
                    ],
                    userPhone: [
                        { required: false, message: '請輸入聯繫方式', trigger: 'blur' },
                    ]
                },
                oldUserName:'',
                modiUser:{}
            }
        },
        mounted() {
            alert('取用戶數據')
        },
        methods:{
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
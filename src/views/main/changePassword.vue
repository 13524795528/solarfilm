<template>
    <div>
        <span>修改密碼</span>
        <el-form ref="changePass" :rules="rules" :model="changePass" label-width="20%" class="check-ruleForm">
            <el-form-item label="舊密碼" prop="oldPassword">
                <el-input v-model="changePass.oldPassword" placeholder="请输入舊密碼">请输入舊密碼</el-input>
            </el-form-item>
        <el-form-item label="密碼" prop="newPassword">
            <el-input v-model="changePass.newPassword"></el-input>
        </el-form-item>
        <el-form-item label="確認密碼" prop="checkPass">
            <el-input v-model="changePass.checkPass"></el-input>
        </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
                <el-button type="primary" icon="el-icon-check" @click="submitForm('changePass')">確定</el-button>
                <el-button icon="el-icon-close" @click="resetForm('changePass')" >取消</el-button>
            </span>
    </div>
</template>

<script>
    export default {
        name: "changePassword",
        data(){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.changePass.checkPass !== '') {
                        this.$refs.changePass.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.changePass.newPassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return{
                password:'123123123',
                changePass:{
                    newPassword:'',
                    checkPass:'',
                    oldPassword:'',
                },
                rules: {
                    newPassword: [
                        { required: true, validator: validatePass, trigger: 'blur' },
                        { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
                    ],
                    checkPass: [
                        { required: true, validator: validatePass2, trigger: 'blur' }
                    ],
                    oldPassword: [
                        { required: true, message: '請輸入舊密碼', trigger: 'blur' },
                    ]
                },
            }
        },
        mounted() {
            alert('取該用戶的密碼,賦值給password')
        },
        methods:{
            submitForm(formName){
                if (this.changePass.oldPassword === this.password){
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            alert('提交新密碼');
                            alert("修改成功");
                            this.$router.push('/')
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    });
                }else{
                    alert('舊密碼不正確，請重新輸入密碼！')
                }

            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="login_Form">
            <h2>登陆</h2>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" >登陆</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                ruleForm:{
                    username:"",
                    password:""
                },
                rules:{
                    username:[
                        {required:true, message:'请输入用户名', trigger:'blur' },
                        {min:3, max:8, message:'长度在3～8个字符', trigger:'blur'}
                    ],
                    password: [
                        {required:true, message:'请输入密码', trigger:'blur' },
                        {min:8, max:16, message:'长度在8～16个字符', trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message({
                            message: '登陆成功！',
                            type: 'success'
                        });
                        this.$router.push('/warranty')
                    } else {
                        this.$message({
                            message: '用户名或密码错误！',
                            type: 'warning'
                        });
                        return false
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .login_Form {
        width: 320px;
        margin: 180px auto;
        border: 1px solid #DCDFE6;
        padding: 10px 20px 30px 15px;
        border-radius: 3px;
        box-shadow: 0 0 10px #DCDFE6;
    }


</style>
<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="login_Form">
            <h2>质保查询</h2>
            <el-form-item label="手机号码" prop="userphone">
                <el-input v-model="ruleForm.userphone"></el-input>
            </el-form-item>
            <el-form-item label="车牌号码" prop="vehicleNum">
                <el-input v-model="ruleForm.vehicleNum"></el-input>
            </el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" >确认</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                ruleForm:{
                    userphone:"",
                    vehicleNum:""
                },
                rules:{
                    userphone:[
                        {required:true, message:'请输入您的手机号码', trigger:'blur' },
                        {min:3, max:8, message:'长度在3～8个字符', trigger:'blur'}
                    ],
                    vehicleNum: [
                        {required:true, message:'请输入您的车牌号码', trigger:'blur' },
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
                            message: '查询成功！',
                            type: 'success'
                        });
                        this.$router.push('/warranty')
                    } else {
                        this.$message({
                            message: '手机号码或车牌号码错误！',
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
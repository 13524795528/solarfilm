<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="login_Form">
            <h2>太陽膜質保查詢</h2>
            <el-form-item label="手機號碼" prop="userphone">
                <el-input v-model="ruleForm.userphone"></el-input>
            </el-form-item>
            <el-form-item label="車牌號碼" prop="vehicleNum">
                <el-input v-model="ruleForm.vehicleNum"></el-input>
            </el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" >確認查詢</el-button>
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
                        {required:true, message:'請輸入您的手機號碼', trigger:'blur' },
                        {min:10, max:10, message:'長度10位數字', trigger:'blur'}
                    ],
                    vehicleNum: [
                        {required:true, message:'請輸入您的車牌號碼', trigger:'blur' },
                    ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push('/warranty')
                    } else {
                        this.$message({
                            message: '未查詢到相關信息，請確保輸入的手機號碼或車牌號碼正確無誤！',
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
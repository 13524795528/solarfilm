<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px" class="dealers_Form">
            <h2>施工店入口</h2>
            <el-form-item label="门店编码" prop="usercode">
                <el-input v-model="ruleForm.usercode"></el-input>
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
        name: "dealers",
        data() {
            return {
                ruleForm:{
                    usercode:"",
                    password:""
                },
                rules:{
                    usercode:[
                        {required:true, message:'请输入门店编码', trigger:'blur' },
                        {min:3, max:10, message:'长度3~10个字符', trigger:'blur'}
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
                            message: '门店登陆成功！',
                            type: 'success'
                        });
                        this.$router.push({name:'main', params:{usercode:this.ruleForm.usercode}})
                    } else {
                        this.$message({
                            message: '门店编号或密码错误！',
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
    .dealers_Form {
        width: 320px;
        margin: 180px auto;
        border: 1px solid #DCDFE6;
        padding: 10px 20px 30px 15px;
        border-radius: 3px;
        box-shadow: 0 0 10px #DCDFE6;
    }
</style>
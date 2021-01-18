<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px" class="certify_Form">
            <h2>认证</h2>
            <el-form-item label="VIN后4位" prop="vin4">
                <el-input v-model="ruleForm.vin4"></el-input>
            </el-form-item>
            <el-form-item label="施工单号" prop="worksheet">
                <el-input v-model="ruleForm.worksheet"></el-input>
            </el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" >确认</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "check",
        data() {
            return {
                ruleForm:{
                    vin4:"",
                    worksheet:""
                },
                rules:{
                    vin4:[
                        {required:true, message:'请输入VIN码后4位', trigger:'blur' },
                        {min:4, max:4, message:'长度4个字符', trigger:'blur'}
                    ],
                    worksheet: [
                        {required:true, message:'请输入施工单号', trigger:'blur' },
                        {min:8, max:16, message:'长度在8～16个字符', trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push('/certification')
                    } else {
                        this.$message({
                            message: 'VIN码或施工单号错误！',
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
    .certify_Form {
        width: 320px;
        margin: 180px auto;
        border: 1px solid #DCDFE6;
        padding: 10px 20px 30px 15px;
        border-radius: 3px;
        box-shadow: 0 0 10px #DCDFE6;
    }
</style>
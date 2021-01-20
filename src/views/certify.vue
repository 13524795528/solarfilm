<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px" class="certify_Form">
            <h2>車輛認證</h2>
            <el-form-item label="VIN後4位" prop="vin4">
                <el-input v-model="ruleForm.vin4"></el-input>
            </el-form-item>
            <el-form-item label="保固卡號" prop="worksheet">
                <el-input v-model="ruleForm.worksheet"></el-input>
            </el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" >確認</el-button>
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
                        {required:true, message:'請輸入VIN碼後4位', trigger:'blur' },
                        {min:4, max:4, message:'VIN碼最後4個字符', trigger:'blur'}
                    ],
                    worksheet: [
                        {required:true, message:'請輸入保固卡號', trigger:'blur' },
                    ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push('/check')
                    } else {
                        this.$message({
                            message: '未查詢到該VIN碼或保固卡號，詳情請資訊銷售店！',
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
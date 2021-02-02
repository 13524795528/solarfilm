<template>
    <div class="subpage">
        <el-button icon="el-icon-circle-plus-outline" @click="showAddProduct">增加產品</el-button>
        <br>
        <el-dialog
                title="增加產品" :visible.sync="newProductVisible" width="75%" center>
        <span>產品信息</span>
        <el-form ref="newProduct" :rules="rules" :model="newProduct" label-width="20%" class="check-ruleForm">
            <el-form-item label="產品類別" prop="productType">
                <el-select v-model="newProduct.productType" placeholder="請選擇類別">
                    <el-option label="零售專用" value="retail"></el-option>
                    <el-option label="PDI專用" value="PDI"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="產品系列" prop="productSeries">
                <el-input v-model="newProduct.productSeries"></el-input>
            </el-form-item>
            <el-form-item label="產品編碼" prop="productCode">
                <el-input v-model="newProduct.productCode"></el-input>
            </el-form-item>
            <el-form-item label="透光率" prop="productTransparent">
                <el-input v-model="newProduct.productTransparent"></el-input>
            </el-form-item>
            <el-form-item label="紫外線阻隔率" prop="productUltraviolet">
                <el-input v-model="newProduct.productUltraviolet"></el-input>
            </el-form-item>
            <el-form-item label="紅外線阻隔率" prop="productInfrared">
                <el-input v-model="newProduct.productInfrared"></el-input>
            </el-form-item>
            <el-form-item label="總隔熱率" prop="productHeat">
                <el-input v-model="newProduct.productHeat"></el-input>
            </el-form-item>
            <el-form-item label="產品質保期" prop="warrantyLimit">
                <el-input v-model="newProduct.warrantyLimit"></el-input>
            </el-form-item>
            <el-form-item label="備註說明" prop="productRemark">
                <el-input v-model="newProduct.productRemark"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="submitForm('newProduct')">確定</el-button>
            <el-button @click="newProductVisible = false">取消</el-button>
        </div>
    </el-dialog>
        <el-divider/>
        <br>
        <span>產品列表</span>
        <el-table
                :data="productInfo.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                stripe
                border
                height="70%"
                style="width:100%">
            <el-table-column prop="productType" label="產品類別" width="100px"></el-table-column>
            <el-table-column prop="productSeries" label="產品系列" width="100px"></el-table-column>
            <el-table-column prop="productCode" label="產品編碼" width="100px"></el-table-column>
            <el-table-column prop="productTransparent" label="透光率" width="100px"></el-table-column>
            <el-table-column prop="productUltraviolet" label="紫外線阻隔率" width="100px"></el-table-column>
            <el-table-column prop="productInfrared" label="紅外線阻隔率" width="100px"></el-table-column>
            <el-table-column prop="productHeat" label="總隔熱率" width="100px"></el-table-column>
            <el-table-column prop="warrantyLimit" label="產品質保期" width="100px"></el-table-column>
            <el-table-column prop="productRemark" label="備註" width="100px"></el-table-column>
            <el-table-column label="操作" width="260px">
                <template slot-scope="scope">
                <el-button size="mini" icon="el-icon-edit" @click="modifyProduct(scope.$index, scope.row)">修改</el-button>
                <el-button size="mini" icon="el-icon-delete"@click="deleteProduct(scope.$index, scope.row)">刪除</el-button>
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
                    :total="productInfo.length">
            </el-pagination>
        </div>
        <el-button >导出资料</el-button>
        <el-dialog
                title="修改產品信息" :visible.sync="modifyProductVisible" width="75%" center>
            <span>產品信息</span>
            <el-form ref="modifyProduct" :rules="rules" :model="modiProduct" label-width="20%" class="check-ruleForm">
                <el-form-item label="產品類別" prop="productType">
                    <el-select v-model="modiProduct.productType" placeholder="請選擇類別">
                        <el-option label="零售專用" value="retail"></el-option>
                        <el-option label="PDI專用" value="PDI"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="產品系列" prop="productSeries">
                    <el-input v-model="modiProduct.productSeries"></el-input>
                </el-form-item>
                <el-form-item label="產品編碼" prop="productCode">
                    <el-input v-model="modiProduct.productCode"></el-input>
                </el-form-item>
                <el-form-item label="透光率" prop="productTransparent">
                    <el-input v-model="modiProduct.productTransparent"></el-input>
                </el-form-item>
                <el-form-item label="紫外線阻隔率" prop="productUltraviolet">
                    <el-input v-model="modiProduct.productUltraviolet"></el-input>
                </el-form-item>
                <el-form-item label="紅外線阻隔率" prop="productInfrared">
                    <el-input v-model="modiProduct.productInfrared"></el-input>
                </el-form-item>
                <el-form-item label="總隔熱率" prop="productHeat">
                    <el-input v-model="modiProduct.productHeat"></el-input>
                </el-form-item>
                <el-form-item label="產品質保期" prop="warrantyLimit">
                    <el-input v-model="modiProduct.warrantyLimit"></el-input>
                </el-form-item>
                <el-form-item label="備註說明" prop="productRemark">
                    <el-input v-model="modiProduct.productRemark"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" icon="el-icon-check" @click="submitForm('modifyProduct')">確定</el-button>
                <el-button icon="el-icon-close" @click="modifyProductVisible = false">取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "productData",
        data(){
            return {
                newProductVisible: false,
                modifyProductVisible:false,
                currentPage:1,
                pageSize:10,
                productInfo:[
                    {productType:'零售專用',productSeries:'MK',productCode:'MK70',productTransparent:'70',productUltraviolet:'99',productInfrared:'92',productHeat:'58',warrantyLimit:'5年',productRemark:''},
                    {productType:'零售專用',productSeries:'MK',productCode:'MK35',productTransparent:'37',productUltraviolet:'99',productInfrared:'96',productHeat:'75',warrantyLimit:'5年',productRemark:''},
                    {productType:'零售專用',productSeries:'MK',productCode:'MK15',productTransparent:'15',productUltraviolet:'99',productInfrared:'92',productHeat:'88',warrantyLimit:'5年',productRemark:''},
                    {productType:'零售專用',productSeries:'N',productCode:'N25',productTransparent:'21',productUltraviolet:'99',productInfrared:'92',productHeat:'58',warrantyLimit:'5年',productRemark:''},
                    {productType:'零售專用',productSeries:'R',productCode:'R35',productTransparent:'33',productUltraviolet:'99',productInfrared:'92',productHeat:'58',warrantyLimit:'5年',productRemark:''},
                    {productType:'零售專用',productSeries:'R',productCode:'R20',productTransparent:'8',productUltraviolet:'99',productInfrared:'92',productHeat:'58',warrantyLimit:'5年',productRemark:''}
                ],
                modiProduct:{},
                newProduct:{
                    productType:'',
                    productSeries:'',
                    productCode:'',
                    productTransparent:'',
                    productUltraviolet:'',
                    productInfrared:'',
                    productHeat:'',
                    warrantyLimit:'',
                    productRemark:''
                },
                rules: {
                    productType: [
                        { required: true, message: '請選擇產品類別', trigger: 'blur' },
                    ],
                    productSeries: [
                        { required: true, message: '請填寫產品系列', trigger: 'blur' },
                    ],
                    productCode: [
                        { required: true, message: '請輸入產品編碼', trigger: 'blur' },
                    ],
                    productTransparent: [
                        { required: false, message: '請輸入透光率', trigger: 'blur' },
                    ],
                    productUltraviolet: [
                        { required: false, message: '請輸入紫外線阻隔率', trigger: 'blur' },
                    ],
                    productInfrared: [
                        { required: false, message: '請輸入紅外線阻隔率', trigger: 'blur' },
                    ],
                    productHeat: [
                        { required: false, message: '請輸入總隔熱率', trigger: 'blur' }
                    ],
                    warrantyLimit: [
                        { required: true, message: '請輸入質保期限', trigger: 'blur'}
                    ],
                    productRemark: [
                        { required: false, message: '', trigger: 'blur' }
                    ]
                },
                oldProductCode:''
            }
        },
        mounted() {
            alert('取產品信息')
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
            showAddProduct(){
                this.oldProductCode = '';
                this.newProductVisible = true
            },
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert("提交產品信息+oldProductCode");
                        this.newProductVisible = false;
                        this.modifyProductVisible = false;
                        alert("重新請求信息");
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            modifyProduct(index,row){
                alert('修改產品，編碼：'+row.productCode)
                this.modiProduct = row;
                this.oldProductCode = row.productCode;
                this.modifyProductVisible = true
            },
            deleteProduct(index,row) {
                this.$confirm('此操作将永久删除该產品信息, 是否继续?', '重要提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    alert('发请求删除產品！');
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
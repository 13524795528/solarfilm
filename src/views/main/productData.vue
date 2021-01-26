<template>
    <div>
        <el-button @click="newProductVisible = true">增加產品</el-button>
        <br>
        <el-dialog
                title="增加車輛信息" :visible.sync="newClientVisible" width="75%" center>
            <span>車輛信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="nextStep">確定</el-button>
                <el-button @click="newClientVisible = false">取消</el-button>
            </span>
        </el-dialog>
        <el-divider/>
        <br>
        <span>產品列表</span>
        <el-table
                :data="productInfo"
                stripe
                border
                height="120"
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
            <el-table-column label="操作" width="260px"><el-button>修改</el-button><el-button>刪除</el-button></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "productData",
        data(){
            return {
                newProductVisible: false,
                productInfo:[
                    {productType:'零售專用',productSeries:'MK',productCode:'MK70',productTransparent:'70',productUltraviolet:'99',productInfrared:'92',productHeat:'58',warrantyLimit:'5年',productRemark:''},
                    {productType:'零售專用',productSeries:'MK',productCode:'MK35',productTransparent:'37',productUltraviolet:'99',productInfrared:'96',productHeat:'75',warrantyLimit:'5年',productRemark:''},
                    {productType:'零售專用',productSeries:'MK',productCode:'MK15',productTransparent:'15',productUltraviolet:'99',productInfrared:'92',productHeat:'88',warrantyLimit:'5年',productRemark:''},
                    {productType:'零售專用',productSeries:'N',productCode:'N25',productTransparent:'21',productUltraviolet:'99',productInfrared:'92',productHeat:'58',warrantyLimit:'5年',productRemark:''},
                    {productType:'零售專用',productSeries:'R',productCode:'R35',productTransparent:'33',productUltraviolet:'99',productInfrared:'92',productHeat:'58',warrantyLimit:'5年',productRemark:''},
                    {productType:'零售專用',productSeries:'R',productCode:'R20',productTransparent:'8',productUltraviolet:'99',productInfrared:'92',productHeat:'58',warrantyLimit:'5年',productRemark:''}
                ]
            }
        },
        mounted() {
            alert('取產品信息')
        }
    }
</script>

<style scoped>

</style>
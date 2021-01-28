<template>
    <div class="subpage">
        <el-input v-model="inputDealerCode" aria-placeholder="請輸入施工門店編號"></el-input>
        <el-date-picker
                v-model="valueDate"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
        </el-date-picker>
        <el-button @click="submitQuery">查詢</el-button>
        <br>
        <el-divider/>
        <br>
        <el-table
                :data="productMap"
                :visible="productMapVisible"
                stripe
                border
                height="95%"
                style="width:100%">
            <el-table-column prop="productCode" label="產品編碼" width="120px"></el-table-column>
            <el-table-column prop="frontFace" label="前擋" width="120px"></el-table-column>
            <el-table-column prop="frontSide" label="前側窗" width="120px"></el-table-column>
            <el-table-column prop="backSide" label="後側窗" width="120px"></el-table-column>
            <el-table-column prop="backFace" label="後擋" width="120px"></el-table-column>
            <el-table-column prop="skylight" label="天窗" width="120px"></el-table-column>
            <el-table-column label="總計" width="100px"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "productMap",
        data(){
            return {
                inputDealerCode:'',
                productMapVisible:false,
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                valueDate: '',
                productMap:[]
            }
        },
        methods:{
            submitQuery(){
                alert('提交查詢');
                this.productMapVisible = true
            }
        }
    }
</script>

<style scoped>
    .subpage {
        height:100%
    }
</style>
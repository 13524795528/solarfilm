<template>
    <div class="subpage">
        <el-row>
            <el-col :span="2">
                <span>門店編號</span>
            </el-col>
            <el-col :span="2">
                <el-input v-model="inputDealerCode" aria-placeholder="請輸入施工門店編號"></el-input>
            </el-col>
            <el-col :span="2">
                <span>日期範圍</span>
            </el-col>
            <el-col :span="6">
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
            </el-col>
            <el-col :span="3">
                <el-checkbox-group v-model="radioVehicle">
                    <el-checkbox label="零售"></el-checkbox>
                    <el-checkbox label="PDI"></el-checkbox>
                </el-checkbox-group>
            </el-col>
            <el-col :span="2">
                <el-button icon="el-icon-search" @click="submitQuery">查詢</el-button>
            </el-col>
        </el-row>

        <el-divider/>
        <br>
        <el-table
                :data="productMap.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                stripe
                border
                show-summary
                height="70%"
                style="width:100%">
            <el-table-column prop="productCode" label="產品編碼" width="120px"></el-table-column>
            <el-table-column prop="frontFace" label="前擋" width="120px"></el-table-column>
            <el-table-column prop="frontSide" label="前側窗" width="120px"></el-table-column>
            <el-table-column prop="backSide" label="後側窗" width="120px"></el-table-column>
            <el-table-column prop="backFace" label="後擋" width="120px"></el-table-column>
            <el-table-column prop="skylight" label="天窗" width="120px"></el-table-column>
            <el-table-column label="總計" width="140px"></el-table-column>
        </el-table>
        <el-row type="flex" justify="space-between">
            <el-col :span="8">
            </el-col>
            <el-col :span="6">
                <el-button >导出統計結果</el-button>
            </el-col>
            <el-col :span="8">
                <div class="block">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[1,2,10, 20, 30, 40]"
                            :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="productMap.length">
                    </el-pagination>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "productMap",
        data(){
            return {
                inputDealerCode:'',
                currentPage:1,
                pageSize:10,
                radioVehicle:['零售'],
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
        mounted() {
            alert('取产品统计数据')
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
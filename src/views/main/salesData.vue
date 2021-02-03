<template>
    <div class="subpage">
        <el-row>
            <el-col :span="2">
                <span>門店編號</span>
            </el-col>
            <el-col :span="3">
                <el-input v-model="inputDealer" aria-placeholder="請輸入施工門店編號">請輸入門店編號</el-input>
            </el-col>
            <el-col :span="2">
                <span>年度</span>
            </el-col>
            <el-col :span="3">
                <el-date-picker
                        v-model="valueYear"
                        type="year"
                        placeholder="選擇年份">
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
                :data="salesList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                stripe
                border
                show-summary
                height="70%"
                style="width:100%">
            <el-table-column prop="dealerName" label="施工店名稱" width="100px"></el-table-column>
            <el-table-column prop="dealerCode" label="門店編號" width="100px"></el-table-column>
            <el-table-column prop="Jan" label="一月" width="70px"></el-table-column>
            <el-table-column prop="Feb" label="二月" width="70px"></el-table-column>
            <el-table-column prop="Mar" label="三月" width="70px"></el-table-column>
            <el-table-column prop="Apr" label="四月" width="70px"></el-table-column>
            <el-table-column prop="May" label="五月" width="70px"></el-table-column>
            <el-table-column prop="Jun" label="六月" width="70px"></el-table-column>
            <el-table-column prop="Jul" label="七月" width="70px"></el-table-column>
            <el-table-column prop="Aug" label="八月" width="70px"></el-table-column>
            <el-table-column prop="Sep" label="九月" width="70px"></el-table-column>
            <el-table-column prop="Oct" label="十月" width="70px"></el-table-column>
            <el-table-column prop="Nov" label="十一月" width="75px"></el-table-column>
            <el-table-column prop="Dec" label="十二月" width="75px"></el-table-column>
            <el-table-column label="總計" width="75px"></el-table-column>
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
                            :total="salesList.length">
                    </el-pagination>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "salesData",
        data(){
            return {
                valueYear: '',
                inputDealer: '',
                currentPage:1,
                pageSize:10,
                radioVehicle:['零售'],
                salesList:[]
            }
        },
        mounted() {
            alert('请求销售数据')
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
                alert('提交統計查詢');
            }
        }
    }
</script>

<style scoped>
    .subpage {
        height:100%
    }
</style>
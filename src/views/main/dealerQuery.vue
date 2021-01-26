<template>
    <div>
        <el-input v-model="inputDealer" aria-placeholder="請輸入施工門店編號"></el-input>
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
        <el-radio v-model="radioVehicle" label="normalVehicle">普通車輛</el-radio>
        <el-radio v-model="radioVehicle" label="PDIVehicle">PDI車輛</el-radio>
        <el-button @click="submitQuery">查詢</el-button>
        <br>
        <el-divider/>
        <br>
        <el-table
                :data="queryList"
                stripe
                border
                height="120"
                style="width:100%">
            <el-table-column prop="dealerName" label="施工店名稱" width="100px"></el-table-column>
            <el-table-column prop="dealerCode" label="門店編號" width="100px"></el-table-column>
            <el-table-column prop="owner" label="車主姓名" width="80px"></el-table-column>
            <el-table-column prop="phone" label="手機號" width="100px"></el-table-column>
            <el-table-column prop="warrantyDate" label="施工時間" width="100px"></el-table-column>
            <el-table-column label="操作" width="260px"><el-button>查看詳情</el-button></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "dealerQuery",
        data() {
            return {
                inputDealer:'',
                radioVehicle:'normalVehicle',
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
                    }],
                    queryList:[]
                },
                valueDate: '',
                methods:{
                    submitQuery(){
                        alert('查詢數據統計')
                    }
                }
            };
        }
    }
</script>

<style scoped>

</style>
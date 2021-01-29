<template>
    <div class="subpage">
        <el-input v-model="inputDealer" aria-placeholder="請輸入施工門店編號">請輸入門店編號</el-input>
        <el-date-picker
                v-model="valueYear"
                type="year"
                placeholder="選擇年份">
        </el-date-picker>
        <el-button @click="submitQuery">查詢</el-button>
        <br>
        <el-divider/>
        <br>
        <el-table
                :data="salesList"
                stripe
                border
                show-summary
                height="90%"
                style="width:100%">
            <el-table-column prop="dealerName" label="施工店名稱" width="100px"></el-table-column>
            <el-table-column prop="dealerCode" label="門店編號" width="100px"></el-table-column>
            <el-table-column prop="Jan" label="一月" width="75px"></el-table-column>
            <el-table-column prop="Feb" label="二月" width="75px"></el-table-column>
            <el-table-column prop="Mar" label="三月" width="75px"></el-table-column>
            <el-table-column prop="Apr" label="四月" width="75px"></el-table-column>
            <el-table-column prop="May" label="五月" width="75px"></el-table-column>
            <el-table-column prop="Jun" label="六月" width="75px"></el-table-column>
            <el-table-column prop="Jul" label="七月" width="75px"></el-table-column>
            <el-table-column prop="Aug" label="八月" width="75px"></el-table-column>
            <el-table-column prop="Sep" label="九月" width="75px"></el-table-column>
            <el-table-column prop="Oct" label="十月" width="75px"></el-table-column>
            <el-table-column prop="Nov" label="十一月" width="75px"></el-table-column>
            <el-table-column prop="Dec" label="十二月" width="75px"></el-table-column>
            <el-table-column label="總計" width="75px"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "salesData",
        data(){
            return {
                valueYear: '',
                inputDealer: '',
                salesList:[]
            }
        },
        methods:{
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
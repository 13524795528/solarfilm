<template>
    <div class="subpage">
        <el-input v-model="inputDealerCode" aria-placeholder="請輸入門店編號"></el-input>
        <el-button @click="submitQuery">查詢</el-button>
        <el-button @click="newDealerVisible = true">增加施工店</el-button>
        <el-dialog
                title="增加施工店" :visible.sync="newDealerVisible" width="75%" center>
            <span>施工店信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitNewDealer">確定</el-button>
                <el-button @click="newDealerVisible = false">取消</el-button>
            </span>
        </el-dialog>
        <br>
        <el-divider/>
        <br>
        <span>增加施工店</span>
        <el-table
                :data="dealersList"
                stripe
                border
                height="90%"
                style="width:100%">
            <el-table-column prop="dealerName" label="施工店名稱" width="100px"></el-table-column>
            <el-table-column prop="dealerCode" label="門店編碼" width="100px"></el-table-column>
            <el-table-column prop="dealerRange" label="業務範圍" width="100px"></el-table-column>
            <el-table-column prop="city" label="所在城市" width="100px"></el-table-column>
            <el-table-column prop="address" label="地址" width="100px"></el-table-column>
            <el-table-column prop="dealerType" label="門店類型" width="100px"></el-table-column>
            <el-table-column prop="dealerPhone" label="門店電話" width="100px"></el-table-column>
            <el-table-column prop="jointDate" label="加盟日期" width="100px"></el-table-column>
            <el-table-column prop="endDate" label="合同截止日期" width="100px"></el-table-column>
            <el-table-column label="操作" width="260px"><el-button>修改</el-button><el-button>刪除</el-button></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "dealersData",
        data(){
            return {
                inputDealerCode:'',
                newDealerVisible:false,
                dealersList:[
                    {dealerName:'taibei路傑',dealerCode:'Y0001',dealerRange:'taibei,taizhong',city:'taibei',address:'1路5號',dealerType:'施工店',dealerPhone:'123123123',jointDate:'2019.01.02',endDate:'2029.01.01'},
                    {dealerName:'taibei路傑',dealerCode:'Y0001',dealerRange:'tainan,taizhong',city:'taibei2',address:'1路6號',dealerType:'施工店',dealerPhone:'123123124',jointDate:'2019.01.02',endDate:'2029.01.01'},
                    {dealerName:'taibei路傑',dealerCode:'Y0001',dealerRange:'taizhong',city:'taibei3',address:'1路7號',dealerType:'施工店',dealerPhone:'123123125',jointDate:'2019.01.02',endDate:'2029.01.01'},
                ],

            }
        },
        mounted() {
            alert('取施工店數據')
        },
        methods:{
            submitNewDealer(){
                alert('提交新施工店');
                this.newDealerVisible = false
            },
            submitQuery(){
                alert('取查詢數據')
            }
        }
    }
</script>

<style scoped>
    .subpage {
        height:100%
    }
</style>
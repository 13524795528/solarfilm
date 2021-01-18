<template>
    <div>
        <p>施工门店信息</p>
        <el-table
                :data="dealerData"
                style="width: 100%">
            <el-table-column
                    prop="dealer"
                    label="施工店名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="dealerCode"
                    label="门店编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="所在城市"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="dealerPhone"
                    label="门店电话"
                    width="180">
            </el-table-column>
        </el-table>
        <p>车辆车主信息</p>
        <el-table
                :data="dealerData"
                style="width: 100%">
            <el-table-column
                    prop="dealer"
                    label="施工店名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="dealerCode"
                    label="门店编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="所在城市"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="dealerPhone"
                    label="门店电话"
                    width="180">
            </el-table-column>
        </el-table>
        <p>施工信息</p>
        <el-table
                :data="dealerData"
                style="width: 100%">
            <el-table-column
                    prop="dealer"
                    label="施工店名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="dealerCode"
                    label="门店编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="所在城市"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="dealerPhone"
                    label="门店电话"
                    width="180">
            </el-table-column>
        </el-table>
        <p>施工日期</p>
        <el-table
                :data="dealerData"
                style="width: 100%">
            <el-table-column
                    prop="dealer"
                    label="施工日期"
                    width="180">
            </el-table-column>
        </el-table>
        <br><br>
        <el-button @click="">关闭</el-button>
    </div>
</template>

<script>
    export default {
        name: "warranty",
        data() {
            return {
                dealerData: [{
                    dealer:'门店1',
                    dealerCode: 'M022-003-02',
                    city: '台北市',
                    address: '台北市普陀区金沙江路 1518 弄',
                    dealerPhone: '091234567'
                }]
            }
        }
    }
</script>

<style scoped>

</style>
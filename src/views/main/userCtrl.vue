<template>
    <div class="subpage">
        <el-input v-model="inputUser" aria-placeholder="請輸入用戶名"></el-input>
        <el-button @click="submitQuery">查詢</el-button>
        <el-button @click="newUserVisible = true">增加用戶</el-button>
        <el-dialog
                title="增加用戶" :visible.sync="newUserVisible" width="75%" center>
            <span>用戶信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitNewUser">確定</el-button>
                <el-button @click="newUserVisible = false">取消</el-button>
            </span>
        </el-dialog>
        <br>
        <el-divider/>
        <br>
        <span>用戶列表</span>
        <el-table
                :data="userList"
                stripe
                border
                height="95%"
                style="width:100%">
            <el-table-column prop="userName" label="用戶名" width="100px"></el-table-column>
            <el-table-column prop="userType" label="角色" width="100px"></el-table-column>
            <el-table-column prop="userDealer" label="所屬施工店" width="100px"></el-table-column>
            <el-table-column prop="userPhone" label="聯繫方式" width="100px"></el-table-column>
            <el-table-column label="操作" width="260px"><el-button>修改</el-button><el-button>刪除</el-button></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "userCtrl",
        data(){
            return {
                inputUser:'',
                newUserVisible:false,
                userList:[
                    {userName:'aaa',userType:'施工店',userDealer:'Y0001',userPhone:'123123123'},
                    {userName:'bbb',userType:'施工店',userDealer:'Y0002',userPhone:'123123124'},
                    {userName:'ccc',userType:'施工店',userDealer:'Y0003',userPhone:'123123125'}
                    ]
            }
        },
        mounted() {
            alert('取用戶數據')
        },
        methods:{
            submitQuery(){
                alert('取用戶數據')
            },
            submitNewUser(){
                alert('提交新用戶');
                this.newUserVisible = false
            }
        }
    }
</script>

<style scoped>
    .subpage {
        height:100%
    }
</style>
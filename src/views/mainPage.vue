<template>
    <div id="app">
        <el-container style="height:100%">
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown @command="dropdownCommand">
                    <span class="el-dropdown-link"><i class="el-icon-user-solid" style="margin-right: 15px"></i>
                    {{$store.getters.getUser.usercode}}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="changePassword">修改密碼</el-dropdown-item>
                        <el-dropdown-item command="userLogout">退出登錄</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

            </el-header>

        <el-container style="height:100% border:1px solid #eeeeee" >

            <el-aside width="200px"  style="height:100% background-color: rgb(238,241,246)">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        router
                        unique-opened
                        align="left"
                        style="height:100%">
                    <br><br>
                    <el-menu-item index="1" route="/client" >
                        <i class="el-icon-edit-outline"></i>
                        <span slot="title">客戶資料錄入</span>
                    </el-menu-item>
                    <el-menu-item index="2" route="/PDI" >
                        <i class="el-icon-date"></i>
                        <span slot="title">PDI車輛錄入</span>
                    </el-menu-item>
                    <el-menu-item index="3" route="/dealerQuery" >
                        <i class="el-icon-search"></i>
                        <span slot="title">施工查詢統計</span>
                    </el-menu-item>
                    <el-menu-item index="4" route="/clientModify" >
                        <i class="el-icon-edit"></i>
                        <span slot="title">客戶資料修改</span>
                    </el-menu-item>
                    <el-submenu index="5" >
                        <template slot="title">
                            <i class="el-icon-printer" ></i>
                            <span>數據統計</span>
                        </template>
                            <el-menu-item index="5-1" route="/salesData">銷售數據統計</el-menu-item>
                            <el-menu-item index="5-2" route="/productMap">產品安裝分佈</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="6" route="/productData" >
                        <i class="el-icon-present"></i>
                        <span slot="title">產品信息</span>
                    </el-menu-item>
                    <el-menu-item index="7" route="/dealersData" >
                        <i class="el-icon-goods"></i>
                        <span slot="title">施工店資料</span>
                    </el-menu-item>
                    <el-menu-item index="8" route="/userCtrl" >
                        <i class="el-icon-setting"></i>
                        <span slot="title">用戶管理</span>
                    </el-menu-item>
                </el-menu>

            </el-aside>
            <el-main style="height:100%">
                <router-view/>
            </el-main>

        </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "mainPage",
        data(){
            return {
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            dropdownCommand(command){
                if (command === 'userLogout'){
                    this.$confirm('確定要退出嗎？','提示',{
                        confirmButtonText:'確定',
                        cancelButtonText:'取消',
                        type:'warning'
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '已退出登錄'
                        });
                        sessionStorage.clear();
                        // $store.action.asyncUpdateUser(context);
                        this.$router.push('dealerLogin')
                    }).catch(() => {});
                }else{
                    this.$router.push('changePassword')
                }
            }
        }
    }
</script>

<style scoped>
    html,body,#app{height:100%;margin:0;top:0}
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

    .el-main {
        background-color: #E9EEF3;
    }


</style>

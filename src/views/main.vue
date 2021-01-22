<template>
    <div>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>修改密碼</el-dropdown-item>
                        <el-dropdown-item>退出登錄</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>{{$store.getters.getUser.usercode}}</span>
            </el-header>
        </el-container>
        <el-container style="height:100%; border:1px solid #eeeeee">
            <el-aside width="200px" style="background-color: rgb(238,241,246)">
                    <el-menu
                            default-active="1"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#fff">
                        <el-menu-item index="1"><i class="el-icon-user"></i><router-link to="/main/client">客戶資料維護</router-link></el-menu-item>
                        <el-menu-item index="2"><i class="el-icon-goods"></i><router-link to="/main/PDI">PDI車輛處理</router-link></el-menu-item>
                        <el-menu-item index="3"><i class="el-icon-search"></i><router-link to="/main/dealerQuery">查詢統計</router-link></el-menu-item>
                        <el-menu-item index="4"><i class="el-icon-edit"></i><router-link to="/main/clientModify">客戶數據修改</router-link></el-menu-item>
                        <el-submenu index="5">
                            <template slot="title">
                                <i class="el-icon-odometer"></i>
                                <span>數據統計</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1"><router-link to="/main/salesData">銷售數據統計</router-link></el-menu-item>
                                <el-menu-item index="1-2"><router-link to="/main/productMap">產品安裝分佈</router-link></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item index="6">
                            <i class="el-icon-present"></i>
                            <router-link to="/main/productData">產品信息</router-link>
                        </el-menu-item>
                        <el-menu-item index="7">
                            <i class="el-icon-shopping-bag-1"></i>
                            <router-link to="/main/dealersData">施工店資料</router-link>
                        </el-menu-item>
                        <el-menu-item index="8">
                            <i class="el-icon-setting"></i>
                            <router-link to="/main/userCtrl">用戶管理</router-link>
                        </el-menu-item>
                    </el-menu>
            </el-aside>
            <el-main>
                <p>我是main内容框</p>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "main",
    }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>
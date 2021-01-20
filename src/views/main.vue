<template>
    <div>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出登陆</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>{{$store.getters.getUser.usercode}}</span>
            </el-header>
        </el-container>
        <el-container style="height:100%; border:1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238,241,246)">
                <el-menu>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-message"></i>客户资料维护
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link to="/main/client/1">用户ID=1</router-link></el-menu-item>
                            <el-menu-item index="1-2"><router-link :to="{name:'client', params:{id:2}}">用户ID=2</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-message"></i>PDI车辆处理
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1"><router-link :to="{name:'PDI', params: {id:3}}">PDI ID=3</router-link></el-menu-item>
                            <el-menu-item index="2-2"><router-link to="/gomain">回到首页</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
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
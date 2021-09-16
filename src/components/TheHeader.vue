<template>
    <a-layout>
        <!-- 头部 -->
        <a-layout-header class="header">
            <div class="logo"/>
            <!-- 导航条 -->
            <a-menu
                    theme="dark"
                    mode="horizontal"
                    v-model:selectedKeys="selectedKeys1"
                    :style="{ lineHeight: '64px' }">
                <a-menu-item key="/">
                    <router-link to="/">首页</router-link>
                </a-menu-item>
                <a-menu-item key="/adminEbook">
                    <router-link to="/adminEbook">电子书管理</router-link>
                </a-menu-item>
                <a-menu-item key="/adminCategory" >
                    <router-link to="/adminCategory">分类管理</router-link>
                </a-menu-item>
                <a-menu-item key="/about">
                    <router-link to="/about">关于我们</router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-header>
    </a-layout>
</template>

<script lang="ts">
    export default {
        name: "TheHeader"
    }
</script>

<style scoped>

</style>
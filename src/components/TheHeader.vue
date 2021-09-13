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
               <a-menu-item key="1">nav 1</a-menu-item>
               <a-menu-item key="2">nav 2</a-menu-item>
               <a-menu-item key="3">nav 3</a-menu-item>
           </a-menu>
       </a-layout-header>
   </a-layout>
</template>

<script>
    export default {
        name: "TheHeader"
    }
</script>

<style scoped>

</style>
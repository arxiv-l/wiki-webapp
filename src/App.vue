<template>
    <a-layout>
        <!-- 头部导航栏 -->
        <TheHeader/>
        <!-- 主题内容 -->
        <a-layout>
            <router-view/>
        </a-layout>

        <!-- 页脚 -->
        <a-layout-footer style="text-align: center">
            wiki项目 ©2021 Created by Ant UED
        </a-layout-footer>
    </a-layout>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import TheHeader from '@/components/TheHeader.vue';

    export default defineComponent({
        name: 'app',
        components: {
            TheHeader,
        }
    });
</script>

<style>
    .logo {
        float: left;
        width: 120px;
        height: 31px;
        margin: 16px 24px 16px 0;
        background: rgba(255, 255, 255, 0.3);
    }

    .ant-row-rtl #components-layout-demo-top-side-2 .logo {
        float: right;
        margin: 16px 0 16px 24px;
    }

    .site-layout-background {
        background: #fff;
    }

</style>
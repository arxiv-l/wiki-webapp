<template>
    <a-layout>
        <!-- 左侧菜单 -->
        <a-layout-sider width="200" style="background: #fff">
            <a-menu
                    mode="inline"
                    v-model:selectedKeys="selectedKeys2"
                    v-model:openKeys="openKeys"
                    :style="{ height: '100%', borderRight: 0 }"
            >
                <a-sub-menu key="sub1">
                    <template #title>
              <span>
                <user-outlined/>
                subnav 1
              </span>
                    </template>
                    <a-menu-item key="1">option1</a-menu-item>
                    <a-menu-item key="2">option2</a-menu-item>
                    <a-menu-item key="3">option3</a-menu-item>
                    <a-menu-item key="4">option4</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
              <span>
                <laptop-outlined/>
                subnav 2
              </span>
                    </template>
                    <a-menu-item key="5">option5</a-menu-item>
                    <a-menu-item key="6">option6</a-menu-item>
                    <a-menu-item key="7">option7</a-menu-item>
                    <a-menu-item key="8">option8</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub3">
                    <template #title>
              <span>
                <notification-outlined/>
                subnav 3
              </span>
                    </template>
                    <a-menu-item key="9">option9</a-menu-item>
                    <a-menu-item key="10">option10</a-menu-item>
                    <a-menu-item key="11">option11</a-menu-item>
                    <a-menu-item key="12">option12</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <!-- 内容 -->
        <a-layout style="padding: 0 14px 14px;margin: 10px 0 0 0">
            <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                <!-- 数据展示 -->
                <a-list v-show="!isShowWelcome" item-layout="vertical" size="large" :grid="{ gutter: 20, column: 3 }"
                        :data-source="Ebook">
                    <template #renderItem="{ item }">
                        <a-list-item key="item.name">
                            <template #actions>
              <span>
                <component v-bind:is="'FileOutlined'" style="margin-right: 8px"/>
                {{ item.docCount }}
              </span>
                                <span>
                <component v-bind:is="'UserOutlined'" style="margin-right: 8px"/>
                {{ item.viewCount }}
              </span>
                                <span>
                <component v-bind:is="'LikeOutlined'" style="margin-right: 8px"/>
                {{ item.voteCount }}
              </span>
                            </template>
                            <a-list-item-meta :description="item.description">
                                <template #title>
                                    <router-link :to="'/doc?ebookId=' + item.id">
                                        {{ item.name }}
                                    </router-link>
                                </template>
                                <template #avatar>
                                    <a-avatar :src="item.cover"/>
                                </template>
                            </a-list-item-meta>
                        </a-list-item>
                    </template>
                </a-list>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
    import {defineComponent, onMounted, ref,} from 'vue';
    import axios from "axios";

    export default defineComponent({
        name: 'Home',
        setup() {
            const Ebook = ref();
            onMounted(() => {
                axios.get("/api/ebook/getAllEbookInfo").then((response) => {
                    const data = response.data;
                    Ebook.value = data.data;
                });
            });
            return {Ebook};
        }
    });
</script>

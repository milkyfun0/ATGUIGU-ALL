import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import index from "@/layout/index.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: null, // 注意这里要带上 文件后缀.vue
    },
]
// createRouter创建路由
const router = createRouter({
    history: createWebHistory(),
    routes,
})
// 最后导出。es6的模块化方式
export default router
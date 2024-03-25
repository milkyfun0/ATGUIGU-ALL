import {createRouter, createWebHashHistory} from 'vue-router'


const router = createRouter({
        history: createWebHashHistory(),
        routes: [
            {
                path: '/',
                component: () => {
                    return import("@/view/home/Index.vue");
                }, // 注意这里要带上 文件后缀.vue
            },
            {
                path: '/home',
                component: () => {
                    return import("@/view/home/Index.vue");
                }, // 注意这里要带上 文件后缀.vue
            },
            {
                path: "/import",
                component: () => {
                    return import("@/view/import/Index.vue");
                },
            },
            {
                path: "/analysis",
                component: () => {
                    return import("@/view/analyze/Index.vue");
                },
            },
            {
                path: "/diagnosis",
                component: () => {
                    return import("@/view/diagnosis/Index.vue");
                },
                children: []
            },
            {
                path: "/predict",
                component: () => {
                    return import("@/view/predict/Index.vue");
                },
                children: []
            },
            {
                path: "/example",
                component: () => {
                    return import("@/view/example/Index.vue");
                },
            },
        ]

    }
)
// 最后导出。es6的模块化方式
export default router
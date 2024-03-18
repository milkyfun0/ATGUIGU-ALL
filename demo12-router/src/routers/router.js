import { createRouter, createWebHashHistory } from "vue-router"

// 导入路由组件
import Home from "../components/Home.vue"
import Update from "../components/Update.vue"
import Add from "../components/Add.vue"
import List from "../components/List.vue"

//创建路由对象
const router = createRouter({
    // 用于记录路由的历史
    history: createWebHashHistory(),
    // 用于定义多个不同路径的组件支架的关系
    routes: [ // 这里是 routes 不是routers
        {
            path: "/home",
            components: {
                default: Home,
                homeView: Home
            }
        },
        {
            path: "/update",
            components: { updateView: Update }
        },
        {
            path: "/add",
            components: { addView: Add }
        },
        {
            path: "/list",
            components: { listView: List }
        }
    ]
})
// 向外暴露router
export default router
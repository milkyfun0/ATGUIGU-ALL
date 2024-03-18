import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../components/Home.vue"
import Update from "../components/Update.vue"
import Add from "../components/Add.vue"
import List from "../components/List.vue"
import Show from "../components/Show.vue"
import Show2 from "../components/Show2.vue"
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/list",
            component: List
        },
        {
            path: "/add",
            component: Add
        },
        {
            path: "/update",
            component: Update
        },
        {
            path: "/show/:id/:language",
            component: Show
        },
        {
            path: "/show2",
            component: Show2
        }
    ]
}
)

// 设置全局前置守卫
// 每次切换页面前，都会执行beforeEach中的回调函数
router.beforeEach(
    (to, from, next) => {
        /**
         * from 上一个页面 从哪里来
         * to 下一个页面 到哪里来
         * next 放行的方法 只有执行了该方法 才会放行的路由 
         * next() 放行
         * next("/path") 路由重定向
         */
        console.log("beforeEach")
        console.log(to.path)
        next() // 某个分支下进行
    }
)
// 设置全局后置路由
// 每次路由切换页面后，都会执行afterEach中的回调函数
router.afterEach(
    (to, from, next) => {
        console.log("afterEach")
        console.log(from.path)
        console.log(to.path)
        // next()
    }
)

export default router
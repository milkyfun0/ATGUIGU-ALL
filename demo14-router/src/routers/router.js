import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../components/Home.vue"
import Login from "../components/Login.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/home",
            component: Home
        },
        {
            path: "/login",
            component: Login
        }
    ]

}
)

router.beforeEach((to, from, next) => {
    if (to.path === "/login") {
        //判断
        next()
    } else {
        const username = sessionStorage.getItem("username")
        if (username != null) {
            next()
        } else {
            next("/login")
        }
    }

})

export default router
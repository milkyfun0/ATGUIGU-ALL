import { createRouter, createWebHashHistory } from "vue-router"
import Operate from "../src/components/Operate.vue"
import Show from "../src/components/Show.vue"
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: "/show",
        component: Show
    }, {
        path: "/operate",
        component: Operate
    }, {
        path: "/",
        component: Show
    }
    ]
})
export default router
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import Gameplay from "../pages/Gameplay.vue"

import Tutorial from "../pages/Tutorial.vue"


const routes = [{
    path: "/",
    component: Home,
    name: "Home",
},{
    path: "/Gameplay",
    component: Gameplay,
    name: "Gameplay",

},{
    path: "/Tutorial",
    component: Tutorial,
    name: "Tutorial",
}]

const router = createRouter({
    history: createWebHistory(),
    linkActiveclass: "active",
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x:0, y: 0 }; 
    },
    routes,
});

export default router;
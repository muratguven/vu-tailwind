import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
const routes : Array<RouteRecordRaw> = [
{
    path:'/',
    name:'Dashboard',
    component: ()=>import('../views/Dashboard.vue')
},
{
    path:'/about',
    name:'About',
    component: ()=>import('../views/About.vue')
},
{
    path:'/modal',
    name:'Modals',
    component: ()=>import('../views/Modals.vue')
},
{
    path:'/form',
    name:'Forms',
    component: ()=>import('../views/Forms.vue')
},
{
    path:'/dragable',
    name:'DragDrop',
    component: ()=>import('../views/Dragables.vue')
}
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Menus from '@/components/Menus.vue'
import Events from '@/components/Events.vue'
import Reviews from '@/components/Reviews.vue'
import Menus_Detail from '@/components/Menus_Detail';

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {path:'/',component:Home},
        {path:'/menus',component:Menus},
        {path:'/menus/:menu_id',component:Menus_Detail},
        {path:'/events',component:Events,props:(route)=>({query_id:route.query.event_id})},
        {path:'/events/:event_id',component:Events,props:true},
        {path:'/reviews',component:Reviews}
    ]
});


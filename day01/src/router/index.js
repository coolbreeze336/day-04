import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta:{
      title:"登录页面",
      title2:"切换主题",
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta:{
      title:"图书页面",
      title2:"我的书架",
    },
  },
  {
    path: '/listdata',
    name: 'listdata',
    component: () => import('../views/listdata.vue'),
    meta:{
      title:"我的书架",
      title3:"◀"
    },
  },
  {
    path: '/color',
    name: 'color',
    component: () => import('../views/color.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(localStorage.getItem('token')){
    next();
  }else{
    if(to.path == "/"){
      next();
    }else{
      next("/");
    }
  }
});

export default router

import VueRouter from "vue-router"
import Vue from "vue"
import Welcome from '@/components/Welcome'
import LogIn from '@/components/LogIn'
import SignUp from '@/components/SignUp'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'LogIn',
        component: LogIn
      },
      
      {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
      },
  
      {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome,
  
      }
    ]
  })

export default router
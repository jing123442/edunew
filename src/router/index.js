import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import creatNewStudent from '@/components/creatNewStudent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/jing',
      name: 'HelloWorld',
      component: creatNewStudent
    }
  ]
})

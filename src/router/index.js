import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import creatNewStudent from '@/components/creatNewStudent'
import creatNewClass from '@/components/creatNewClass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/newStudent',
      name: 'newStudent',
      component: creatNewStudent
    }, {
      path: '/newClass',
      name: 'newClass',
      component: creatNewClass
    }, {
      path: '/StuManagement',
      name: 'StuManagement',
      component: () => import ('../components/StuManagement')
    }, {
      path: '/ClassManagement',
      name: 'classManagement',
      component: () => import ('../components/ClassManagement')
    }
  ]
})

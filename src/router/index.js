import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=> import('@/views/Home')
const Lab = ()=> import( '@/views/Lab')
const Login = ()=> import( '@/views/Login')
const JingZheng = ()=> import( '@/views/JingZheng')
const LabMan = ()=> import( '@/views/LabMan')
const Course = ()=> import( '@/views/Course')
const Classs = ()=> import( '@/views/Classs')
const XueJi = ()=> import( '@/views/XueJi')
const StuBaseNews = ()=> import( '@/views/stuBaseNews')
const Cultivate = ()=> import( '@/views/Cultivate')
const Gaimi = ()=> import( '@/views/gaimi')
const NewCourse = ()=> import( '@/views/newCourse')
const NewClass = ()=> import( '@/views/newClass')
const NewXueJi = ()=> import( '@/views/newXueJi')
const SourceLab = ()=> import( '@/views/jy/SourceLab.vue')
const Source = ()=> import( '@/views/jy/Source.vue')
const Ability = ()=> import( '@/views/jy/Ability.vue')
const JobEval = ()=> import( '@/views/jy/JobEval.vue')
const AddTest = ()=> import( '@/views/jy/AddTest.vue')
const TestList = ()=> import( '@/views/jy/TestList.vue')
const Resource = ()=> import( '@/views/jy/Resource.vue')
const UpFiles = ()=> import( '@/views/jy/UpFiles.vue')
const UpHandouts = ()=> import( '@/views/jy/UpHandouts.vue')
const UpCase = ()=> import( '@/views/jy/UpCase.vue')
const TeachAudit = ()=> import( '@/views/jy/TeachAudit.vue')
const TestManagement = ()=> import( '@/views/jy/TestManagement.vue')
const StuLogin = ()=> import( '@/views/stu/StuLogin.vue')
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home,
      component: Login,
    },
    {
      path: '/lab',
      name: 'lab',
      component: Lab
    },
    {
      path: '/login/:id',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/JingZheng/:userid',
      name: 'jingzheng',
      component: JingZheng
    },
    {
      path: '/labman',
      name: 'jw',
      component: LabMan,
      meta: {
        requireAuth: true
      },
      children: [
        { path: 'course', component: Course },
        { path: 'newCourse', name: 'newCourse', component: NewCourse },
        { path: 'classs', component: Classs },
        { path: 'newclass', name: 'newClass', component: NewClass },
        { path: 'xueji', component: XueJi },
        { path: 'newXueJi/:stuId', name: 'newXuJi', component: NewXueJi }
      ]
    },
    {
      path: '/sourceLab',
      name: 'jy',
      component: SourceLab,
      meta: {
        requireAuth: true
      },
      children: [
        { path: 'source', component: Source },
        { path: 'ability', component: Ability },
        { path: 'jobeval', component: JobEval },
        { path: 'addtest', component: AddTest },
        { path: 'testList', component: TestList },
        { path: 'resource', component: Resource },
        { path: 'upfiles', component: UpFiles, 
          // children:[
          //   {
          //     path: 'uphandouts', component: UpHandouts
          //   },
          //   {
          //     path: 'upcase', component: UpCase
          //   }
        // ]
        },
        { path: 'teachaudit', component: TeachAudit },
        { path: 'testmanagement', component: TestManagement }
      ]
    },
    {
      path: '/cultivate', component: Cultivate,
      children: [
        { path: 'stuBaseNews', component: StuBaseNews },
        { path: 'gaimi', component: Gaimi },
      ]
    },
    { path: '/stulogin', component: StuLogin }

  ]

})


export default router;
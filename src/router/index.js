import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=> import('@/components/Home')
const Lab = ()=> import( '@/components/Lab')
const Login = ()=> import( '@/components/Login')
const JingZheng = ()=> import( '@/components/JingZheng')
const LabMan = ()=> import( '@/components/LabMan')
const Course = ()=> import( '@/components/Course')
const Classs = ()=> import( '@/components/Classs')
const XueJi = ()=> import( '@/components/XueJi')
const StuBaseNews = ()=> import( '@/components/stuBaseNews')
const Cultivate = ()=> import( '@/components/Cultivate')
const Gaimi = ()=> import( '@/components/gaimi')
const NewCourse = ()=> import( '@/components/newCourse')
const NewClass = ()=> import( '@/components/newClass')
const NewXueJi = ()=> import( '@/components/newXueJi')
const SourceLab = ()=> import( '@/components/jy/SourceLab.vue')
const Source = ()=> import( '@/components/jy/Source.vue')
const Ability = ()=> import( '@/components/jy/Ability.vue')
const JobEval = ()=> import( '@/components/jy/JobEval.vue')
const AddTest = ()=> import( '@/components/jy/AddTest.vue')
const TestList = ()=> import( '@/components/jy/TestList.vue')
const Resource = ()=> import( '@/components/jy/Resource.vue')
const UpFiles = ()=> import( '@/components/jy/UpFiles.vue')
const UpHandouts = ()=> import( '@/components/jy/UpHandouts.vue')
const UpCase = ()=> import( '@/components/jy/UpCase.vue')
const TeachAudit = ()=> import( '@/components/jy/TeachAudit.vue')
const TestManagement = ()=> import( '@/components/jy/TestManagement.vue')
const StuLogin = ()=> import( '@/components/stu/StuLogin.vue')
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,

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
          children:[
            {
              path: 'uphandouts', component: UpHandouts
            },
            {
              path: 'upcase', component: UpCase
            }
        ]
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
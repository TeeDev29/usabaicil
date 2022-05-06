import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import HomeProject from '../views/HomeprojectView.vue'
import Home2floorProject from '../views/Homeproject2floorView.vue'
import CommunityProject from '../views/CommunityProjectView.vue'
import DetailView from '../views/DetailsprojectView.vue'
import Workwithus from '../views/WorkusView.vue'
import Loan from '../views/LoanView.vue'
import AllblogView from '../views/AllblogView.vue'
import BlogDetail from '../components/Blogall/detailblog.vue'
import Typehome from '../views/TypehomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
  ,
  {
    path: '/homeproject',
    name: 'homeproject',
    component: HomeProject
  }
  ,
  {
    path: '/home2floorproject',
    name: 'home2floorproject',
    component: Home2floorProject
  }

  ,
  {
    path: '/communityproject',
    name: 'communityproject',
    component: CommunityProject
  }


  ,
  {
    path: '/loancalculator',
    name: 'loancalculator',
    component: Loan
  }



  ,
  {
    path: '/workwithus',
    name: 'workwithus',
    component: Workwithus
  }

  ,
  {
    path: '/home/detail',
    name: 'DetailView',
    component: DetailView
  }

  ,
  {
    path: '/blog',
    name: 'AllblogView',
    component: AllblogView
  }

  ,
  {
    path:'/blogdetail',
    name:'BlogDetail',
    component: BlogDetail
  }


  ,
  {
    path:'/typehome',
    name:'Typehome',
    component: Typehome
  }

 
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

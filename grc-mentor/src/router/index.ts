import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import Stepper from '../components/Stepper.vue'
import UploadcvView from '../views/UploadcvView.vue'
import CvaddedView from '../views/CvaddedView.vue'
import PaymentprocessView from '../views/PaymentprocessView.vue'
import WelcomementorView from '../views/WelcomementorView.vue'
import MattermostView from '../views/MattermostView.vue'
import Sidebar from '../components/Sidebar.vue'
import MentroshipView from '../views/MentroshipView.vue'
import Starmedia from '../components/Starmedia.vue'
import CareergraphView from '../views/CareergraphView.vue'
import Grc101View from '../views/Grc101View.vue'
import Sidebargrc2 from '../components/Sidebargrc2.vue'
import GrcsecondView from '../views/GrcsecondView.vue'
import Policyreview1View from '../views/Policyreview1View.vue'
import BadgesView from '../views/BadgesView.vue'
import Sidebarprofile from '../components/Sidebarprofile.vue'
import ViewprofileView from '../views/ViewprofileView.vue'
import ProfileLogoutView from '../views/ProfileLogoutView.vue'
import CalenderView from '../views/CalenderView.vue'
import MatchingjobsView from '../views/MatchingjobsView.vue'
import CertificateView from '../views/CertificateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/stepper',
      name: 'stepper',
      component: Stepper,
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: Sidebar,
    },
    {
      path: '/sidebargrc2',
      name: 'sidebargrc2',
      component: Sidebargrc2,
    },
    {
      path: '/starmedia',
      name: 'starmedia',
      component: Starmedia,
    },
    {
      path: '/sidebarprofile',
      name: 'sidebarprofile',
      component: Sidebarprofile,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
     {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },

    
     {
      path: '/uploadcv',
      name: 'uploadcv',
      component: UploadcvView,
    },
     {
      path: '/cvadded',
      name: 'cvadded',
      component: CvaddedView,
    },
     {
      path: '/paymentprocess',
      name: 'paymentprocess',
      component: PaymentprocessView,
    },
     {
      path: '/mentornship',
      name: 'mentornship',
      component: MentroshipView,
    },
     {
      path: '/welcomementor',
      name: 'welcomementor',
      component: WelcomementorView,
    },
     {
      path: '/mattermost',
      name: 'mattermost',
      component: MattermostView,
    },

     {
      path: '/careergraph',
      name: 'careergraph',
      component: CareergraphView,
    },
    {
       path: '/grc101',
      name: 'grc101',
      component: Grc101View,
    },
     {
       path: '/grcsecond',
      name: 'grcsecond',
      component: GrcsecondView,
    },
     {
       path: '/policyreview1',
      name: 'policyreview1',
      component: Policyreview1View,
    },
     {
       path: '/badges',
      name: 'badges',
      component: BadgesView,
    },
      {
       path: '/profileview',
      name: 'profileview',
      component: ViewprofileView,
    },
      {
       path: '/profilelogout',
      name: 'profilelogout',
      component: ProfileLogoutView,
    },
     {
       path: '/calender',
      name: 'calender',
      component: CalenderView,
    },
     {
       path: '/matchingjobs',
      name: 'matchingjobs',
      component: MatchingjobsView,
    },
      {
       path: '/certificate',
      name: 'certificate',
      component: CertificateView,
    },
    {

      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router

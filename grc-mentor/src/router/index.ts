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
import Policyreview2View from '@/views/Policyreview2View.vue'
import Policyreview3View from '@/views/Policyreview3View.vue'
import Policyreview4View from '@/views/Policyreview4View.vue'
import Policyreview5View from '@/views/Policyreview5View.vue'
import Policyreview6View from '@/views/Policyreview6View.vue'
import Policyreview7View from '@/views/Policyreview7View.vue'
import ISO27001View from '@/views/ISO27001View.vue'
import MycvView from '@/views/MycvView.vue'
import SettingView from '@/views/SettingView.vue'
import OverviewView from '@/views/OverviewView.vue'
import Login from '@/components/Login.vue'
import AienabledView from '@/views/AienabledView.vue'
import PlatformView from '@/views/PlatformView.vue'
import WhatToExceptView from '@/views/WhatToExceptView.vue'
import ExperienceGainView from '@/views/ExperienceGainView.vue'
import CareerPathView from '@/views/CareerPathView.vue'
import CardPayment from '@/views/CardPayment.vue'
import PayPalPayment from '@/views/PayPalPayment.vue'
import NetBankingPayment from '@/views/NetBankingPayment.vue'
import AssesmentView from '@/views/AssesmentView.vue'
import Signin from '@/components/Signin.vue'
import MentorshipprogramView from '@/views/MentorshipprogramView.vue'
import OnboardingView from '@/views/OnboardingView.vue'
import Payment1View from '@/views/Payment1View.vue'
import ProfilesetView from '@/views/ProfilesetView.vue'
import ResultView from '@/views/ResultView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import PaymentSuccessView from '@/views/PaymentSuccessView.vue'
import SignupGrc101View from '@/views/SignupGrc101View.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import ChangePasswordView from '@/views/ChangePasswordView.vue'
import Policycomponent from '@/components/Policycomponent.vue'
import Playground from '@/components/Playground.vue'

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
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },

    {
      path: '/signin',
      name: 'signin',
      component: Signin,
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
      path: '/policyreview2',
      name: 'policyreview2',
      component: Policyreview2View,
    },
    {
      path: '/policyreview3',
      name: 'policyreview3',
      component: Policyreview3View,
    },
    {
      path: '/policyreview4',
      name: 'policyreview4',
      component: Policyreview4View,
    },
    {
      path: '/policyreview5',
      name: 'policyreview5',
      component: Policyreview5View,
    },
    {
      path: '/policyreview6',
      name: 'policyreview6',
      component: Policyreview6View,
    },
    {
      path: '/policyreview7',
      name: 'policyreview7',
      component: Policyreview7View,
    },
    {
      path: '/iso-27001',
      name: 'iso-27001',
      component: ISO27001View
    },

  
    {
      path: '/mycv',
      name: 'mycv',
      component: MycvView
    },
    {
      path: '/setting',
      name: 'setting',
      component: SettingView
    },
    {
      path: '/overview',
      name: 'overview',
      component: OverviewView
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
      path: '/aienable',
      name: 'aienable',
      component: AienabledView,
    },

    {
      path: '/platform',
      name: 'platform',
      component: PlatformView,
    },

    {
      path: '/whattoexcept',
      name: 'whattoexcept',
      component: WhatToExceptView,
    },

    {
      path: '/experiencegain',
      name: 'experiencegain',
      component: ExperienceGainView,
    },

    {
      path: '/careerpath',
      name: 'careerpath',
      component: CareerPathView,
    },

    {
      path: '/pay-card',
      name: 'pay-card',
      component: CardPayment,
    },

    {
      path: '/pay-paypal',
      name: 'pay-paypal',
      component: PayPalPayment,
    },

    {
      path: '/pay-netbanking',
      name: 'pay-netbanking',
      component: NetBankingPayment,
    },

    {
      path: '/assessment',
      name: 'assessment',
      component: AssesmentView
    },

    {
      path: '/mentornshipprogram',
      name: 'mentornshipprogram',
      component: MentorshipprogramView
    },

    {
      path: '/onboarding',
      name: 'onboarding',
      component: OnboardingView
    },

    {
      path: '/payment1',
      name: 'payment1',
      component: Payment1View
    },
    {
      path: '/profileset',
      name: 'profileset',
      component: ProfilesetView
    },

    {
      path: '/result',
      name: 'result',
      component: ResultView
    },

    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView
    },

    {
      path: '/paymentsuccess',
      name: 'paymentsuccess',
      component: PaymentSuccessView
    },


    {
      path: '/signup-grc101',
      name: 'signup-grc101',
      component: SignupGrc101View
    },

    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPasswordView
    },

    {
      path: '/changepassword',
      name: 'changepassword',
      component: ChangePasswordView
    },

    {
      path: '/policy-component',
      name: 'policy-component',
      component: Policycomponent
    },

    {
      path: '/play-ground',
      name: 'play-ground',
      component: Playground
    },

    // {

    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/',
      name: 'login',
      component: Login,
    },

  ],
})


export default router

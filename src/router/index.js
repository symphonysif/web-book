import { createRouter, createWebHistory } from 'vue-router'
import LoadingPage from '../views/LoadingPage.vue'
import LanguageOptions from '../views/LanguageOptions.vue'
import PageGuide from '../views/PageGuide.vue'
import Cover from '../views/Cover.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import PageThree from '../views/PageThree.vue'
import PageFour from '../views/PageFour.vue'
import PageFive from '../views/PageFive.vue'
import PageSix from '../views/PageSix.vue'
import PageSeven from '../views/PageSeven.vue'
import PageEight from '../views/PageEight.vue'
import PageNine from '../views/PageNine.vue'
import PageTen from '../views/PageTen.vue'
import PageEleven from '../views/PageEleven.vue'
import PageTwelve from '../views/PageTwelve.vue'
import PageThirteen from '../views/PageThirteen.vue'
import PageFourteen from '../views/PageFourteen.vue'
import PageFifteen from '../views/PageFifteen.vue'
import PageSixteen from '../views/PageSixteen.vue'
import PageSeventeen from '../views/PageSeventeen.vue'
import PageEighteen from '../views/PageEighteen.vue'
import PageNineteen from '../views/PageNineteen.vue'
import PageTwenty from '../views/PageTwenty.vue'
import PageTwentyOne from '../views/PageTwentyOne.vue'
import PageThankYou from '../views/PageThankYou.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loading-page',
      component: LoadingPage
    },
    {
      path: '/cover',
      name: 'cover',
      component: Cover
    },
    {
      path: '/page-guide',
      name: 'page-guide',
      component: PageGuide
    },
    {
      path: '/language-options',
      name: 'language-options',
      component: LanguageOptions
    },
    {
      path: '/page-one',
      name: 'page-one',
      component: PageOne
    },
    {
      path: '/page-two',
      name: 'page-two',
      component: PageTwo
    },
    {
      path: '/page-three',
      name: 'page-three',
      component: PageThree
    },
    {
      path: '/page-four',
      name: 'page-four',
      component: PageFour
    },
    {
      path: '/page-five',
      name: 'page-five',
      component: PageFive
    },
    {
      path: '/page-six',
      name: 'page-six',
      component: PageSix
    },
    {
      path: '/page-seven',
      name: 'page-seven',
      component: PageSeven
    },
    {
      path: '/page-eight',
      name: 'page-eight',
      component: PageEight
    },
    {
      path: '/page-nine',
      name: 'page-nine',
      component: PageNine
    },
    {
      path: '/page-ten',
      name: 'page-ten',
      component: PageTen
    },
    {
      path: '/page-eleven',
      name: 'page-eleven',
      component: PageEleven
    },
    {
      path: '/page-twelve',
      name: 'page-twelve',
      component: PageTwelve
    },
    {
      path: '/page-thirteen',
      name: 'page-thirteen',
      component: PageThirteen
    },
    {
      path: '/page-fourteen',
      name: 'page-fourteen',
      component: PageFourteen
    },
    {
      path: '/page-fifteen',
      name: 'page-fifteen',
      component: PageFifteen
    },
    {
      path: '/page-sixteen',
      name: 'page-sixteen',
      component: PageSixteen
    },
    {
      path: '/page-seventeen',
      name: 'page-seventeen',
      component: PageSeventeen
    },
    {
      path: '/page-eighteen',
      name: 'page-eighteen',
      component: PageEighteen
    },
    {
      path: '/page-nineteen',
      name: 'page-nineteen',
      component: PageNineteen
    },
    {
      path: '/page-twenty',
      name: 'page-twenty',
      component: PageTwenty
    },
    {
      path: '/page-twenty-one',
      name: 'page-twenty-one',
      component: PageTwentyOne
    },
    {
      path: '/page-thank-you',
      name: 'page-thank-you',
      component: PageThankYou
    }
  ]
})

export default router

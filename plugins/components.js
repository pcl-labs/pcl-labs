import Vue from 'vue'
import Page from '@/components/PostTypes/Page.vue'

/* Componets */
import Hero from '@/components/Sections/Hero.vue'
import Newsletter from '@/components/Sections/Newsletter.vue'
import ProjectOverview from '@/components/Sections/ProjectOverview.vue'
import LightFooter from '@/components/Global/LightFooter.vue'

Vue.component('page', Page)
Vue.component('hero', Hero)
Vue.component('newsletter', Newsletter)
Vue.component('project-overview', ProjectOverview)
Vue.component('light-footer', LightFooter)

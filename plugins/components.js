import Vue from 'vue'
import Page from '@/components/PostTypes/Page.vue'
import Project from '@/components/PostTypes/Project.vue'

/* Componets */
import Hero from '@/components/Sections/Hero.vue'
import Newsletter from '@/components/Sections/Newsletter.vue'
import ProjectOverview from '@/components/Sections/ProjectOverview.vue'
import ProjectsAllContainer from '@/components/Sections/ProjectsAllContainer.vue'
import ProjectBeforeAfter from '@/components/Sections/ProjectBeforeAfter.vue'
import Markdown from '@/components/Sections/Markdown.vue'
import ContactForm from '@/components/Sections/ContactForm.vue'
import ProjectsSelectContainer from '@/components/Sections/ProjectsSelectContainer.vue'
import ProjectsCard from '@/components/Sections/ProjectsCard.vue'
import LightFooter from '@/components/Global/LightFooter.vue'

Vue.component('page', Page)
Vue.component('project', Project)
Vue.component('hero', Hero)
Vue.component('newsletter', Newsletter)
Vue.component('contact-form', ContactForm)
Vue.component('project-overview', ProjectOverview)
Vue.component('projects-select-container', ProjectsSelectContainer)
Vue.component('projects-all-container', ProjectsAllContainer)
Vue.component('project-before-after', ProjectBeforeAfter)
Vue.component('markdown', Markdown)
Vue.component('projects-card', ProjectsCard)
Vue.component('light-footer', LightFooter)

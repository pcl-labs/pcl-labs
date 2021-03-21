<template>
  <div
    class="antialiased bg-white text-gray-900 font-sans mt-12 max-w-lg mx-auto grid md:grid-cols-3 md:max-w-none lg:grid-cols-4"
  >
    <div
      class="flex flex-col pb-5"
      :key="index"
      v-for="(project, index) in blok.projects"
    >
      <center>
        <projects-card :blok="project" class="w-10/12" />
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlokProjectsAllContainer',
  props: ['blok'],
}
</script>

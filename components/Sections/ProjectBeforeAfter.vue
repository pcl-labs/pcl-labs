<template>
  <div
    class="container flex flex-wrap justify-between px-10 mx-auto space-x-10 md:flex-nowrap"
  >
    <div>
      <h2 class="text-2xl font-bold text-center">Before</h2>
      <img
        class="object-cover w-full h-full"
        :src="blok.before.filename"
        :alt="blok.before.name"
      />
    </div>
    <div>
      <h2 class="text-2xl font-bold text-center">After</h2>
      <img
        class="object-cover w-full h-full"
        :src="blok.after.filename"
        :alt="blok.after.name"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlokProjectBeforeAfter',
  props: ['blok'],
}
</script>

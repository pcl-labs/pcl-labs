<template>
  <div
    v-editable="blok"
    class="container grid justify-between grid-cols-1 gap-8 px-10 mx-auto"
  >
    <div class="flex-1">
      <h2 class="text-2xl font-bold text-center">Before</h2>
      <img
        class="object-cover w-full h-full"
        :src="blok.before.filename"
        :alt="blok.before.name"
      />
    </div>
    <div class="flex-1">
      <h2 class="text-2xl font-bold text-center">After</h2>
      <video v-if="blok.after_video" width="1080" height="3000" controls>
        <source :src="blok.after_video.filename" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlokProjectBeforeAfterVideo',
  props: ['blok'],
}
</script>

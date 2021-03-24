<template>
  <div
    v-editable="blok"
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
        v-if="blok.after_image"
        class="object-cover w-full h-full"
        :src="blok.after_image.filename"
        :alt="blok.after_image.name"
      />
      <video v-if="blok.after_video" width="320" height="240" controls>
        <source :src="blok.after_video.filename" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlokProjectBeforeAfterImage',
  props: ['blok'],
}
</script>

<template>
  <div
    v-editable="blok"
    v-html="$md.render(blok.body)"
    class="relative items-center justify-center w-full h-auto p-4 mx-auto prose bg-white justify-left lg:prose-xl max-w-7xl"
  />
</template>

<script>
export default {
  name: 'BlokMarkdown',
  props: ['blok'],
}
</script>

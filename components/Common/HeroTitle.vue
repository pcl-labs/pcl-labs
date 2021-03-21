<template>
  <div v-editable="blok">
    <h1
      class="z-10 m-0 font-sans text-5xl font-bold leading-none text-gray-900 lg:text-6xl lg:leading-none"
    >
      Tired of having a
      <span
        class="relative z-10 text-6xl bg-no-repeat"
        style="
          line-height: 0px;
          background-size: 100% 10px;
          background-position: 0px 88%;
          background-image: linear-gradient(
            120deg,
            rgb(246, 173, 85) 0%,
            rgb(246, 173, 85) 100%
          );
        "
        >painfully slow</span
      >
      website?
    </h1>
  </div>
</template>

<script>
export default {
  name: 'BlokHeroTitle',
  props: ['blok'],
}
</script>

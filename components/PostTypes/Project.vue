<template>
  <div class="page">
    <div
      class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"
    >
      <div class="flex-none">
        <button @click="back()" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current text-success"
          >
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
          </svg>
        </button>
      </div>
      <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold"> Project </span>
      </div>
    </div>
    <component
      :key="blok._uid"
      v-for="blok in blok.overview"
      :blok="blok"
      :is="blok.component"
    ></component>
    <component
      :key="blok._uid"
      v-for="blok in blok.body"
      :blok="blok"
      :is="blok.component"
    ></component>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>

<template>
  <div>
    <div class="relative mt-10 sm:mt-32 sm:py-16">
      <div aria-hidden="true" class="hidden sm:block">
        <div
          class="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl"
        ></div>
        <svg
          class="absolute -ml-3 top-8 left-1/2"
          width="404"
          height="392"
          fill="none"
          viewBox="0 0 404 392"
        >
          <defs>
            <pattern
              id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="392"
            fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
          />
        </svg>
      </div>
      <div
        class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <div
          class="relative px-6 py-10 overflow-hidden bg-blue-500 shadow-xl rounded-2xl sm:px-12 sm:py-20"
        >
          <div
            aria-hidden="true"
            class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
          >
            <svg
              class="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                class="text-blue-400 text-opacity-40"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                class="text-blue-600 text-opacity-40"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </div>
          <div class="relative">
            <div class="sm:text-center">
              <h2
                class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                {{ blok.title }}
              </h2>
              <p class="max-w-2xl mx-auto mt-6 text-lg text-blue-100">
                {{ blok.body }}
              </p>
            </div>
            <form action="#" class="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
              <div class="flex-1 min-w-0">
                <label for="cta_email" class="sr-only">Email address</label>
                <input
                  type="email"
                  name="email"
                  aria-label="Email"
                  v-model="form.email"
                  class="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  @click.prevent="submit"
                  class="block w-full px-5 py-3 text-base font-medium text-white bg-gray-900 border border-transparent rounded-md shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10"
                >
                  {{ blok.cta }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="formSubmitted" class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
        >&#8203;
        <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
        <div
          class="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div
              class="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full"
            >
              <!-- Heroicon name: check -->
              <svg
                class="w-6 h-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                class="text-lg font-medium leading-6 text-gray-900"
                id="modal-headline"
              >
                You wont regret this! I promise!
              </h3>
              <div class="mt-2">
                <!-- <p class="text-sm leading-5 text-gray-500">
                  You submitted {{ form }}
                </p> -->
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <span class="flex w-full shadow-sm">
              <button type="button" class="btn btn-primary" @click="closeModal">
                Go Back
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlokNewsletter',
  props: ['blok'],
  data() {
    return {
      formSubmitted: false,
      form: {
        email: null,
      },
    }
  },
  methods: {
    submit() {
      this.$axios
        .$post(
          'https://paulchrisluke.com/.netlify/functions/newsletter',
          this.form
        )
        .then((response) => {
          console.log(response)
          this.formSubmitted = true
          return true
        })
        .catch((error) => {
          if (this.$axios.isCancel(error)) {
            console.log('Request canceled', error)
          } else {
            // handle error
          }
        })
    },
    closeModal() {
      this.formSubmitted = false
      this.form = {
        email: null,
      }
    },
  },
}
</script>

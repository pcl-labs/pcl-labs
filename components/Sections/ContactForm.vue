<template>
  <div class="px-6 bg-white md:px-30 lg:px-40 xl:px-64">
    <center>
      <h1
        class="py-10 mt-5 mb-10 text-5xl font-medium uppercase md:mb-20 md:mt-10 md:text-7xl font-heron-sans"
      >
        GET IN TOUCH
      </h1>
    </center>
    <h3
      class="mb-10 text-2xl font-medium tracking-tight uppercase md:mb-16 text-md font-heron-sans"
    >
      Write Us An Email
    </h3>
    <div class="flex justify-center mb-5 md:mb-20">
      <div class="w-full max-w-full">
        <form class="pt-6 pb-8 mb-4 space-y-10" name="contact">
          <input
            class="w-full px-0 pb-5 mr-3 leading-tight text-gray-700 bg-transparent border-b appearance-none focus:outline-none focus:border-black"
            type="text"
            placeholder="Name"
            aria-label="Full name"
            v-model="form.name"
            name="name"
          />
          <input
            class="w-full px-0 pb-5 mr-3 leading-tight text-gray-700 bg-transparent border-b appearance-none focus:outline-none focus:border-black"
            type="text"
            placeholder="Email Address"
            aria-label="Email"
            v-model="form.email"
            name="email"
            required
          />
          <input
            class="w-full px-0 pb-5 mr-3 leading-tight text-gray-700 bg-transparent border-b appearance-none focus:outline-none focus:border-black"
            type="tel"
            placeholder="Phone Number"
            aria-label="Phone"
            v-model="form.phone"
            inputmode="numeric"
            pattern="[0-9]*"
            name="phone"
            required
          />
          <textarea
            class="w-full px-0 pb-5 mr-3 leading-tight text-gray-700 bg-transparent border-b appearance-none resize-none focus:outline-none focus:border-black"
            type="text"
            rows="10"
            placeholder="How can we help you?"
            aria-label="Help"
            v-model="form.message"
            name="message"
          />
          <div class="flex items-center justify-between">
            <button
              class="btn btn-primary"
              type="submit"
              @click.prevent="submit"
            >
              Send Email
            </button>
          </div>
        </form>
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
                We will be in touch soon!
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
  name: 'ContactForm',
  props: ['blok'],
  data() {
    return {
      formSubmitted: false,
      form: {
        name: null,
        email: null,
        phone: null,
        message: null,
        event: null,
      },
    }
  },
  methods: {
    submit() {
      this.$axios
        .$post(
          'https://paulchrisluke.com/.netlify/functions/mail-send',
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
        name: null,
        email: null,
        phone: null,
        message: null,
        event: null,
      }
    },
  },
}
</script>

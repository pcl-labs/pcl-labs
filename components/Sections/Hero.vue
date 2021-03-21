<template>
  <div class="leading-6 text-black" v-editable="blok">
    <div
      class="relative mx-4 mt-6 text-black bg-blue-100 bg-indigo-100 lg:mx-6"
      style="border-radius: 16px"
    >
      <div class="flex relative justify-between items-center py-6 px-8">
        <nuxt-link to="/" aria-current="page" class="cursor-pointer"
          ><svg
            width="476"
            height="74"
            viewBox="0 0 476 74"
            fill="none"
            class="block z-20 w-5/6 h-auto align-middle"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g filter="url(#filter0_dd)">
              <path
                d="M28.528 71V2.84H57.616C60.88 2.84 63.856 3.512 66.544 4.856C69.296 6.2 71.632 7.96 73.552 10.136C75.536 12.312 77.072 14.776 78.16 17.528C79.312 20.28 79.888 23.064 79.888 25.88C79.888 28.888 79.344 31.768 78.256 34.52C77.232 37.272 75.76 39.736 73.84 41.912C71.984 44.088 69.712 45.816 67.024 47.096C64.336 48.376 61.36 49.016 58.096 49.016H44.272V71H28.528ZM44.272 35.288H57.136C58.992 35.288 60.592 34.488 61.936 32.888C63.28 31.288 63.952 28.952 63.952 25.88C63.952 24.28 63.728 22.904 63.28 21.752C62.896 20.6 62.352 19.64 61.648 18.872C60.944 18.104 60.144 17.56 59.248 17.24C58.352 16.856 57.456 16.664 56.56 16.664H44.272V35.288ZM84.4045 36.344C84.4045 32.248 85.1725 28.184 86.7085 24.152C88.2445 20.056 90.4845 16.408 93.4285 13.208C96.3725 10.008 99.9565 7.416 104.181 5.432C108.405 3.448 113.205 2.456 118.581 2.456C124.981 2.456 130.517 3.832 135.189 6.584C139.925 9.336 143.445 12.92 145.749 17.336L133.653 25.784C132.885 23.992 131.892 22.52 130.677 21.368C129.525 20.152 128.245 19.192 126.837 18.488C125.429 17.72 123.989 17.208 122.517 16.952C121.045 16.632 119.605 16.472 118.197 16.472C115.189 16.472 112.565 17.08 110.325 18.296C108.085 19.512 106.229 21.08 104.757 23C103.285 24.92 102.197 27.096 101.493 29.528C100.789 31.96 100.437 34.424 100.437 36.92C100.437 39.608 100.853 42.2 101.685 44.696C102.517 47.192 103.701 49.4 105.237 51.32C106.837 53.24 108.725 54.776 110.901 55.928C113.141 57.016 115.637 57.56 118.389 57.56C119.797 57.56 121.237 57.4 122.709 57.08C124.245 56.696 125.685 56.152 127.029 55.448C128.437 54.68 129.717 53.72 130.869 52.568C132.021 51.352 132.949 49.88 133.653 48.152L146.517 55.736C145.493 58.232 143.957 60.472 141.909 62.456C139.925 64.44 137.621 66.104 134.997 67.448C132.373 68.792 129.589 69.816 126.645 70.52C123.701 71.224 120.821 71.576 118.005 71.576C113.077 71.576 108.533 70.584 104.373 68.6C100.277 66.552 96.7245 63.864 93.7165 60.536C90.7725 57.208 88.4685 53.432 86.8045 49.208C85.2045 44.984 84.4045 40.696 84.4045 36.344ZM154.434 71V2.84H170.178V57.176H203.202V71H154.434ZM230.372 71V2.84H246.116V57.176H279.14V71H230.372ZM305.056 2.84H319.264L344.128 71H328L322.72 55.736H301.504L296.32 71H280.192L305.056 2.84ZM320.128 44.888L312.16 20.792L304 44.888H320.128ZM407.193 53.528C407.193 56.472 406.585 59.032 405.369 61.208C404.153 63.384 402.489 65.208 400.377 66.68C398.265 68.088 395.801 69.176 392.985 69.944C390.169 70.648 387.193 71 384.057 71H350.841V2.84H388.761C391.129 2.84 393.273 3.352 395.193 4.376C397.113 5.4 398.745 6.744 400.089 8.408C401.433 10.008 402.457 11.864 403.161 13.976C403.929 16.024 404.312 18.136 404.312 20.312C404.312 23.576 403.481 26.648 401.817 29.528C400.217 32.408 397.785 34.584 394.521 36.056C398.425 37.208 401.497 39.256 403.737 42.2C406.041 45.144 407.193 48.92 407.193 53.528ZM391.161 50.36C391.161 48.248 390.553 46.456 389.337 44.984C388.121 43.512 386.585 42.776 384.729 42.776H366.585V57.656H384.057C386.105 57.656 387.801 56.984 389.145 55.64C390.489 54.296 391.161 52.536 391.161 50.36ZM366.585 16.28V30.392H382.041C383.769 30.392 385.305 29.816 386.649 28.664C387.993 27.512 388.665 25.72 388.665 23.288C388.665 21.048 388.057 19.32 386.841 18.104C385.689 16.888 384.281 16.28 382.617 16.28H366.585ZM457.362 22.808C457.17 22.552 456.498 22.072 455.346 21.368C454.194 20.664 452.754 19.928 451.026 19.16C449.298 18.392 447.41 17.72 445.362 17.144C443.314 16.568 441.266 16.28 439.218 16.28C433.586 16.28 430.77 18.168 430.77 21.944C430.77 23.096 431.058 24.056 431.634 24.824C432.274 25.592 433.17 26.296 434.322 26.936C435.538 27.512 437.042 28.056 438.834 28.568C440.626 29.08 442.706 29.656 445.074 30.296C448.338 31.192 451.282 32.184 453.906 33.272C456.53 34.296 458.738 35.608 460.53 37.208C462.386 38.744 463.794 40.632 464.754 42.872C465.778 45.112 466.29 47.8 466.29 50.936C466.29 54.776 465.554 58.04 464.082 60.728C462.674 63.352 460.786 65.496 458.417 67.16C456.05 68.76 453.33 69.944 450.258 70.712C447.186 71.416 444.018 71.768 440.754 71.768C438.258 71.768 435.698 71.576 433.074 71.192C430.45 70.808 427.89 70.264 425.394 69.56C422.898 68.792 420.466 67.896 418.098 66.872C415.794 65.848 413.65 64.664 411.666 63.32L418.578 49.592C418.834 49.912 419.666 50.52 421.074 51.416C422.482 52.312 424.21 53.208 426.258 54.104C428.37 55 430.706 55.8 433.266 56.504C435.826 57.208 438.418 57.56 441.042 57.56C446.61 57.56 449.394 55.864 449.394 52.472C449.394 51.192 448.978 50.136 448.146 49.304C447.314 48.472 446.162 47.736 444.69 47.096C443.218 46.392 441.458 45.752 439.41 45.176C437.426 44.6 435.25 43.96 432.882 43.256C429.746 42.296 427.026 41.272 424.722 40.184C422.418 39.032 420.498 37.72 418.962 36.248C417.49 34.776 416.37 33.08 415.602 31.16C414.898 29.24 414.546 27 414.546 24.44C414.546 20.856 415.218 17.688 416.562 14.936C417.906 12.184 419.73 9.88 422.034 8.024C424.338 6.104 426.994 4.664 430.002 3.704C433.074 2.744 436.306 2.264 439.698 2.264C442.066 2.264 444.402 2.488 446.706 2.936C449.01 3.384 451.218 3.96 453.33 4.664C455.442 5.368 457.394 6.168 459.186 7.064C461.042 7.96 462.738 8.856 464.274 9.752L457.362 22.808Z"
                fill="#333333"
              />
            </g>
            <rect x="30" y="14" width="446" height="4" fill="url(#pattern0)" />
            <defs>
              <filter
                id="filter0_dd"
                x="23.528"
                y="0.763977"
                width="447.762"
                height="72.504"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="4" dy="0.5" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.866667 0 0 0 0 0.0156863 0 0 0 0 0.866667 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="-4" dy="-0.5" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow"
                  result="effect2_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow"
                  result="shape"
                />
              </filter>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlink:href="#image0" transform="scale(0.00224215 0.25)" />
              </pattern>
              <image
                id="image0"
                width="446"
                height="4"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb4AAAAECAYAAADxq1pOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVTSURBVHgB3VlraFtVHP+fc5ObNI8maUzjVmsTKtQ2K5baOUW03YYgOucXG3SM4fDDYP002QcdSIOCwj6OVXCo+9YPwxe2myKydijK7IattQ+6Fkk70trH+kjSRx737//cm3RtEcTmZpD84H/vycnJPff8n79zwgDRAAAfkbxNwklg76VLsIekUFEXq4PQREhtI2JUQum9BWXh4yZoSm4biCjR9RADuIAANdRmorv67Flw9vZCMcCatsL5sfPg2fAgrS5F8rlcIp+rXH5kmb7+gBb8rhhH6wdfKITu7m4Gu0THSAd4Eh7xMPG4ec540J/y90IxANFO14skx0HzE6aLvjS7iGdMSSC96Uv5rkMhQcsfbSQfkpSQMMvYGNQeOwb5QOtMKwT/DiK5GGPIFsnT3vEr/s9IhWnIBYjCBq+SfEJSLnpMkQjbd/QoFBNOT52Gg4sHRV4UcTqHEp6qTlR/Q/pDdYDm52dIGWeowym68mnPfCEQC0D7RLv2QeQjDpPGpPFEJVT+JNbKt4zNBjAiFDaGbcOqCFDytaV5+nWvyVu1c5xM+qHb+6Loscz6RdEvlqInEJfi0FHZAZnkaiQXCCbXkm9cPklt0Lx9i713ncS3geYiUJVNQZGC7bjv8iFMK3oii1M7DWl99P9g4SZ5nsREQlYHLO/shHzhmuealrQJClPs5GcH+qHfDjqCaSFRiLb4Twxbhzf1hwxdoMCT4zAuax1q8feSHKYRjuxv8mnPfEEQpCzIR1Y58s5VWP09W+AFWxPbPFRgyzjIDU3LT4FVsahtUjKmeDKaZKm1+zMAS5g5WykzGGb3mE1zFUaTsjLLS+6MMSkaBT1wxXsFQrGQmlM48PpEMvHKLbh1MbvrcyC6aMtzipqN6nuS2G/fzutOt2rNB751H5iYFcBsSy+WYSJSKSUj1gVTYn3OwKfGOa1f94ATJGDINqSyIIKLdHLyiS8me/jlR8nvdQxyLYGrN0GymEGtfsUEXTmhqi4BNRpVnRUi56wlaSCRsh0ijvIFQeSEP9fF64TaDAoozU6Ds4H8rBd0ANOIvy7xEIgH4LWZ1gy5QSXBk5GYITZIUyRpEi3P8kwAZiZOUl6c9Rrl/udK3TdfcPmjpg0XEXFmI52apqchV/Q5+oDdpddRqMoxilBkDYpNcUAMZrW3UUlMPWR0QLteoFMN0APi9Gn/yn7wrflQ5jYwlXjWl0oxOl4Vj45Wb/Bpy4Idw4N2OfyXnEsebLnXIk79MEPARQkawRR+VQM1sewYtfAp2iJFFDI9Iu/I/EvaxKo9mSh4F2imH2hyVJNhZuqIVzH89pjV9unx0qfv1MsnFAkq3F1doviwXI0sgiNcElaVTB8tyDHoNXq7YAPGxfEMaeAI9QtaoLIdAxVcOroCvSGKDRkCyeCMDJ8mI8yTMUbTHH9VjHx0MCXNfPmWW/7lkLlmei87bJwYOWAdGHASy2J6OHoWYXMYAtFAdodRY1eUZkNK4QkD1zXYN5M5QUpJhX54sBMsc9FHX3j/LgIUCm2XgWiiTPksvfjD2aU4enqYrKPf/hv6nH1MFL4MZaug6zPkdz+Ta+tFs9Qn5+q8dIxN8V+nMkGiNQq9648sydrNYF7VJkGMQ5xosHXbVOweY98+rpiuN3pfXHrIeG6ppcUvUwGiv2DUY+RcIIhDnMcpIVqyvlabjqXL6C4Kn9itCBJjz/g4OG/cyNknxd8fbZNtKlkBbS8UJ38foA1J9wakb8buypPflTP+/ctljj/3GRtjLmOzZWiwqWTwD5/76lX5/645OBPc1CcV+CjN9bUFLCNsi0n/AY/ILPCP6uOEAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
        </nuxt-link>

        <div class="space-x-0 space-y-8 lg:space-x-8">
          <nuxt-link to="/projects">
            <button class="btn btn-primary min-w-full md:min-w-0">
              Projects
            </button>
          </nuxt-link>
          <nuxt-link to="/contact">
            <button class="mt-2 btn min-w-full md:min-w-0">Contact</button>
          </nuxt-link>
        </div>
      </div>
      <section class="relative">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="lg:col-span-6 px-4"
            :class="{ 'py-16': blok.youtube_link, 'py-4': !blok.youtube_link }"
          >
            <div class="">
              <h1
                class="z-10 m-0 font-sans text-5xl font-bold leading-none text-gray-900 lg:text-6xl lg:leading-none mark"
              >
                {{ blok.h1_pre }}
                <mark class="text-6xl"> {{ blok.h1_middle }} </mark>
                {{ blok.h1_end }}
              </h1>
            </div>
            <div class="py-16">
              <p class="m-0 font-sans text-lg leading-7 text-gray-700">
                {{ blok.body }}
              </p>
            </div>
            <nuxt-link v-if="blok.cta" class="p-8" to="/contact">
              <button class="btn btn-primary btn-wide btn-lg">
                {{ blok.cta }}
              </button>
            </nuxt-link>
          </div>
          <div v-if="blok.youtube_link" class="lg:col-span-6 p-8">
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                :src="blok.youtube_link"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlokHero',
  props: ['blok'],
}
</script>

<style scoped>
mark {
  background-color: transparent;
  /* border-bottom: .1em solid #e6fc88; */
  box-shadow: inset 0 -0.3em 0 0 #f14eb3;
}
</style>

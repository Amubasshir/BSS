<script setup>
import { ref } from 'vue';

const navbar = ref('');
const showMenu = ref(false);
</script>

<script>
export default {
  data() {
    return {
      shouldScaleLogo: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const scrollThreshold = 100;

      this.shouldScaleLogo = scrollTop > scrollThreshold;
    },
  },
};
</script>

<style scoped>
.scaled-down {
  transform: scale(0.8);
  transition: transform 0.3s ease;
}
</style>

<template>
  <nav
    ref="navbar"
    class="fixed top-0 left-0 w-full shadow-lg bg-white z-20 transition duration-200"
  >
    <div class="container flex items-center justify-between h-20">
      <div
        class="w-[100px] h-[48px]"
        :class="{ 'scaled-down': shouldScaleLogo }"
      >
        <img
          src="https://www.bssoln.com/img/brand-logo.png"
          alt="logo-image"
          class="w-full h-full cursor-pointer"
        />
      </div>
      <div class="flex lg:hidden items-center gap-2">
        <button
          @click="showMenu = !showMenu"
          class="relative z-30 text-black -mt-2 p-2 bg-primary-200 rounded-sm"
        >
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div
        class="absolute lg:static top-20 inset-x-0 flex flex-col lg:flex-row items-center gap-5 lg:gap-10 bg-transparent pt-5 pb-10 px-5 lg:p-0 transition duration-500 lg:duration-200 lg:-translate-y-0"
        :class="!showMenu ? 'translate-y-[-150%]' : '-translate-y-0'"
      >
        <a
          @click="showMenu = false"
          class="text-black text-sm tracking-tighter font-semibold"
          href="#about"
          >About</a
        >
        <a
          @click="showMenu = false"
          class="text-black text-sm tracking-tighter font-semibold"
          href="#solutions"
          >Solutions</a
        >
        <a
          @click="showMenu = false"
          class="text-black text-sm tracking-tighter font-semibold"
          href="#hire-a-developer"
          >Hire A Developer</a
        >
        <a
          @click="showMenu = false"
          class="text-black text-sm tracking-tighter font-semibold"
          href="#team"
          >Team</a
        >
        <a
          @click="showMenu = false"
          class="text-black text-sm tracking-tighter font-semibold"
          href="#remote-talent"
          >Remote Talent</a
        >
        <button
          class="hidden md:block px-10 py-[14px] rounded-full text-white font-medium text-sm uppercase bg-primary-200 hover:bg-primary-100 transition-colors duration-300 w-full lg:w-auto"
        >
          Hire Remote Talent
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.scaled-down {
  transform: scale(0.8); /* Adjust the scale factor as desired */
  transition: transform 0.3s ease; /* Adjust the transition duration and easing as desired */
}
</style>

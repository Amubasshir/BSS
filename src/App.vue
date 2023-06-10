<script setup>
import About from './components/About.vue';
import Clients from './components/Clients.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import Partnership from './components/Partnership.vue';
import Solutions from './components/Solutions.vue';
import Technologies from './components/Technologies.vue';
</script>

<template>
  <div class="overflow-x-hidden">
    <Navbar />
    <Hero />
    <Partnership />
    <About />
    <Solutions />
    <Technologies />
    <Clients />
  </div>
</template>

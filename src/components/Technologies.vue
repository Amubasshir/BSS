<template>
  <section class="py-10">
    <div class="container grid grid-cols-2 gap-2">
      <div class="left flex flex-col items-start justify-center">
        <h1 class="text-5xl font-bold tracking-tighter pb-10">
          Technologies we use
        </h1>
        <p class="text-gray-500 text-3xl leading-[48px] w-[500px] font-thin">
          we follow the Agile Software Development methodology, which refers to
          a group of software development methodologies that are based on
          similar principles.
        </p>
      </div>
      <div class="right">
        <img src="../assets/bss.png" alt="" class="scaling-image" />
      </div>
    </div>
  </section>
</template>

<style>
/* Add animation styles */
@keyframes zooming {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Apply animation to the image */
.scaling-image {
  animation: zooming 3s infinite alternate;
}
</style>

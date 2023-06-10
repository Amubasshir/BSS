<template>
  <section id="about" class="py-10">
    <div class="container grid grid-cols-2 gap-2">
      <div class="left">
        <div class="image-container">
          <img
            src="../assets/office.jpg"
            alt=""
            class="img-transition rounded-md"
          />
        </div>
      </div>
      <div class="right flex flex-col pl-10">
        <div class="mt-[-40px] pb-5">
          <h2 class="text-3xl tracking-tighter font-bold">About</h2>
          <h2 class="text-2xl font-thin text-gray-500">Who We Are</h2>
        </div>
        <p class="text-sm font-normal leading-7 tracking-wide pb-8">
          BSS started its journey in 2015 with an aim of building an efficient
          team and a remunerative system. BSS aims to collaborate with the
          clients to achieve their strategic objectives while creating long-term
          business value through the delivery and management of their marketing
          process to become an integral part of their success. Within a very
          short time, Bangladesh Software Solution has started to draw attention
          from valuable customers with its enhancement in quality services and
          has grown as one of the top software companies in Bangladesh by
          believing in minimizing the effort from the client and maximizing the
          value of services delivered....
        </p>
        <button
          class="btn bg-transparent hover:bg-[#3181C1] hover:text-white transition-all duration-300 border-2 border-[#3181C1] text-[#3181C1] text-base font-semibold rounded-full px-10 py-3 block"
          style="width: fit-content"
        >
          Our Major Projects
        </button>
      </div>
    </div>
  </section>
</template>

<style>
.image-container {
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}

.img-transition {
  transition: cubic-bezier(0.39, 0.66, 0.42, 0.99) all 2s;
  transform: scale(1);
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.img-transition:hover {
  transform: scale(1.1);
}
</style>

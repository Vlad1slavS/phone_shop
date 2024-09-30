<script setup>
import HelloWorld from './components/header.vue'
</script>

<template>
  <div class="container w-full">
    <header class="bg-[#A5D364] h-16 flex items-center">
      <img class="h-10 w-10 mr-2" src="./assets/battery.svg" alt="">
      <h1 class="text-3xl font-bold text-white">СОТКА</h1>
    </header>
    <HelloWorld />
  </div>

</template>

<style scoped></style>

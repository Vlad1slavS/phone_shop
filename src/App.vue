<script setup>
import HelloWorld from './components/header.vue'
</script>

<template>
  <div class="container w-full">
    <header class="bg-[#64A4D3] h-16 flex items-center px-4 justify-center">
      <img class="h-10 w-10 mr-2" src="./assets/battery.svg" alt="">
      <h1 class="text-3xl font-bold text-white">СОТКА</h1>
    </header>
    <div class="grid grid-cols-2 gap-2 justify-center mt-16">
      <div class="category_item flex flex-col items-center">
        <img class="w-64" src="./assets/category_iphones.jpg" alt="">
        <a class=" uppercase" href="">Iphone</a>
      </div>
      <div class="category_item flex flex-col items-center">
        <img class="w-64" src="./assets/mac_category.jpg" alt="">
        <a href="">Macbooks</a>
      </div>
      <div class="category_item flex flex-col items-center">
        <img class="w-64" src="./assets/category_iphones.jpg" alt="">
        <a href="">Iphone</a>
      </div>
      <div class="category_item flex flex-col items-center">
        <img class="w-64" src="./assets/category_iphones.jpg" alt="">
        <a href="">Iphone</a>
      </div>
    </div>

    <button class="bg-[#64A4D3] w-full h-12 font-bold items-center px-4 text-white rounded-2xl">КОРЗИНА</button>
  </div>

</template>

<style scoped></style>

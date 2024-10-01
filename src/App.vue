<script>
import CategoryCart from './components/category_cart.vue';

export default {
  components: {
    CategoryCart
  }
}
</script>

<template>
  <div class="container w-full">
    <header class="bg-[#F0E0CE] h-16 flex items-center px-4 justify-between mb-10">
      <div class="flex"> <img class="h-10 w-10 mr-2" src="./assets/battery.svg" alt="">
        <h1 class="text-3xl font-bold text-white">СОТКА</h1>
      </div>
      <div>
        <img class="w-7 h-7 bg-white rounded-lg p-1" src="./assets/loop.svg" alt="">
      </div>
    </header>
    <div class="bg-[#e9e5b9] max-w-lg mx-auto flex justify-center items-center py-10  rounded-3xl">
      <div class="mr-10 text-center">
        <h1 class="text-3xl font-bold">Iphone 16</h1>
        <p class="text-lg">Еще больше возможностей</p>
      </div>
      <div>
        <img class="" src="./assets/iph16.png" alt="">
      </div>
    </div>
    <div class=" justify-center mt-16">
      <CategoryCart categoryName="Iphone" imageSrc='src/assets/category_iphones.jpg' />
      <CategoryCart categoryName="Macbooks" imageSrc='src/assets/mac_category.jpg' />
      <CategoryCart categoryName="AirPods" imageSrc='src/assets/airpods_category.jpg' />
      <CategoryCart categoryName="Аксесуары" imageSrc='src/assets/accessories_category.jpg' />
    </div>
    <button class="fixed bottom-0 left-0 bg-[#F0E0CE] w-full h-12 font-bold text-white rounded-2xl">
      КОРЗИНА
    </button>
  </div>

</template>



<style scoped></style>

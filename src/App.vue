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
    <header class="bg-[#64A4D3] h-16 flex items-center px-4 justify-center">
      <img class="h-10 w-10 mr-2" src="./assets/battery.svg" alt="">
      <h1 class="text-3xl font-bold text-white">СОТКА</h1>
    </header>
    <div class="grid grid-cols-2 gap-2 justify-center mt-16">
      <CategoryCart categoryName="Iphone" imageSrc='/src/assets/category_iphones.jpg' />
      <CategoryCart categoryName="Macbooks" imageSrc='/src/assets/mac_category.jpg' />
      <CategoryCart categoryName="AirPods" imageSrc='/src/assets/airpods_category.jpg' />
      <CategoryCart categoryName="Аксесуары" imageSrc='/src/assets/accessories_category.jpg' />
    </div>
    <button class="bg-[#64A4D3] w-full h-12 font-bold items-center px-4 text-white rounded-2xl">КОРЗИНА</button>
  </div>

</template>



<style scoped></style>

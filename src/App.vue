<script>
import CategoryCart from './components/category_cart.vue';
import Slider from './components/Slider.vue';

export default {
  components: {
    CategoryCart,
    Slider
  },
  data() {
    return {
      prod_list: [{
        title: "Iphone 16 pro max",
        image: "src/assets/iph16.png",
        price: 78120,
        categoryName: "Iphone"
      },
      {
        title: "Iphone 16 pro",
        image: "src/assets/iph16.png",
        price: 78120,
        categoryName: "Iphone"
      },
      {
        title: "Iphone 16",
        image: "src/assets/iph16.png",
        price: 78120,
        categoryName: "Iphone"
      },
      ]
    }
  }

}




</script>


<template>
  <div class="container w-full pt-4 px-2 max-w-[500px] overflow-hidden">
    <header class=" h-16 flex items-center justify-between mb-10">
      <div class="flex"> <img class="h-10 w-10 mr-2" src="./assets/battery.svg" alt="">
        <h1 class="text-3xl font-bold text-black">VOL'T</h1>
      </div>
      <div>
        <img class="w-8 h-8 bg-black rounded-lg p-2 " src="./assets/loop.svg" alt="">
      </div>
    </header>
    <h1 class="text-3xl font-bold text-center mb-6">Что нового?</h1>
    <div class="justify-center">
      <div class="bg-black max-w-md mx-auto flex justify-between px-3  items-center py-10 rounded-2xl mb-11">
        <div class=" text-white">
          <h2 class="inline-block text-3xl font-bold">Iphone 16</h2>
          <p class="text-left text-sm">Еще больше возможностей</p>
        </div>
        <div>
          <img class="h-28" src="./assets/iph16.png" alt="">
        </div>
      </div>
    </div>


    <!-- <Slider /> -->
    <div class="scrollbar_categories overflow-x-scroll whitespace-nowrap scrollbar-hide scrollbar-w">
      <div class="flex">
        <p class="font-bold text-lg text-white bg-slate-700 px-4 py-2 rounded-3xl mr-3">Iphone</p>
        <p class="text-lg text-white bg-slate-700 px-4 py-2 rounded-3xl mr-3">Macbook</p>
        <p class="text-lg text-white bg-slate-700 px-4 py-2 rounded-3xl mr-3">AirPods</p>
        <p class="text-lg text-white bg-slate-700 px-4 py-2 rounded-3xl mr-3">Аксесуары</p>
      </div>
    </div>



    <div class="justify-center mt-16 grid grid-cols-2 gap-2">
      <CategoryCart v-for="(item, index) in prod_list" :key="index" :name=item.title :price=item.price
        :imageSrc="item.image" />
    </div>
  </div>

</template>



<style scoped>
.scrollbar_categories {
  scrollbar-width: none;
}
</style>

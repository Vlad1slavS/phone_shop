<script setup>
import CategoryCart from './components/category_cart.vue';
import Slider from './components/Slider.vue';
import PhoneInfo from './components/phone_info.vue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const value1 = ref('');
// Объявление реактивных данных
const prod_list = [
  {
    title: "iPhone 16 pro max",
    image: "src/assets/iph16.png",
    price: 78120,
    categoryName: "Iphone",
    status: "В наличии"
  },
  {
    title: "iPhone 16 pro",
    image: "src/assets/iph16.png",
    price: 78120,
    categoryName: "Iphone",
    status: "Предзаказ"
  },
  {
    title: "iPhone 16",
    image: "src/assets/iph16.png",
    price: 78120,
    categoryName: "Iphone",
    status: "Предзаказ"
  },
  {
    title: "MacBook 13'' M1 pro max",
    image: "src/assets/iph16.png",
    price: 78120,
    categoryName: "Iphone",
    status: "Предзаказ"
  }
];
</script>


<template>
  <div class="container w-full pt-4 px-2 max-w-[500px] overflow-hidden">
    <PhoneInfo />
    <div class="">
      <header class=" h-16 flex items-center justify-center mb-10 ">
        <div class="flex"> <img class="h-10 w-10 mr-2" src="./assets/battery.svg" alt="">
          <h1 class="text-3xl font-bold text-black">VOL'T</h1>
        </div>
        <!-- <div>
        <img class="w-8 h-8 bg-black rounded-lg p-2 " src="./assets/loop.svg" alt="">
      </div> -->
      </header>
      <h1 class="text-3xl font-bold text-black text-center mb-6">Что нового?</h1>
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
          <img class="font-bold text-lg h-10 bg-[#F1F1F1] px-4 py-2 rounded-full mr-3" src="./assets/Filter.svg" alt="">
          <p class="font-bold text-lg text-black bg-[#F1F1F1] px-4 py-2 rounded-2xl mr-3">Iphone</p>
          <p class="text-lg text-black bg-[#F1F1F1]  px-4 py-2 rounded-2xl mr-3">Macbook</p>
          <p class="text-lg text-black bg-[#F1F1F1]  px-4 py-2 rounded-2xl mr-3">AirPods</p>
          <p class="text-lg text-black bg-[#F1F1F1]  px-4 py-2 rounded-2xl mr-3">Аксесуары</p>
        </div>
      </div>

      <div class="mt-8 mb-10 flex justify-center px-5">
        <IconField class="border-2 rounded-lg px-4 py-2">
          <InputIcon class="pi pi-search" />
          <InputText class=" active:outline-none active:border-0" v-model="value1" />
        </IconField>
      </div>


      <div class="justify-center grid grid-cols-2 gap-2 text-black">
        <CategoryCart v-for="(item, index) in prod_list" :key="index" :name="item.title" :price="item.price"
          :imageSrc="item.image" :prod_list="prod_list" />
      </div>
    </div>
  </div>

</template>



<style scoped>
.scrollbar_categories {
  scrollbar-width: none;
}
</style>

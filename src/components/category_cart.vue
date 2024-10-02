<template>
    <div class="category_item flex flex-col items-center mb-10 text-center">
        <a href=""><img class="h-36" :src="imageSrc" alt=""></a>
        <a href="" class="mt-2 mb-1 text-md leading-4">{{ name }}</a>
        <p class="font-bold text-md"><b class="font-normal">от</b> {{ price }} руб</p>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    imageSrc: String,
    price: Number
})
</script>
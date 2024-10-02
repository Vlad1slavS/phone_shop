<template>
    <div class="category_item flex flex-col items-center mb-10">
        <a href=""><img class="h-36" :src="imageSrc" alt=""></a>
        <a href="" class="mt-1 text-md">{{ name }}</a>
        <p class="font-bold text-md"><b class="font-normal">от</b> {{ price }} руб</p>
    </div>
</template>

<script>
export default {
    name: 'CategoryCart',
    props: {
        name: String,
        imageSrc: String,
        price: Number,
    }
}
</script>
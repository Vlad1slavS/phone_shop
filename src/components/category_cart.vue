<template>
    <div class="category_item flex flex-col items-center mb-10">
        <a href=""><img class="h-30" :src="imageSrc" alt=""></a>
        <a class="mt-1 text-xl mb-1">{{ categoryName }}</a>
        <p class="font-bold text-lg">{{ price }} руб</p>
    </div>
</template>

<script>
export default {
    name: 'CategoryCart',
    props: {
        categoryName: String,
        imageSrc: String,
        price: Number,
    }
}
</script>
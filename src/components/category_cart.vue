<template>
    <div class="category_item flex flex-col items-center">
        <a href=""><img class="w-64 h-30" :src="imageSrc" alt=""></a>
        <a class="mt-4">{{ categoryName }}</a>
    </div>
</template>

<script>
export default {
    name: 'CategoryCart',
    props: {
        categoryName: String,
        imageSrc: String,
    }
}
</script>
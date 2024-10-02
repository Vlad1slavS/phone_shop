<script>
export default {
    data() {
        return {
            images: ["src/assets/iph16.png", "src/assets/iph16.png", "src/assets/iph16.png"],
            currentIndex: 0
        }
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            console.log(this.currentIndex);
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        }
    }
}
</script>

<template>
    <div class="slider-container flex">
        <button><img @click="prevSlide" class="h-16" src="/src/assets/back_Arrow.svg" alt=""></button>
        <div class="slider">
            <img v-for="(image, index) in images" :key="index" :src="image" class="slide"
                :class="{ active: index === currentIndex }" alt="Image">
        </div>
        <button><img @click="nextSlide" class="h-16" src="/src/assets/forward_Arrow.svg" alt=""></button>
    </div>
</template>

<style scoped>
.slider-container {
    position: relative;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
}

.slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    min-width: 100%;
    transition: opacity 0.5s ease;
    opacity: 0;
    transform: scale(0.8);
}

.slide.active {
    opacity: 1;
    transform: scale(1);
}
</style>
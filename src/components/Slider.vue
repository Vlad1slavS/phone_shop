<template>
    <div class="bg-black max-w-md mx-auto rounded-2xl overflow-hidden items-center justify-center px-4">
        <transition name="slide">
            <div class="flex justify-center items-center py-10 text-white" :key="currentIndex">
                <div class="mr-10 text-center">
                    <h1 class="text-3xl font-bold">{{ currentSlide.title }}</h1>
                    <p class="text-lg">{{ currentSlide.description }}</p>
                </div>
                <div>
                    <img class="h-28" :src="currentSlide.image" alt="Image">
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                {
                    title: 'Iphone 16',
                    description: 'Еще больше возможностей',
                    image: 'src/assets/iph16.png',
                },
                {
                    title: 'Iphone 15',
                    description: 'Новый уровень технологий',
                    image: 'src/assets/iph16.png',
                },
                {
                    title: 'Iphone 14',
                    description: 'Лучший опыт использования',
                    image: 'src/assets/iph16.png',

                },
            ],
            currentIndex: 0,
            intervalId: null,
        };
    },
    computed: {
        currentSlide() {
            return this.slides[this.currentIndex];
        },
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        startAutoSlide() {
            this.intervalId = setInterval(() => {
                this.nextSlide();
            }, 2000);
        },
    },
    mounted() {
        this.startAutoSlide();
    },
    beforeUnmount() {
        clearInterval(this.intervalId);
    },
};
</script>

<style scoped>
.slide-enter-active {
    transition: all ease 0.6s;
}

.slide-enter {
    transform: translateX(100%);
}

.slide-leave-active {
    transition: all ease 0.6s;
    position: absolute;
    width: 100%;
}

.slide-leave-to {
    transform: translateX(-100%);
}
</style>
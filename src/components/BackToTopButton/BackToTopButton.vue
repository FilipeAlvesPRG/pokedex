<script>
export default {
    name: "BackToTopButton",
    data() {
        return {
            show: false,
        }
    },
    methods: {
        backToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                this.show = true;
            } else {
                this.show = false;
            }
        });
    },
    beforeDestroy() {
        window.removeEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                this.show = true;
            } else {
                this.show = false;
            }
        });
    },
}
</script>
<template>
    <div>
        <button v-if="show" class="back-to-top-button" @click="backToTop">
            <font-awesome-icon icon="fa-solid fa-arrow-up" />
        </button>
    </div>
</template>
<style lang="scss" src="./style.scss" scoped>

</style>
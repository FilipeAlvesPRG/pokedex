<script>
export default {
    name: "CardComponent",
    props: {
        pokemonName: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
    methods: {
        moreDetails() {
            this.$router.push({
                name: "Details",
                params: {
                    imageUrl: this.imageUrl,
                    name: this.pokemonName,
                    specie_id: this.index,
                    id: this.index,
                },
            });
        },
    },
}
</script>

<style src="./style.scss" lang="scss" scoped/>

<template>
    <div class="card-container">
        <div class="card">
            <div class="card-header">
                <div class="card-header-image">
                    <img class="pokemon-image" :src="imageUrl" alt="pokemon-image" />
                </div>
                <div class="card-pokemon-name">
                    <h2>{{ index }}. {{ pokemonName }}</h2>
                </div>
            </div>
            <a @click="moreDetails">Mais detalhes</a>
            <div class="card-stats">
            </div>
        </div>
    </div>

</template>
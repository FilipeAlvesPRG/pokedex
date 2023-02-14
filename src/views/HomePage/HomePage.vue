<script>
import SearchBarComponent from '../../components/SearchBar/SearchBarComponent.vue';
import CardComponent from '../../components/Card/CardComponent.vue';
import pokeApi from '../../services/pokeApi';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton.vue';

export default {
    name: "HomePage",
    components: {
        SearchBarComponent,
        CardComponent,
        BackToTopButton,
    },
    data() {
        return {
            pokemons: [],
            filteredPokemons: [],
            search: '',
        }
    },
    created: function () {
        pokeApi.get('pokemon?limit=151&offset=0')
            .then(response => {
                this.pokemons = response.data.results;
                this.filteredPokemons = response.data.results;
                console.log(response.data.results[0]);
            })
            .catch(error => {
                console.log(error);
            })
    },
    methods: {
        searchPokemons: function () {
            this.filteredPokemons = this.pokemons;
            if (this.search.trim().toLowerCase() === '') {
                this.filteredPokemons = this.pokemons;
            } else {
                this.filteredPokemons = this.pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(this.search.trim().toLowerCase()));
            }
        },
    }
}
</script>

<style lang="scss" src="./style.scss" scoped/>

<template>
    <img src="../../assets/pokemon-logo.png" alt="Pokemon Logo" class="pokemon-logo">

    <SearchBarComponent v-model="search" @update:modelValue="search = $event" />
    <button class=" search-button" @click=searchPokemons>
        <font-awesome-icon class="icon-button" icon="fa-solid fa-magnifying-glass" />
        Buscar
    </button>

    <div class="container-row">
        <div v-for="(pokemon, index) in filteredPokemons">
            <CardComponent :pokemonUrl="pokemon.url"
                :imageUrl="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[pokemon.url.split('/').length - 2]}.png`"
                :pokemonName="pokemon.name" :index="index + 1" :pokemonType="pokemon.type" />
        </div>
    </div>
    <BackToTopButton />
</template>
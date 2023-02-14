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
            showClearButton: false,
            types: [
                { name: 'normal', color: '#A8A878' },
                { name: 'fighting', color: '#C03028' },
                { name: 'flying', color: '#A890F0' },
                { name: 'poison', color: '#A040A0' },
                { name: 'ground', color: '#E0C068' },
                { name: 'rock', color: '#B8A038' },
                { name: 'bug', color: '#A8B820' },
                { name: 'ghost', color: '#705898' },
                { name: 'steel', color: '#B8B8D0' },
                { name: 'fire', color: '#F08030' },
                { name: 'water', color: '#6890F0' },
                { name: 'grass', color: '#78C850' },
                { name: 'electric', color: '#F8D030' },
                { name: 'psychic', color: '#F85888' },
                { name: 'ice', color: '#98D8D8' },
                { name: 'dragon', color: '#7038F8' },
                { name: 'dark', color: '#705848' },
                { name: 'fairy', color: '#EE99AC' },
                { name: 'unknown', color: '#68A090' },
                { name: 'shadow', color: '#493963' },
            ]
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
        selectType: function () {
            this.filteredPokemons = this.pokemons.filter((pokemon) => pokemon.type.includes(this.type));
        },
        searchPokemons: function () {
            this.filteredPokemons = this.pokemons;
            if (this.search.trim().toLowerCase() === '') {
                this.showClearButton = false;
                this.filteredPokemons = this.pokemons;
            } else {
                this.filteredPokemons = this.pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(this.search.trim().toLowerCase()));
                this.showClearButton = true;
            }
        },

        clearSearch: function () {
            this.search = '';
            this.filteredPokemons = this.pokemons;
            this.searchPokemons();
        }
    }
}
</script>

<style lang="scss" src="./style.scss" scoped/>

<template>
    <img src="../../assets/pokemon-logo.png" alt="Pokemon Logo" class="pokemon-logo">

    <SearchBarComponent v-model="search" @update:modelValue="search = $event" />

    <button v-if="showClearButton" class="clear-button" @click="clearSearch">
        <font-awesome-icon class="icon-button" icon="fa-solid fa-refresh" />
        Refresh</button>
    <button class=" search-button" @click=searchPokemons>
        <font-awesome-icon class="icon-button" icon="fa-solid fa-magnifying-glass" />
        Buscar
    </button>

    <select class="select-type">
        <option v-for="type in types" :value="type.name" :style="{ backgroundColor: type.color }">{{ type.name }}</option>
    </select>

    <div class="container-row">
        <div v-for="(pokemon, index) in filteredPokemons">
            <CardComponent :pokemonUrl="pokemon.url"
                :imageUrl="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[pokemon.url.split('/').length - 2]}.png`"
                :pokemonName="pokemon.name" :index="index + 1" :pokemonType="pokemon.type" />
        </div>
    </div>
    <BackToTopButton />
</template>
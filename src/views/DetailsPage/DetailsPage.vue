<template>
    <MoreDetails :pokemon="pokemon" />
</template>
<script>
import axios from "axios";
import MoreDetails from "../../components/MoreDetails/MoreDetails.vue";
import pokeApi from "../../services/pokeApi";


export default {
    name: "DetailsPage",
    components: {
        MoreDetails,
    },
    data() {
        return {
            pokemon: {},
        };
    },
    created: function () {
        pokeApi
            .get("https://pokeapi.co/api/v2/pokemon/" + this.$route.params.name)
            .then((response) => {
                this.pokemon = response.data;
                console.log(this.pokemon);
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>

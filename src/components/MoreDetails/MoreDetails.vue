<template>
	<div v-if="pokemon">
		<router-link class="back-button" to="/">
			<font-awesome-icon class="icon-button" icon="fa-solid fa-arrow-left" />
			Voltar
		</router-link>

		<img class="pokemon-details-image"
			:src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
			alt="pokemon-image" />

		<h1>{{ pokemon.name }}</h1>
		<div>
			<h2>Informações gerais</h2>
			<div class="information-container">
				<span>Altura: {{ pokemon.height / 10 }} m</span>
				<span>Peso: {{ pokemon.weight / 10 }} kg</span>
				<span>Base de experiencia: {{ pokemon.base_experience }} xp</span>
			</div>
		</div>

		<div>
			<h2>Tipo</h2>
			<div class="types">
				<div class="type" v-for="(value, index) in pokemon.types" :key="'value' + index"><span
						:class="value.type.name">
						{{ value.type.name }}
					</span>
				</div>
			</div>
		</div>

		<div v-if="pokemon.evolution_chain" class="section">
			<h2>Evolution Chain</h2>
			<span v-for="(name, index) in pokemon.evolution_chain" :key="name">
				<span v-if="index">-></span>
				{{ name }}
			</span>
		</div>

		<h2>Habilidade</h2>
		<div v-if="pokemon.abilities" class="pokemon-abilities-container">
			<div v-for="row in pokemon.abilities" :key="row.ability.name">
				{{ row.ability.name }}
			</div>
		</div>

		<h2>Movimentos</h2>
		<div v-if="pokemon.moves" class="pokemon-moves-container">

			<div v-for="row in pokemon.moves" :key="row.move.name">
				{{ row.move.name }}
			</div>
		</div>
	</div>
	<BackToTopButton />
</template>

<script>
import BackToTopButton from "../BackToTopButton/BackToTopButton.vue";
export default {
	components: {
		BackToTopButton,
	},
	name: "MoreDetails",
	props: {
		pokemon: {
			type: Object,
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
	},
};
</script>

<style src="./style.scss" lang="scss" scoped>

</style>

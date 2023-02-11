<script>
export default {
  name: 'SearchBarComponent',

  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <input class="search-bar" type="text" placeholder="Pesquise seu pokemon aqui" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" />
</template>

<style src="./style.scss" lang="scss" scoped/>
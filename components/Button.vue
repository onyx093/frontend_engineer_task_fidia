<template>
  <button class="bg-white text-black" >
    <slot />
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    name: {
      type: String,
      default: "Button"
    }
  }

}
</script>

<style scoped>
  button {
    @apply border rounded-lg py-2.5 px-4 text-sm font-medium;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-color: rgb(208, 213, 221);
  }
</style>

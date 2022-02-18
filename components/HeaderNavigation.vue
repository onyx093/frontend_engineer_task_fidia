<template>
  <nav class="mobile-nav" >
    <div class="brand">
      <BrandLogo />
      <p>Untitled UI</p>
    </div>
    <div class="menu-icon">
      <fa class="text-gray-500 text-xs" icon="bars" />
    </div>
  </nav>
</template>

<script>
import BrandLogo from "./BrandLogo.vue";
export default {
    components: { BrandLogo }
}
</script>

<style lang="scss" scoped>

  .mobile-nav {
    @apply h-16 w-full flex flex-row justify-between items-center static;
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
    padding: 11.5px 8px 12.5px 0;
  }
  .brand {
    @apply flex items-center text-2xl font-medium font-sans;
    color: rgb(16, 24, 40);

    p {
      @apply text-base font-medium;
    }
  }

  .menu-icon {
    @apply w-auto h-auto flex justify-center items-center;
    padding: 14px 11px;
  }
</style>

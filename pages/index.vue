<template>
  <div>
    <HeaderNavigation />
    <MainSection />
  </div>
</template>

<script>
import HeaderNavigation from "../components/HeaderNavigation.vue";
import MainSection from "../components/MainSection.vue";
export default {
    name: "IndexPage",
    components: { HeaderNavigation, MainSection }
}
</script>

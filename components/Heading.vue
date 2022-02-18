<template>
  <div class="heading">
    <div class="heading__greeting" ><p>Welcome, Olivia</p></div>
    <div class="heading__title" ><p>Track, manage and forecast your customers and orders.</p></div>
    <div class="heading__cta">
      <Button class="bg-white text-black" name="Import">
        <fa class="text-black pr-2" icon="cloud-arrow-up" size="lg" />
      </Button>
      <Button class="bg-purple-500 text-white" name="Add">
        <fa class="text-white pr-2" icon="plus" size="lg"/>
      </Button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .heading {
    @apply mx-4 py-8;

    .heading__greeting {
      @apply text-2xl w-full font-medium h-8 mb-1;
      color: rgb(16, 24, 40);
    }

    .heading__title {
      @apply text-base w-full font-normal;
      color: rgb(102, 112, 133);
    }

    .heading__cta {
      @apply pt-4;

      Button {
        @apply mr-2;
      }
    }
  }
</style>

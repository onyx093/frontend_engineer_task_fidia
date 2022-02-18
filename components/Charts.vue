<template>
  <div class="charts">
    <Card
      v-for="chart in charts"
      :key="chart.title"
      :title="chart.title"
      :count="chart.count"
      :arrow="chart.arrow"
      :percentage="chart.percentage"
      :isProgressive="chart.isProgressive"
      :class="chart.isProgressive ? 'text-green-500' : 'text-red-500'"
      />
    </div>
</template>

<script>
export default {
  data() {
    return {
      charts: [
        {
          title: "Total customers",
          count: 2420,
          arrow: "arrow-up",
          percentage: 40,
          isProgressive: true,
        },
        {
          title: "Members",
          count: 1210,
          arrow: "arrow-down",
          percentage: 10,
          isProgressive: false,
        },
        {
          title: "Active now",
          count: 316,
          arrow: "arrow-up",
          percentage: 20,
          isProgressive: true,
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
  .charts {
    @apply px-4;
  }
</style>

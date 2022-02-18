<template>
  <div class="card">
    <div class="card__heading">
      <span>{{ title }}</span>
      <span><fa class="text-gray-500" icon="ellipsis-vertical" size="lg" /></span>
    </div>

    <div class="card__body">
      <div class="left">
        <div class="count">
          <p>{{ count }}</p>
        </div>
        <div class="stats">
          <p>
            <fa v-bind="$attrs" :icon="arrow" />
            <span v-bind="$attrs" class="percentage" >{{ percentage }}%&nbsp;&nbsp;</span>
            <span class="prev-data" >vs last month</span>
          </p>
        </div>
      </div>
      <div class="right">
        <ProgressBar v-if="isProgressive" />
        <RegressBar v-else />
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import RegressBar from "./RegressBar.vue";
export default {
    props: {
        title: {
            type: String,
            default: "Total customers"
        },
        count: {
            type: Number,
            default: 2,
        },
        arrow: {
            type: String,
            default: "arrow-up",
        },
        percentage: {
            type: Number,
            default: 1.5,
        },
        isProgressive: {
            type: Boolean,
            default: true,
        },
    },
    components: { ProgressBar, RegressBar },
    inheritAttrs: false,
}
</script>

<style lang="scss" scoped>
  .card {
    @apply h-auto w-auto py-5 px-4 rounded-lg mb-5;
    border: 1px solid #EAECF0;
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);

    .card__heading {
      @apply flex justify-between;

      span {
        @apply text-base font-medium;
        color: rgb(16, 24, 40);

        &:first-child {
          width: 283px;
        }
      }
    }

    .card__body {
      @apply flex pt-5 space-x-4;

      .left {
        width: 199px;

        & > div {
          @apply inline;

          &.count {
            @apply text-3xl font-semibold font-sans;
            color: rgb(16, 24, 40);
          }

          &.stats {
            @apply flex items-end;

            p {
              @apply w-full text-sm font-medium flex items-end pr-2;
              height: 38px;

              > *:first-child {
                @apply mr-1.5;
                margin-bottom: 3px;
              }

              span {

                &.percentage {
                }

                &.prev-data {
                  @apply text-gray-500;
                }
              }
            }
          }
        }
      }

      .right {
        @apply flex-1;
        height: 52px;

        & > * {
          @apply h-full mt-5 -mr-1;
        }
      }

    }
  }
</style>

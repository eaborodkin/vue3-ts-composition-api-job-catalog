<script setup lang="ts">
import type {Job} from "@/types"
import type {PropType} from "vue"

const props = defineProps({
  jobs: {
    required: true,
    type: Array as PropType<Job[]>,
  },
})
</script>

<template>
  <div class="jobs">
    <ul class="jobs__list">
      <li v-for="job in jobs" :key="job.id" class="jobs__item job">
        <h2 class="job__title">{{ job.title }} in {{ job.location }}</h2>
        <div class="job__salary">
          <p>{{ job.salary }} euros per year</p>
        </div>
        <div class="job__description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at blanditiis cum distinctio dolorem
            ex facere harum illum iusto laudantium maxime pariatur quasi unde vitae voluptas voluptatem, voluptates!
            Distinctio, velit!</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.jobs {
  max-width: 960px;
  margin: 40px auto;

  &__list {
    padding: 0;
  }

  &__item {
    list-style-type: none;
    padding: 16px;
    margin: 16px 0;
  }
}

.job {
  background: white;
  border-radius: 8px;

  &__title {
    margin: 0 0 10px;
    text-transform: uppercase;
  }

  &__salary {
    display: flex;

    & img {
      width: 30px;
    }

    & p {
      color: #1784bf;
      font-weight: bold;
      margin: 10px 4px;
    }
  }

  &__description {
  }
}
</style>
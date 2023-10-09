<script setup lang="ts">
import type {Job, OrderTerm} from "@/types"
import {ref} from "vue"
import JobList from "@/components/JobList.vue"

const jobs = ref<Job[]>([
  {
    id: 1,
    title: 'farmer',
    location: 'village farm',
    salary: 18000,
  },
  {
    id: 2,
    title: 'guitar player',
    location: 'music bar',
    salary: 15000,
  },
  {
    id: 3,
    title: 'teacher',
    location: 'school',
    salary: 20000,
  },
  {
    id: 4,
    title: 'doctor',
    location: 'hospital',
    salary: 25000,
  },
  {
    id: 5,
    title: 'taxi driver',
    location: 'city',
    salary: 10000,
  },
])

const order = ref<OrderTerm>('title')

const handleClick = (term: OrderTerm) => {
  (order.value !== term) && (order.value = term)
}
</script>

<template>
  <div class="app">
    <header class="order">
      <div class="order__wrap">
        <button class="order__btn" @click="handleClick('title')">order by title</button>
        <button class="order__btn" @click="handleClick('salary')">order by salary</button>
        <button class="order__btn" @click="handleClick('location')">order by location</button>
      </div>
    </header>
    <JobList :jobs="jobs" :order="order"/>
  </div>
</template>

<style scoped lang="scss">
.order {
  text-align: center;

  &__wrap {
    margin-top: 20px;
  }

  &__btn {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
}
</style>

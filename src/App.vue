<script setup lang="ts">
import type {Job} from "@/types"
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
</script>

<template>
<div class="app">
  <JobList :jobs="jobs" />
</div>
</template>

<style scoped>

</style>

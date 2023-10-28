<script setup>
import { useCounterStore } from '../stores/counter'
const countStore = useCounterStore()
</script>

<template>
  <div class="about">
    <h1>count: {{ countStore.count }}</h1>
    <h2>2*count：{{ countStore.doubleCount }}</h2>
    <button @click="countStore.increment">+1</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

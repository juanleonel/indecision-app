<template>
  <h2>Counter {{ counter }}</h2>
  <h2>Square {{ squareCounter }}</h2>

  <div>
    <button class="btn" @click="counter++">+1</button>
    <button class="btn" @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from './composables/useCounter';
interface Props {
  value: number;
}

const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(5);

// import { computed, ref } from 'vue';

// interface Props {
//   value: number;
// }

// const props = defineProps<Props>();

// const counter = ref(props.value);
// const squareCounter = computed(() => counter.value * counter.value);
</script>

<style>
.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}
</style>

<template>
  <h2>Counter {{ counter }}</h2>
  <h2>Square {{ squareCounter }}</h2>

  <div>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" src="./MyCounterScript2"></script>

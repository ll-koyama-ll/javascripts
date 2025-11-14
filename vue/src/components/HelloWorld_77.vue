<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})
defineEmits(['update'])

const newMsg = ref('')
</script>

<template>
  <h1 @click="hello">{{ msg }}</h1>

  <div class="card">
    <input type="text" v-model="newMsg" />
    <br />
    <button @click="$emit('update', newMsg)">update</button>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

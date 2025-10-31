<script setup>

import { ref, reactive } from 'vue'

defineProps({
  msg: String
})

const characters = reactive([
  { name: 'Gon Freecss', type: 'Enhancer' },
  { name: 'Killua Zoldyck', type: 'Transmuter' }
])

const newCharacterName = ref(null)
const newCharacterType = ref(null)

const addCharacter = () => {
  if (!newCharacterName.value || !newCharacterType.value) {
    return
  }
  characters.push({
    name: newCharacterName.value,
    type: newCharacterType.value
  })
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <ul>
      <li v-for="character in characters">
        {{ character.name }}は{{ character.type }}です。
      </li>
      <input type="text" v-model="newCharacterName" placeholder="name" />
      <input type="text" v-model="newCharacterType" placeholder="type" />
      <input type="button" v-on:click="addCharacter" value="追加する">
    </ul>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

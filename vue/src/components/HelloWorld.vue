<script setup>
import { ref } from 'vue'

defineProps({
    msg: String
})

const text = ref('hello')
const checked = ref(true)
const selected = ref(1)
const picked = ref('')
const options = [
    { value: 1, text: 'One', id: 'one' },
    { value: 2, text: 'Two', id: 'two' },
    { value: 3, text: 'Three', id: 'three' }
]
</script>

<template>
    <h1 @click="hello">{{ msg }}</h1>

    <div class="card">
        <input type="text" v-model="text" />
        <p>{{ text }}</p>
    </div>

    <div class="card">
        <input type="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>
    </div>

    <div class="card">
        <select v-model="selected">
        <option
            v-for="option in options"
            :value="option.value"
            :key="option.id"
        >
        {{ option.text }}
        </option>
        </select>
        <p>{{ selected }}</p>
    </div>

    <div class="card">
        <template v-for="option in options" :key="option.id">
            <input type="radio" :id="option.id" :value="option.value" v-model="picked" />
            <label :for="option.id">{{ option.text }}</label>
        </template>
        <p>{{ picked }}</p>
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

<script setup>
import { ref, reactive, computed } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const text = Math.random()

const hello = (name) => console.log('hello', name)

const text2 = ref('hello')
//双方向データバインディングにするには、refを付ける。
//GUIでデータ変わったときに、DOMも変えてくれるので、すぐ表示に反映される。
// ref: プリミティブ型, reactive: オブジェクト型 としておいたらいい。


//text2の値を逆順にする
const reverse = () => {
  text2.value = text2.value
    .split('')
    .reverse()
    .join('')
}

const obj = reactive({
  name: 'Mami',
  isAlive: true
})

// 算出プロパティ computed
const isAliveText = computed(() => {
  return obj.isAlive ? '生きて' : '死んで'
})

// リストレンダリング v-for
const characters = reactive([
  { name: 'Gon Freecss', type: 'Enhancer'},
  { name: 'Killua Zoldyck', type: 'Transmuter'},
  { name: 'Kurapika', type: 'Conjurers'}
])

// 4000ミリ秒（4秒）後に変わる
setTimeout(() => {
  characters[2].type = 'Specialists'
}, 4000)

const text3 = ref('hello')
const checked = ref(true)
const selected = ref(2)
const picked = ref('')
const options = [
  { value: 1, text: 'One', id: 'one' }
]

</script>

<template>
  <h1 @click="hello('mike')">{{ msg }}</h1>
  <h2>{{ text }}</h2>
  <p>{{ text2 }}</p>

  <!-- text2の値を逆順にするボタン -->
  <button type="button" @click="reverse">reverse</button>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <!-- 条件付きレンダリング -->
    <p v-if="count < 5">数字は5より小さいです</p>
    <p v-else-if="count < 10">数字は5以上10未満です</p>
    <p v-else>数字が10以上になりました</p>
    <p v-show="count >= 10">v-show(display:none)</p>
    <!-- v-ifはブラウザの負担が大きい。v-showは負担が小さい -->
  </div>

  <div class="card">
    <p>私の名前は{{ obj.name }}です。{{ isAliveText }}います。</p>
    <button type="button" @click="obj.isAlive = false">第3話以降</button>
  </div>

  <div class="card">
    <ul style="list-style-type: none;">
      <!-- v-forを使う時は、「:key="ユニークな値"」を入れることを癖づける！ -->
      <li
        v-for="character in characters"
        :key="character.name"
      >
        My name is {{ character.name }}. I'm {{ character.type }}.
      </li>
    </ul>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
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

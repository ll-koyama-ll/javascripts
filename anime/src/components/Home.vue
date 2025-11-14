<script setup>
import { ref } from 'vue'
import router from '../router';

defineProps({
  items: Array
})
const emit = defineEmits(['getRecords'])

const searchName = ref('')

const getRecords = async e => {
  if (!searchName.value || e.isComposing) {
    return
  }
  emit('getRecords', searchName.value)
}

const goDetail = (e, item) => {
  router.push({
    name: 'detail',
    params: {
      id: item.id
    }
  })
}

const columns = [
  { name: 'title', label: 'タイトル', field: row => row.title, sortable: true, align: 'left' },
  { name: 'episode', label: '話数', field: row => row.episode, sortable: true },
  { name: 'published', label: '公開日', field: row => row.published, sortable: true },
]
</script>

<template>
  <q-page class="q-pa-md">
    <q-input outlined bottom-slots v-model="searchName" label="検索キーワード" @keydown.enter="getRecords">
      <template v-slot:append>
        <q-icon name="search" @click="getRecords" />
      </template>
    </q-input>
    <div class="q-pa-md">
      <q-table title="検索結果" :rows="items" :columns="columns" row-key="id" :rows-per-page-options="[10, 20, 30]"
        @row-click="goDetail" />
    </div>
  </q-page>
</template>

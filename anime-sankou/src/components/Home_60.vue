<script setup>
import { reactive, computed } from 'vue'
import axios from 'axios'

const data = reactive({
  records: []
})

const getRecords = async e => {
  const res = await axios('/api/search', {
    params: {
      subcategoryId: 'an201',
      limit: 50,
      name: 'まどか'
    }
  })
  data.records = res.data.record
}

const items = computed(() => {
  return data.records.map(item => {
    return {
      id: item.aipId,
      title: item.metadata['schema:name'] ? item.metadata['schema:name'][0] : null,
      episode: item.metadata['schema:episodeNumber'] ? Number(item.metadata['schema:episodeNumber'][0]) : null,
      published: item.metadata['schema:datePublished'] ? item.metadata['schema:datePublished'][0] : null
    }
  })
})

getRecords()
</script>

<template>
  <pre>{{ items }}</pre>
</template>

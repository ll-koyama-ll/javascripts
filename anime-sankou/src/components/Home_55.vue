<script setup>
import { reactive } from 'vue'
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
  data.records = res.data
}
getRecords()
</script>

<template>
  <pre>{{ data.records }}</pre>
</template>

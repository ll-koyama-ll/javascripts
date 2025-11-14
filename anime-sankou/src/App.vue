<script setup>
import { reactive, computed } from 'vue'
import axios from 'axios'

const data = reactive({
  records: []
})

const getRecords = async (name) => {
  const res = await axios('/api/search', {
    params: {
      subcategoryId: 'an201',
      limit: 50,
      name: name
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
</script>

<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 800px" fclass="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>
            <router-link to="/" class="text-white" style="text-decoration: none;">アニメデータベース</router-link>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title>
            <small>出典: 文化庁「メディア芸術データベース」（https://mediaarts-db.artmuseums.go.jp/）</small>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>

      <q-page-container>
        <q-page class="q-pa-md">
          <router-view :items="items" @getRecords="getRecords"></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

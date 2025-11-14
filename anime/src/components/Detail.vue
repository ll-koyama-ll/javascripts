<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const item = reactive({
  title: '',
  episode: 0,
  published: '',
  kana: '',
  subtitle: '',
  rating: ''
})
const getItem = (async () => {
  const res = await axios('/api/search', { params: { aipId: route.params.id } })
  const record = res.data.record[0]
  item.title = record.metadata['schema:name'] ? record.metadata['schema:name'][0] : null
  item.kana = record.metadata['schema:name xml:lang=\"ja-Hrkt\"'] ? record.metadata['schema:name xml:lang=\"ja-Hrkt\"'][0] : null
  item.subtitle = record.metadata['schema:alternativeHeadline'] ? record.metadata['schema:alternativeHeadline'][0] : null
  item.episode = record.metadata['schema:episodeNumber'] ? record.metadata['schema:episodeNumber'][0] : null
  item.published = record.metadata['schema:datePublished'] ? record.metadata['schema:datePublished'][0] : null
  item.rating = record.metadata['schema:contentRating'] ? record.metadata['schema:contentRating'][0] : null
})
getItem()
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card bg-secondary text-white" v-if="item.title">
      <q-card-section>
        <div class="text-h6">{{ item.title }}</div>
        <div class="text-subtitle2">{{ item.kana }}</div>
      </q-card-section>

      <q-separator dark />

      <q-card-section>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label caption>話数</q-item-label>
            <q-item-label>{{ item.episode }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label caption>サブタイトル</q-item-label>
            <q-item-label>{{ item.subtitle }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label caption>公開日</q-item-label>
            <q-item-label>{{ item.published }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label caption>レーティング</q-item-label>
            <q-item-label>{{ item.rating }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>

    </q-card>
  </div>

</template>

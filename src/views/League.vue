<template>
  <div v-if="fetching">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else class="pb-6">
    <h2>{{ league.name }}</h2>
    {{ league }}
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import useApiCall from '@/features/useApiCall'

export default {
  setup() {
    let league = ref({})
    const route = useRoute()
    const { response, error, fetching } = useApiCall(`${process.env.VUE_APP_API_URL}leagues/${route.params.id}`, {})

    league = response

    return {
      league,
      error,
      fetching
    }
  }
}
</script>

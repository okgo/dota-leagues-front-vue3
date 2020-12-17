<template>
  <div class="pb-6">
    <div v-if="fetching">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="grid grid-cols-2 gap-6">
      <div
        v-for="league in leagues.results"
        :key="league.league_id">
        <router-link :to="`/leagues/${league.league_id}`">
          <League :league="league" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useApiCall from '@/features/useApiCall'

import League from '@/components/League'

export default {
  components: {
    League
  },
  setup() {
    let leagues = ref({})

    const { response, error, fetching } = useApiCall(`${process.env.VUE_APP_API_URL}leagues`, { limit: 20 })

    leagues = response

    return {
      leagues,
      error,
      fetching
    }
  }
}
</script>

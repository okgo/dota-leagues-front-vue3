<template>
  <div class="about pb-6">
    <div class="grid grid-cols-2 gap-6">
      <div
        v-for="league in leagues"
        :key="league.league_id">
        <League :league="league" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import League from '@/components/League'

export default {
  components: {
    League
  },
  setup() {
    const leagues = ref([])

    const getLeagues = async () => {
      const res = await axios.get(`${process.env.VUE_APP_API_URL}leagues`)

      leagues.value = res.data.results
    }

    onMounted(getLeagues)

    return { leagues }
  }
}
</script>

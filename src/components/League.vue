<template>
  <div class="league border">
    <div
      class="image h-60"
      :style="resolveBg(league.league_id)"></div>
    <div class="p-5">
      <h2 class="text-2xl mb-1">{{ league.name }}</h2>
      <div>
        <a
          class="text-sm"
          target="_blank"
          :href="league.url">{{ league.url }}</a>
      </div>
      <ul class="mt-2">
        <li class="inline-block w-1/2 text-xs">
          <b class="inline-block w-28">Dates</b> <span>{{ resolveDate(league.start_timestamp) }} &dash; {{ resolveDate(league.end_timestamp) }}</span>
        </li>
        <li class="inline-block w-1/2 text-xs">
          <b class="inline-block w-28">Region</b> <span>{{ resolveRegion(league.region) }}</span>
        </li>
        <li class="inline-block w-1/2 text-xs">
          <b class="inline-block w-28">Tier</b> <span>{{ resolveTier(league.tier) }}</span>
        </li>
        <li class="inline-block w-1/2 text-xs">
          <b class="inline-block w-28">Prize Pool</b> <span>{{ resolvePrizePool(league.total_prize_pool) }}</span>
        </li>
      </ul>
      <p class="h-24 mt-4 overflow-hidden text-sm">{{ league.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    league: {
      type: Object,
      default: () => ({ league_id: null })
    }
  },
  methods: {
    resolveDate: timestamp => new Intl.DateTimeFormat('en-GB').format(new Date(timestamp * 1000)),
    resolvePrizePool: money => new Intl.NumberFormat('us-EN', { style: 'currency', currency: 'USD' }).format(money),
    resolveBg: id => `background-image: url(${process.env.VUE_APP_API_URL}${id}/logo.png)`,
    resolveTier (num) {
      switch (true) {
        case num === 1 : return 'Unknown (1)'
        case num === 2 : return 'Non-DPC Events (2)'
        case num === 3 : return 'DPC Minor Events (3)'
        case num === 4 : return 'DPC Major Events (4)'
        case num === 5 : return 'The International (5)'
        default : return `Unknown (${num})`
      }
    },
    resolveRegion (num) {
      switch (true) {
        case num === 1 : return 'North America'
        case num === 2 : return 'South America'
        case num === 3 : return 'Europe'
        case num === 4 : return 'CIS'
        case num === 5 : return 'China'
        case num === 6 : return 'South-East Asia'
        default : return `Unknown (${num})`
      }
    }
  }
}
</script>

<style lang="scss">
.league {
  a {
    padding-left: 18px;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEOSURBVHgBhZLbjcIwEEXjyAXQwaaDtfKQ8rfeDmiBCoAKEBUgOqAD0gGhgMShA0pASv7y4k7EiGCCGMlyxvbx3DuOcL5EGIa667o/IcQly7KE1sSnw1rrWVVVJwAegLTve4XlG/J/8QUoMNZFUdxoPQiCE+BUTkEAlgTkeb6wtvYYu7cK4zyOYw+eVpyj0tz3fePakmiDgbquSeIv548qB2l7gKSEAdJPEq18P0BlWe4AXI0x9oHBU9M0y3HuKKVmkNRj9jiH7s2URw7yxBtDW6m9uHFLFaHAsMcXCIeumFMp5WbcNZbIf8E4hseNoki1bXvEy9MFNOYAkol3ekIPL57ruhqfP1QBTTk7H+IOVR/CHTJfLSsAAAAASUVORK5CYII=');
    background-repeat: no-repeat;
    background-position: left center;
  }
}
</style>

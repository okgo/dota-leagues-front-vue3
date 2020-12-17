import{ toRefs, reactive } from 'vue'

export default function (url, params) {
  const state = reactive({
    response: {},
    error: null,
    fetching: true
  })

  const objectToQueryString = obj => Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&')

  const fetchData = async () => {
    try {
      const res = await fetch(params ? `${url}?${objectToQueryString(params)}` : url)
      const json = await res.json()

      state.response = json
    } catch (error) {
      state.error = error
    } finally {
      state.fetching = false
    }
  }

  fetchData()

  return { ...toRefs(state) }
}

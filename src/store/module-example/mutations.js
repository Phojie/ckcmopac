export function searchQueryMutation (state, payload) {
  state.searchQueryValue = payload
}

export function loadingQueryMutation (state, payload) {
  state.loadingQuery = payload
}

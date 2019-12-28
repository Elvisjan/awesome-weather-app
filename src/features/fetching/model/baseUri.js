import { createStore } from "effector"

export const $baseUri = createStore(
  "https://api.openweathermap.org/data/2.5/weather?"
)

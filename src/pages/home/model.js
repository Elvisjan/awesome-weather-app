import { sample, createStore, createEvent } from "effector"
import { deleteItem, fetching, triggerSample, refetchWeather } from "../../lib"
export const addCity = createEvent("add city")
export const addValue = createEvent("add input value")

export const $cityNames = createStore(
  JSON.parse(localStorage.getItem("cityNames")) || [],
  { name: "cityNames" }
)
  .on(fetching.done, (state, { result, params }) => {
    if (result.cod === 200) {
      state = [...state]
      const oldValue = state.find(
        (item) => item.toLowerCase() === params.toLowerCase()
      )
      if (oldValue) return
      else {
        state.push(params)
      }
      return state
    } else return
  })
  .on(deleteItem, (state, index) => state.filter((_, i) => i !== index))

export const $cityList = createStore(
  JSON.parse(localStorage.getItem("cityList")) || [],
  { name: "cityList" }
)
  .on(deleteItem, (state, index) => state.filter((_, i) => i !== index))
  .on(fetching.done, (state, { result, params }) => {
    state = [...state]
    const oldValue = state.find(
      (item) => item.name.toLowerCase() === params.toLowerCase()
    )
    if (oldValue) {
      state[state.indexOf(oldValue)] = {
        ...oldValue,
        temperature: result.main.temp,
        feels: result.main.feels_like,
        weather: result.weather,
      }
    } else {
      state.push({
        name: params.toUpperCase(),
        weather: result.weather,
        temperature: result.main.temp,
        cod: result.cod,
        id: result.id,
        feels: result.main.feels_like,
      })
    }
    return state
  })

export const $inputValue = createStore("")
  .on(addValue, (_, e) => e.currentTarget.value)
  .reset(fetching)

$cityNames.updates.watch((newState) =>
  localStorage.setItem($cityNames.shortName, JSON.stringify(newState))
)
$cityList.updates.watch((newState) =>
  localStorage.setItem($cityList.shortName, JSON.stringify(newState))
)

$cityList.getState().length < 1 && fetching("МОСКВА")
$cityNames.getState().length > 0 && refetchWeather($cityNames.getState())

sample({
  source: $inputValue,
  clock: triggerSample,
  target: fetching,
})

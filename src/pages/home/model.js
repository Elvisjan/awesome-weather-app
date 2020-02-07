import { sample, createStore, createEvent, guard } from "effector"
import { fetching, triggerSample, weatherUpdate } from "../../features"
export const addCity = createEvent("add city")
export const addValue = createEvent("add input value")
export const deleteItem = createEvent("delete item")
export const mount = createEvent("initial mount")

export const $ids = createStore(
  JSON.parse(localStorage.getItem("cityIds")) || [],
  { name: "cityIds" }
)
  .on(fetching.done, (state, { result }) => {
    if (result.cod !== 200 || state.find((id) => id === result.id)) {
      return state
    }
    state = [...state, result.id]
    return state
  })
  .on(deleteItem, (state, index) => state.filter((_, i) => i !== index))
export const $cityList = createStore(
  JSON.parse(localStorage.getItem("cityList")) || [],
  { name: "cityList" }
)
  .on(fetching.done, (state, { result }) => {
    state = [...state]
    const oldValue = state.find((item) => item.id === result.id)
    if (oldValue) {
      return state
    } else {
      state.push({
        name: result.name,
        weather: result.weather,
        temperature: result.main.temp,
        cod: result.cod,
        id: result.id,
        feels: result.main.feels_like,
      })
    }
    return state
  })
  .on(weatherUpdate.done, (state, { result }) => {
    state = [...state]
    for (let ent of result.list) {
      let oldValue = state.find((item) => item.id === ent.id)
      if (oldValue) {
        state[state.indexOf(oldValue)] = {
          ...oldValue,
          temperature: ent.main.temp,
          feels: ent.main.feels_like,
          weather: ent.weather,
        }
      }
    }
    return state
  })
  .on(deleteItem, (state, index) => state.filter((_, i) => i !== index))

export const $inputValue = createStore("")
  .on(addValue, (_, e) => e.currentTarget.value)
  .reset(fetching)

$ids.updates.watch((newState) =>
  localStorage.setItem($ids.shortName, JSON.stringify(newState))
)
$cityList.updates.watch((newState) =>
  localStorage.setItem($cityList.shortName, JSON.stringify(newState))
)
$cityList.getState().length < 1 && fetching("МОСКВА")
// guard({
//   source: $cityList,
//   filter: (store) => !store[0],
//   target: fetching.prepend(() => "Москва"),
// })
sample({
  source: $ids,
  clock: mount,
  target: weatherUpdate,
})
sample({
  source: $inputValue,
  clock: triggerSample,
  target: fetching,
})

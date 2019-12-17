import {createStore, createEvent, createEffect} from 'effector'
import {fetchCityWeather} from '../../api/search'

export const addCity = createEvent('addCity')
export const deleteCity = createEvent('deleteCity')
const resetCityList = createEvent('reset list')
export const $cityList = createStore([{name: 'Москва'}])
  .on(addCity, (oldState, payload) => [...oldState, {name: payload}])
  .on(deleteCity,(state, index)=> state.filter((_, i)=>i!=index))
  .reset(resetCityList)
export const $efStore = createStore('Hello again');
export const loadWeather = createEffect();
loadWeather.use((city) =>
  fetchCityWeather(city)
)

export const fetchUser = createEffect({
  handler: (name) => {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=ae8b6052b77e86df29360ce4c887a91a&units=metric&q=${name}`).then(res => res.json())
  },
})
fetchUser.done.watch(({params, result}) => {
  console.log(params) 
  console.log(result)
})
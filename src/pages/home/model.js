import {createStore, createEvent, createEffect} from '../../features/common'
export const addCity = createEvent('add city')
export const deleteItem = createEvent('delete city')

export const fetching = createEffect({
  handler: async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?APPID=a82f5bd7cf235d2d97cf411fd97a845d&units=metric&lang=ru&q=${city}`
    const req = await fetch(url)
    return req.json()
  },
})
export const refetchWeather = createEffect({
    handler: async (store) => {
      for (let st of store) {
       await fetching(st)
      }
   }
  }) 
export const $cityNames = createStore(["Москва"], {name: 'cityNames'})
  .on(fetching.done, (state, {result, params}) => {
    if (result.cod === 200) {
      state =[...state]
    const oldValue =state.find(item=> item.toLowerCase() === params.toLowerCase())
    if (oldValue) return       
    else {
        state.push(params)
      }
       return state
    } else return       
    }   
  )  
  .on(deleteItem,(state, index)=> state.filter((_, i)=>i!==index))

export const $cityList = createStore(
  [
], {name: 'cityList'})
  .on(deleteItem,(state, index)=> state.filter((_, i)=>i!==index))
  .on(fetching.done, (state, {result, params}) => {
    state = [...state]
    const oldValue = state.find(item => item.name.toLowerCase() === params.toLowerCase())
    if(oldValue) {     
        state[state.indexOf(oldValue)] = {...oldValue, temperature: result.main.temp.toFixed(), feels:result.main.feels_like.toFixed(),
        weather: result.weather}      
    } else {
       state.push({name: params.toUpperCase(), weather: result.weather, temperature: result.main.temp.toFixed(), cod: result.cod, id: result.id,
       feels: result.main.feels_like.toFixed()})
    }
    return state
  })
 $cityList.getState().length < 1 && fetching('МОСКВА')
 export const addValue = createEvent('add input value')

 export const $inputValue = createStore("")
   .on(addValue, (_, e)=>  e.currentTarget.value)
   .reset(fetching)
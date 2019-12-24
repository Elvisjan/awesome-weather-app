import {sample} from 'effector'
import {createStore, createEvent} from '../../features/common'
import {deleteItem,fetching ,triggerSample} from '../lib'

export const addCity = createEvent('add city')
export const addValue = createEvent('add input value')

export const $cityNames = createStore(["Москва"], {name: 'cityNames'})
  .on(fetching.done, (state, {result, params}) => {
    if (result.cod === 200) {
      state =[...state]
    const oldValue = state.find(item=> item.toLowerCase() === params.toLowerCase())
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
       state.push({name: params.toUpperCase(), weather: result.weather, temperature: result.main.temp, cod: result.cod, id: result.id,
       feels: result.main.feels_like})
    }
    return state
  })
 $cityList.getState().length < 1 && fetching('МОСКВА')

 export const $inputValue = createStore("")
   .on(addValue, (_, e)=>  e.currentTarget.value)
   .reset(fetching)

 sample({
   source: $inputValue,
   clock: triggerSample,
   target: fetching
 })

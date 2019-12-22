import React, {useState} from 'react';
import {fetchCityWeather} from './api/search'
import {createStore} from 'effector'
import {useStore, useList} from 'effector-react'
import {$cityList, update, fetching, 
  nameStore, reFetchWeather, newStore, 
   resetNewList, deleteItem} from './features/cities/model'



function App() {
  const list = useStore($cityList);
  const [city, setCity] = useState('')
  const newedStore = useStore(newStore)
  const nStore = useStore(nameStore)
  
  const handler = (e) => {
    console.log(list)
    e.preventDefault()
    fetching(city)    
    setCity('')
  }
  const handleChange = (e) => {
    e.preventDefault()
    setCity(e.target.value)
  }
  const timeout = (callback, delay)=> {
    setTimeout(()=>callback,delay)
  }
  const CityList = () => useList($cityList,({name, weather, temperature, info}, index) => { 
      const listItem = info >= 200 ?    
        <li> 
        В городе {name} на данный {weather[0].main==='Snow'&& 'идёт снег '}
         температура воздуха: {temperature} составляет &#176; по цельсию  <button type='button' onClick={()=>{
           deleteItem(index)}}>Удалить из списка</button>
        </li> 
        : null    
     return <ul>{listItem}</ul>
    })   
    
  return (    
    <div className="App">
      <header className="App-header">
        <h1>Погодное приложение</h1>
        <form onSubmit={handler}>Введите название города
          <input type='text' placeholder='Например: Нижний новгород' onChange={handleChange} value={city}></input>
        </form>
        {list.length > 0 ? <CityList /> :<div>Добавьте город в список!!</div>}
      </header>      
      <button onClick={()=>{
        Promise.all([
          resetNewList(),
          reFetchWeather(nStore),
          newedStore.length && timeout(update(newedStore),2000) 
        ])       
      }}>Апдейт тест</button>
       <button onClick={()=>{
       resetNewList()
      }}>1</button>
      <button onClick={()=>{
       reFetchWeather(nStore)
      }}>2</button>
      <button onClick={()=>{
       timeout(update(newedStore),1000)
      }}>3</button>
     
    </div>
  );
}


export default App;

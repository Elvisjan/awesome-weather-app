import React, {useState} from 'react';
import {fetchCityWeather} from './api/search'
import {createStore} from 'effector'
import {useStore, useList} from 'effector-react'
import {$cityList, $efStore, addCity, deleteCity, fetchUser} from './features/cities/model'



function App() {
  const list = useStore($cityList);
  const [city, setCity] = useState('')  

  const handler = (e) => {
    console.log(list)
    e.preventDefault()
    addCity(city)
    fetchUser(city)
    setCity('')
  }
  const handleChange = (e) => {
    e.preventDefault()
    setCity(e.target.value)
  }
 
  const CityList = () => {
    const list2 = useList($cityList,({name}, index) => (      
      <li>
        В городе {name} сейчас такая погода <button type='button' onClick={()=>deleteCity(index)}>Удалить из списка</button>
        </li>
   ))
     return <ul>{list2}</ul>
       
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Погодное приложение</h1>
        <form onSubmit={handler}>
          <input type='text' placeholder='Например: Нижний новгород' onChange={handleChange} value={city}></input>
        </form>
        c59e45ef-14be-483b-a535-6cb66d2ee789
        {list.length > 0 ? <CityList /> :<div>Добавьте город в список!!!</div>}        
      </header>
    </div>
  );
}


export default App;

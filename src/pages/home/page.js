import React from 'react';
import { useStore, useList, createComponent} from 'effector-react';
import {
  $cityList, $cityNames, fetching,
  deleteItem, refetchWeather, $inputValue, addValue
} from './model'
import { Header, H1, Text, Spinner, Section, List, ListItem, Button } from '../../ui';
import { Search } from '../../ui'
export const HomePage = () => {
  const value = useStore($inputValue)
  const names = useStore($cityNames)
  React.useEffect(() => {
    const timer = setInterval(() => {
      console.log('This will run after 1 minute!')
      refetchWeather(names)
    }, 60000);
    return () => clearInterval(timer);
  }, [names]);

  const handler = (e) => {
    e.preventDefault()
    fetching(value)
  }
  return (
    <>
      <Header className="App-header">
        <H1>Классное погодное приложение</H1>
        <SpinnerContainer spinner={Spinner}></SpinnerContainer>
      </Header>
      <Section>
        <Search value={useStore($inputValue)} 
        changer={addValue} type='text'
         placeholder='Например: Нижний Новгород'
          submiter={handler} label='Введите название города' />
        {useStore($cityList).length > 0 ? <CityList /> : <Text>Добавьте город</Text>}
      </Section>
    </>
  );
}
const CityList = () => useList($cityList, ({ name, weather, temperature, cod, feels }, index) => {
  const listItem =
    cod === 200 ? <ListItem>
      В городе {name} в данный момент {weather[0].description}, температура воздуха
      составляет {parseInt(temperature)} &#176;
      по цельсию, чувствуется как {parseInt(feels)}&#176;
      по цельсию<Button type='button' onClick={() => {
        deleteItem(index)
      }}>Удалить</Button>
    </ListItem> : null
  return <List>{listItem}</List>
})
const SpinnerContainer = createComponent(fetching.pending, (_, pending) => (
  pending ? <Spinner>Идёт загрузка, пожалуйста, подождите</Spinner> : null
))

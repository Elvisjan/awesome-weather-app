import React from "react"
import { useStore, useList, createComponent } from "effector-react"
import {
  $cityList,
  $inputValue,
  addValue,
  deleteItem,
  $ids,
  mount,
  unmount,
} from "./model"
import { inputHandler, fetching, weatherUpdate } from "../../features"
import {
  Header,
  H1,
  Text,
  Spinner,
  Section,
  List,
  ListItem,
  Button,
  Img,
  Search,
} from "../../ui"

export const HomePage = () => {
  const ids = useStore($ids)
  const inputValue = useStore($inputValue)
  React.useEffect(() => {
    mount()
  }, [])
  React.useEffect(() => {
    const timer = setInterval(() => {
      weatherUpdate(ids)
    }, 60000)
    return () => clearInterval(timer)
  }, [ids])

  return (
    <>
      <Header className="App-header">
        <H1>Классное погодное приложение</H1>
        <SpinnerContainer spinner={Spinner}></SpinnerContainer>
      </Header>
      <Section>
        <Search
          value={inputValue}
          changer={addValue}
          type="text"
          placeholder="Например: Нижний Новгород"
          submitter={inputHandler}
          label="Введите название города"
          buttonText="добавить город"
        />
        {useStore($cityList).length > 0 ? (
          <CityList />
        ) : (
          <Text>Добавьте город</Text>
        )}
      </Section>
    </>
  )
}
const CityList = () =>
  useList($cityList, ({ name, weather, temperature, cod, feels }, index) => {
    const listItem =
      cod === 200 ? (
        <ListItem>
          В городе {name} в данный момент {weather[0].description}, температура
          воздуха составляет {parseInt(temperature)} &#176; по цельсию,
          чувствуется как {parseInt(feels)}&#176; по цельсию
          <Img
            alt="погодное условие"
            src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          />
          <Button
            type="button"
            onClick={() => {
              deleteItem(index)
            }}
          >
            Удалить
          </Button>
        </ListItem>
      ) : null
    return <List>{listItem}</List>
  })
const SpinnerContainer = createComponent(fetching.pending, (_, pending) =>
  pending ? <Spinner>Идёт загрузка, пожалуйста, подождите</Spinner> : null
)

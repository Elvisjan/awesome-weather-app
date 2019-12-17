import axios from 'axios';
const url =`http://api.openweathermap.org/data/2.5/weather?`
const token = `ae8b6052b77e86df29360ce4c887a91a`

export const fetchCityWeather =  (city) => {
  return axios({
    method: 'get',
    url: `${url}`,
    params: {
      APPID: token,
      q: city
    }
  }).then(response => {
    return response.data.weather
  })
}
  
import {createEffect} from 'effector'

export const fetching = createEffect({
  handler: async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?APPID=a82f5bd7cf235d2d97cf411fd97a845d&units=metric&lang=ru&q=${city}`
    const req = await fetch(url)
    return req.json()
  },
})
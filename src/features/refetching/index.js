import { createEffect } from "effector"

export const weatherUpdate = createEffect({
  handler: async (ids) => {
    const url = `https://api.openweathermap.org/data/2.5/group?id=${ids}&units=metric&appid=a82f5bd7cf235d2d97cf411fd97a845d&lang=ru`
    const req = await fetch(url)
    return req.json()
  },
})

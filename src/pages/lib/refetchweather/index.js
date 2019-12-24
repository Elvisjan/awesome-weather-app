import { createEffect } from 'effector';
import { fetching } from '../fetchweather'

export const refetchWeather = createEffect({
  handler: async (store) => {
    for (let st of store) {
      await fetching(st)
    }
  }
}) 
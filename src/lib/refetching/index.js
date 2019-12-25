import { createEffect } from "effector"
import { fetching } from "../fetching"

export const refetchWeather = createEffect({
  handler: async (store, handler) => {
    for (let st of store) {
      await fetching(st)
    }
  },
})

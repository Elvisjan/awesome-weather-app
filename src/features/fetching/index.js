import { createEffect } from "effector"

import { $baseUri, $requestConfig, $token } from "./model"

export const fetching = createEffect({
  handler: async (city) => {
    const url = `${$baseUri.getState()}APPID=${$token.getState()}&units=${
      $requestConfig.getState().units
    }&lang=${$requestConfig.getState().lang}&q=${city}`
    const req = await fetch(url)
    return req.json()
  },
})

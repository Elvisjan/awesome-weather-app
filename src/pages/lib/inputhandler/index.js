import { createEvent } from "effector"
export const triggerSample = createEvent("trigger sample")

export const inputHandler = (e) => {
  e.preventDefault()
  triggerSample()
}

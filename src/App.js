import React from "react"
import { Normalize } from "styled-normalize"
import { GlobalStyles } from "./global-styles"
import { HomePage } from "./pages"

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <HomePage />
    </>
  )
}
export default App

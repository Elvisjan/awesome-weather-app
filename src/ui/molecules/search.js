import React from "react"

import { Form, Input, Label, Button } from "../atoms"

export const Search = ({
  submitter,
  value,
  placeholder,
  type,
  changer,
  label,
  buttonText,
}) => {
  return (
    <Form onSubmit={submitter}>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={changer}
      />
      <Button onClick={submitter}>{buttonText}</Button>
    </Form>
  )
}

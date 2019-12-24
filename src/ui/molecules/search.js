import React from 'react'

import { Form, Input, Label } from '../atoms'

export const Search = ({ submiter, value, placeholder, type, changer, label }) => {
  return (
    <Form onSubmit={submiter}>
      <Label>{label}</Label>
      <Input type={type} value={value} placeholder={placeholder} onChange={changer} />
    </Form>
  )
}


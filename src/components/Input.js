import React from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import getValidationState from './getValidationState'

export default props => {
  const { input, type, meta, label } = props

  return (
    <FormGroup validationState={getValidationState(meta)}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type={type} {...input} />
      {meta.touched && meta.error}
      <FormControl.Feedback />
    </FormGroup>
  )
}

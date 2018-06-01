import React from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import getValidationState from './getValidationState'

export default props => {
  const { input, meta, label, options } = props

  return (
    <FormGroup validationState={getValidationState(meta)}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl componentClass="select" {...input}>
        {options.map(({ value, title }, index) => (
          <option value={value} key={`${value}_${index}`}>
            {title}
          </option>
        ))}
      </FormControl>
    </FormGroup>
  )
}

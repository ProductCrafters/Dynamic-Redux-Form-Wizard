import React from 'react'
import { ControlLabel, Radio, FormGroup } from 'react-bootstrap'
import getValidationState from './getValidationState'

export default props => {
  const { input, meta, label, options } = props

  const onChange = value => () => input.onChange(value)

  return (
    <FormGroup validationState={getValidationState(meta)}>
      <ControlLabel>{label}</ControlLabel>
      <br />
      {options.map(({ value, title }, index) => (
        <Radio
          inline
          checked={value === input.value}
          onChange={onChange(value)}
          key={`${value}_${index}`}
        >
          {title}
        </Radio>
      ))}
    </FormGroup>
  )
}

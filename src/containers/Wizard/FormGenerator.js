import React from 'react'
import { FormSection, Field } from 'redux-form'
import { Row, Col } from 'react-bootstrap'
import { Input, Radio, Select } from '../../components'
import { WizardContext } from './ContextProvider'

const stringToComponentMapper = {
  input: Input,
  radio: Radio,
  select: Select
}

const validate = rule => value => {
  if (!rule) {
    return undefined
  }

  return value && new RegExp(rule).test(value) ? undefined : 'Validation Error'
}

const FormGenerator = () => (
  <div>
    <WizardContext.Consumer>
      {({ steps, currentStepIndex }) =>
        steps[currentStepIndex].sections.map(s => (
          <div key={`section_${s.name}`}>
            <h3>{s.caption}</h3>
            <FormSection name={s.name} component="div">
              <Row>
                {s.fields.map(f => (
                  <Col md={6} key={f.name}>
                    <Field
                      name={f.name}
                      type={f.type || undefined}
                      options={f.options || undefined}
                      component={stringToComponentMapper[f.component]}
                      label={f.caption}
                      validate={validate(f.validationRule)}
                    />
                  </Col>
                ))}
              </Row>
            </FormSection>
          </div>
        ))
      }
    </WizardContext.Consumer>
  </div>
)

export default FormGenerator

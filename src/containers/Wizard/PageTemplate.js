import React from 'react'
import PropTypes from 'prop-types'
import { FormSection, reduxForm } from 'redux-form'
import { Row, Col } from 'react-bootstrap'

import FormGenerator from './FormGenerator'

const PageTemplate = props => {
  const { handleSubmit, isShown, stepName } = props

  if (!isShown) {
    return <div />
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: 15 }}>
      <FormSection name={stepName} component="div">
        <Row>
          <Col md={7}>
            <FormGenerator />
            <button type="submit" style={{ float: 'right' }}>
              Next
            </button>
          </Col>
        </Row>
      </FormSection>
    </form>
  )
}

PageTemplate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
  stepName: PropTypes.string.isRequired,
  documentsTypes: PropTypes.arrayOf(PropTypes.shape()).isRequired
}

const PageTemplateForm = reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(PageTemplate)

export default PageTemplateForm

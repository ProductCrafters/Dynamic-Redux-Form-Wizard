import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'

const NavBar = ({ stepIndex, steps, goToStep }) => {

  const step = steps[stepIndex] || {}

  return (
    <Row>
      <Col md={7}>
        <h2>{step.title}</h2>
      </Col>
      <Col md={5}>
        <ToggleButtonGroup
          justified
          type="radio"
          value={stepIndex}
          name="options"
          onChange={newValue => goToStep(newValue)()}
        >
          {steps.map(({ name, title }, index) => (
            <ToggleButton value={index} key={`${name}_${index}`}>
              {title}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Col>
    </Row>
  )
}

NavBar.propTypes = {
  stepIndex: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  goToStep: PropTypes.func.isRequired,
}

export default NavBar
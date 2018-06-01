import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const WizardContext = React.createContext()

class WizardProvider extends Component {
  constructor(props) {
    super(props)

    this.state = { currentStepIndex: 0 }
  }

  goToStep = stepIndex => something => {
    const { steps } = this.props

    if (stepIndex < steps.length) {
      this.setState({ currentStepIndex: stepIndex })
    } else {
      console.log(something)
    }
  }

  render() {
    const { goToStep } = this
    const { currentStepIndex } = this.state
    const { children, steps } = this.props

    return (
      <WizardContext.Provider value={{ currentStepIndex, steps, goToStep }}>
        {children}
      </WizardContext.Provider>
    )
  }
}

WizardProvider.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

WizardProvider.defaultProps = {
  steps: []
}

export default WizardProvider
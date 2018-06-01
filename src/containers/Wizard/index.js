import React from 'react'
import WizardContextProvider, { WizardContext } from './ContextProvider'
import { NavBar } from '../../components'
import PageTemplate from './PageTemplate'
import steps from '../../mockData'

const constructInitialValues = data => {
  const root = {}
  data.sections.forEach(s => {
    root[s.name] = {}

    s.fields.forEach(f => {
      root[s.name][f.name] = f.initialValue
    })
  })

  return root
}

const NewWizard = props => (
  <WizardContext.Consumer>
    {({ currentStepIndex, steps, goToStep }) => {
      const initialValues = {}

      steps.forEach(s => {
        initialValues[s.name] = constructInitialValues(s)
      })
      return (
        <div>
          <NavBar
            stepIndex={currentStepIndex}
            steps={steps}
            goToStep={goToStep}
          />
          {steps.map((step, index) => (
            <PageTemplate
              key={`wizardStep_${index + 1}`}
              initialValues={initialValues}
              stepName={step.name}
              documentsTypes={step.documentsTypes}
              isShown={currentStepIndex === index}
              onSubmit={goToStep(index + 1)}
            />
          ))}
        </div>
      )
    }}
  </WizardContext.Consumer>
)

export default () => (
  <WizardContextProvider steps={steps}>
    <NewWizard />
  </WizardContextProvider>
)

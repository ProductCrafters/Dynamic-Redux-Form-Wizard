const mockGraphqlData = [
  {
    name: 'step1',
    title: 'Step 1',
    sections: [
      {
        name: 'applicant',
        caption: 'Applicant Information',
        fields: [
          {
            name: 'firstName',
            component: 'input',
            caption: 'First Name',
            initialValue: 'Oleg',
            validationRule: '^(?!\\s*$).+'
          },
          {
            name: 'lastName',
            component: 'input',
            caption: 'Last Name',
            initialValue: 'Kalyta',
            validationRule: '^.{6,}$'
          },
          {
            name: 'middleName',
            component: 'input',
            caption: 'Middle Name',
            initialValue: 'Dmytrovych'
          },
          {
            name: 'dateOfBirth',
            component: 'input',
            type: 'date',
            caption: 'Date of Birth',
            initialValue: '26/07/1988'
          },
          {
            name: 'gender',
            component: 'radio',
            caption: 'Gender',
            options: [
              { value: 'MALE', title: 'Male' },
              { value: 'FEMALE', title: 'Female' }
            ],
            initialValue: 'MALE'
          },
          {
            name: 'isUACitizen',
            component: 'radio',
            caption: 'Is Citizen of Ukraine',
            options: [
              { value: 'TRUE', title: 'YES' },
              { value: 'FALSE', title: 'NO' }
            ],
            initialValue: undefined
          },
          {
            name: 'SSN',
            type: 'number',
            component: 'input',
            caption: 'SSN',
            initialValue: '435i626758924'
          },
          {
            name: 'maritalStatus',
            component: 'select',
            caption: 'Marital Status',
            options: [
              { value: 'MARRIED', title: 'Married' },
              { value: 'DIVORCED', title: 'Divorced' },
              { value: 'WINDOW', title: 'Window' },
              { value: 'SEPARATED', title: 'Separated' },
              { value: 'SINGLE', title: 'Single' }
            ],
            initialValue: 'MARRIED'
          },
          {
            name: 'maidenName',
            component: 'input',
            caption: 'Maiden Name'
          }
        ]
      }
    ]
  },
  {
    name: 'step2',
    title: 'Step 2',
    sections: [
      {
        name: 'homeAddress',
        caption: 'Home Address',
        fields: [
          {
            name: 'addressLine1',
            component: 'input',
            caption: 'Address Line 1'
          },
          {
            name: 'addressLine2',
            component: 'input',
            caption: 'Address Line 2'
          },
          {
            name: 'city',
            component: 'input',
            caption: 'City'
          },
          {
            name: 'state',
            component: 'input',
            caption: 'state'
          },
          {
            name: 'zip',
            component: 'input',
            caption: 'Zip'
          },
          {
            name: 'monthOfMove',
            component: 'input',
            caption: 'Month/Year of move there',
            type: 'month'
          },
          {
            name: 'type',
            component: 'radio',
            caption: 'Type',
            options: [
              { value: 'OWNED', title: 'Owned' },
              { value: 'RENTED', title: 'Rented' },
              { value: 'OTHER', title: 'Other' }
            ],
            initialValue: 'OWNED'
          }
        ]
      }
    ]
  }
]

export default mockGraphqlData

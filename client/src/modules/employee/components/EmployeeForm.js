import React, { Component } from 'react';

import { Form, Input, Modal, Button } from 'semantic-ui-react';
import { withAddEmployee } from '../providers';

@withAddEmployee
export default class EmployeeForm extends Component {
  
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      open: false,
    }
  }

  toggleModal() {
    this.setState({ open: !this.state.open })
  }

  submitForm(event) {
    event.preventDefault();

    this.props.addEmployee({
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      dateOfBirth: event.target.dateOfBirth.value,
      primaryLanguage: event.target.primaryLanguage.value,
      languages: event.target.languages.value
    });
    this.toggleModal()
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleModal}>Add new employee</Button>
        <Modal open={this.state.open}>
        <Modal.Header>Create new employee</Modal.Header>
        <Modal.Content>
          <Form onSubmit={(event) => this.submitForm(event)} size={'small'} key={'small'}>
            <Form.Field widths='equal'>
              <label htmlFor="employeeFirstName">First Name</label>
              <input type="text" name="firstName" id="employeeFirstName" placeholder="Enter first name" />
            </Form.Field>
            <Form.Field widths='equal'>
              <label htmlFor="employeeLastName">Last Name</label>
              <input type="text" name="lastName" id="employeeLastName" placeholder="Enter last name" />
            </Form.Field>
            <Form.Field widths='equal'>
              <label htmlFor="employeeDateOfBirth">Date Of Birth</label>
              <input type="text" name="dateOfBirth" id="employeeDateOfBirth" placeholder="Enter dateOfBirth" />
            </Form.Field>
            <Form.Field widths='equal'>
              <label htmlFor="employeePrimaryLanguage">Primary Language</label>
              <input type="text" name="primaryLanguage" id="employeePrimaryLanguage" placeholder="Enter primaryLanguage" />
            </Form.Field>
            <Form.Field widths='equal'>
              <label htmlFor="employeeLanguages">Languages</label>
              <input type="text" name="languages" id="employeeLanguages" placeholder="Enter languages" />
            </Form.Field>
            <Button>Submit new employee</Button>
            <Button onClick={() => this.toggleModal()}>Cancel</Button>
          </Form>
        </Modal.Content>
      </Modal>
      </div>
    )
  }
}

import React, { Component } from 'react';

import { Table, Button, Modal, Form } from 'semantic-ui-react';
import { withRemoveEmployee, withUpdateEmployee, withEmployees } from '../providers'

@withRemoveEmployee
@withUpdateEmployee
@withEmployees
export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: null,
      open: false,
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      primaryLanguage: '',
      languages: ''

    }
    this.showEmployees = this.showEmployees.bind(this);
    this.edit = this.edit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  edit (employee) {
    this.setState({
      _id: employee._id,
      open: !this.state.open,
      firstName: employee.firstName,
      lastName: employee.lastName,
      dateOfBirth: employee.dateOfBirth,
      primaryLanguage: employee.primaryLanguage,
      languages: employee.languages
    })
  }

  toggleModal() {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange (value, filed) {
    this.setState({
      [filed]: value
    })
  }

  submitForm(event) {
    event.preventDefault();
    this.props.updateEmployee(this.state)
    this.toggleModal()
  }

  showEmployees() {
    const { employees=[], employeesLoading, removeEmployee } = this.props;

    console.log(this.props);

    if (!employeesLoading && employees.length > 0) {
       return (
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First name</Table.HeaderCell>
              <Table.HeaderCell>Last name</Table.HeaderCell>
              <Table.HeaderCell>Date of birth</Table.HeaderCell>
              <Table.HeaderCell>Primary language</Table.HeaderCell>
              <Table.HeaderCell>Languages</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {employees.map(employee => {
            return (
              <Table.Row key={employee._id}>
                <Table.Cell>{employee.firstName}</Table.Cell>
                <Table.Cell>{employee.lastName}</Table.Cell>
                <Table.Cell>{employee.dateOfBirth}</Table.Cell>
                <Table.Cell>{employee.primaryLanguage}</Table.Cell>
                <Table.Cell>{employee.languages}</Table.Cell>
                <Table.Cell>
                  <Button icon='delete' onClick={() => removeEmployee(employee._id)} />
                  <Button icon='edit' onClick={() => this.edit(employee)} />
                </Table.Cell>
              </Table.Row>
            );
          })}
          </Table.Body>
        </Table>
      )
    } else {
      return (
        <div>
          <h3>No employees available</h3>
          <p className="lead">Use the form on the right to create a new employee.</p>
        </div>
      );
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="employees-container">
        {this.showEmployees()}
        <Modal open={this.state.open}>
          <Modal.Header>Edit employee</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field widths='equal'>
                <label htmlFor="employeeFirstName">First Name</label>
                <input onChange={e => this.handleChange(e.target.value, 'firstName')} value={this.state.firstName} type="text" name="firstName" id="employeeFirstName" placeholder="Enter first name" />
              </Form.Field>
              <Form.Field widths='equal'>
                <label htmlFor="employeeLastName">Last Name</label>
                <input onChange={e => this.handleChange(e.target.value, 'lastName')} value={this.state.lastName} type="text" name="lastName" id="employeeLastName" placeholder="Enter last name" />
              </Form.Field>
              <Form.Field widths='equal'>
                <label htmlFor="employeeDateOfBirth">Date Of Birth</label>
                <input onChange={e => this.handleChange(e.target.value, 'dateOfBirth')} value={this.state.dateOfBirth} type="text" name="dateOfBirth" id="employeeDateOfBirth" placeholder="Enter dateOfBirth" />
              </Form.Field>
              <Form.Field widths='equal'>
                <label htmlFor="employeePrimaryLanguage">Primary Language</label>
                <input onChange={e => this.handleChange(e.target.value, 'primaryLanguage')} value={this.state.primaryLanguage} type="text" name="primaryLanguage" id="employeePrimaryLanguage" placeholder="Enter primaryLanguage" />
              </Form.Field>
              <Form.Field widths='equal'>
                <label htmlFor="employeeLanguages">Languages</label>
                <input onChange={e => this.handleChange(e.target.value, 'languages')} value={this.state.languages} type="text" name="languages" id="employeeLanguages" placeholder="Enter languages" />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={event => this.submitForm(event)}>Edit</Button>
            <Button onClick={() => this.toggleModal()}>Cancel</Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

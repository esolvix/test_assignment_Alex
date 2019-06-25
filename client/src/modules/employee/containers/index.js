import React, { Component } from 'react'

import { Container, Grid, Divider } from 'semantic-ui-react';
import { withEmployees } from '../providers';
import { EmployeeList, EmployeeForm } from '../components';

@withEmployees
class EmployeeRoot extends Component {
  render() {
    const { employees, employeesLoading } = this.props;

    return (
      <Container>
        <h2 className="employee-title">Employees Module</h2>
        <hr />
        <Grid.Row>
          <Grid.Column>
            <EmployeeList employeesLoading={employeesLoading} employees={employees} />
            <Divider />
          </Grid.Column>
          <Grid.Column>
          <EmployeeForm />
          </Grid.Column>
        </Grid.Row>
      </Container>
    );
  }
}

export default EmployeeRoot

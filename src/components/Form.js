import React, { Component } from "react";
import {
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class IncomeForm extends Component {
  state = {
    buttonValue: "Annually"
  };

  handleChange = e => {
    this.setState({
      buttonValue: e.target.value
    });
  };
  render() {
    const { buttonValue } = this.state;
    return (
      <Form data-test="component-form">
        <FormGroup>
          <Label for="salary" className="mr-sm-2">
            Your salary:{" "}
          </Label>
          <Input
            type="salary"
            name="salary"
            id="salary"
            data-test="component-input"
          />
          <UncontrolledDropdown className="btn-width">
            <DropdownToggle
              caret
              className="btn-width"
              data-test="component-button"
            >
              <span className="button-value">{buttonValue}</span>
            </DropdownToggle>
            <DropdownMenu className="btn-width">
              <DropdownItem onClick={this.handleChange} value="Monthly">
                Annually
              </DropdownItem>
              <DropdownItem onClick={this.handleChange} value="Monthly">
                Monthly
              </DropdownItem>
              <DropdownItem onClick={this.handleChange} value="Fortnightly">
                Fortnightly
              </DropdownItem>
              <DropdownItem onClick={this.handleChange} value="Weekly">
                Weekly
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </FormGroup>

        <FormGroup>
          <Label for="salary" className="mr-sm-2">
            Superannuation:{" "}
          </Label>
          <Input
            type="super"
            name="super"
            id="super"
            // data-test="component-input"
          />
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Include Super
          </Label>

          <Label check>
            <Input type="checkbox" /> Non-Resident
          </Label>

          <Label check>
            <Input type="checkbox" /> Student Loan
          </Label>
        </FormGroup>
      </Form>
    );
  }
}

export default IncomeForm;

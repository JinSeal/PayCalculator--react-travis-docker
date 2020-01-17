import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
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
      <Form inline data-test="component-form">
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
            {buttonValue}
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
      </Form>
    );
  }
}

export default IncomeForm;

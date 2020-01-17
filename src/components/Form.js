import React, { useState } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const IncomeForm = props => {
  const [value, setValue] = useState("Annually");

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <Form inline data-test="component-form">
      <Label for="salary" className="mr-sm-2">
        Your salary:{" "}
      </Label>
      <Input type="salary" name="salary" id="salary" />
      <UncontrolledDropdown className="btn-width">
        <DropdownToggle caret className="btn-width">
          {value}
        </DropdownToggle>
        <DropdownMenu className="btn-width">
          <DropdownItem onClick={handleChange} value="Monthly">
            Annually
          </DropdownItem>
          <DropdownItem onClick={handleChange} value="Monthly">
            Monthly
          </DropdownItem>
          <DropdownItem onClick={handleChange} value="Fortnightly">
            Fortnightly
          </DropdownItem>
          <DropdownItem onClick={handleChange} value="Weekly">
            Weekly
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Form>
  );
};

export default IncomeForm;

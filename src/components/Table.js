import React, { Component } from "react";
import { Table } from "reactstrap";

class TableView extends Component {
  render() {
    return (
      <Table size="sm">
        <thead>
          <tr>
            <th>2019-2020</th>
            <th>Weekly</th>
            <th>Fortnigntly</th>
            <th>Monthly</th>
            <th>Annually</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Taxable Income</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Superannuation</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Total Taxes</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Income Tax</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Medicare</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Other taxes and Levies</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Tax Offset</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default TableView;

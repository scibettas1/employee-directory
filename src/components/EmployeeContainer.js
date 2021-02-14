import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    API.search()
      .then((res) => {
        //console.log(res.data.results)
        var employeeArray = res.data.results.map((employee)=>{
          //console.log(employee)
          return {
            name: employee.name.first + " " + employee.name.last,
            country: employee.location.country,
            email: employee.email,
            picture: employee.picture.thumbnail
          }
        })
        //console.log(employeeArray)
         this.setState({ result: employeeArray })
         console.log(this.state)
        })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.componentDidMount(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Name || "Search for an Employee"}
            >
              {this.state.result.length !== 0 ? (
                <EmployeeDetail
                  employee={this.state.result[0]}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeContainer;

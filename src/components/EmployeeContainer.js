import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
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
        var employeeArray = res.data.results.map((employee) => {
          //console.log(employee)
          return {
            name: employee.name.first + " " + employee.name.last,
            country: employee.location.country,
            email: employee.email,
            picture: employee.picture.large
          }
        })
        console.log(employeeArray)
        this.setState({ result: employeeArray })
        //console.log(this.state)
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value.toLowerCase();
    const temp = this.state.result.filter(employee => employee.name.toLowerCase().includes(value));
    this.setState({
      search: value,
      result: temp,
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    // this.componentDidMount(this.state.search);
    console.log(this.state.search)
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Name || "Search for an Employee"}>
              {this.state.result.length !== 0 ? (
                this.state.result.map(employee => {
                  return (
                    <div>
                      <img src={employee.picture} alt={employee.title} className="img-fluid" />
                      <p>Name: {employee.name}</p>
                      <p>Country: {employee.country}</p>
                      <p>Email: {employee.email}</p>
                    </div>
                  );
                })
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

import React from "react";

function EmployeeDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Name: {this.state.result.results.name.first} + {props.name.first}</h3>
      <h3>Country: {props.location.country}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  );
}

export default EmployeeDetail;

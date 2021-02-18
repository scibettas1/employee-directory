import React from "react";

function EmployeeDetail(props) {
  //console.log(props)
  return (
    <div>
      <img src={props.picture} alt={props.title} className="img-fluid" />
      <p>Name: {props.name}</p>
      <p>Country: {props.employee.country}</p>
      <p>Email: {props.employee.email}</p>
    </div>
  );
}

export default EmployeeDetail;

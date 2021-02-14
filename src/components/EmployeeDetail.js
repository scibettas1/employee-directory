import React from "react";

function EmployeeDetail(props) {
  console.log(props)
  return (
    <div>
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <p>Name: {props.employee.name}</p>
      <p>Country: {props.employee.country}</p>
      <p>Email: {props.employee.email}</p>
    </div>
  );
}

export default EmployeeDetail;

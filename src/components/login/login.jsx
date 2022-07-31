import React from "react";
import "../login/login.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
// import { config } from "./config";
import {
  MDBInput,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
// validation
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email address";
  }
  return errors;
};
// values
export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      pass: "",
    },
    validate,
    // submit
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <MDBContainer className="loginform">
      <div className="d-flex flex-wrap justify-content-center align-items-center mt-3 gap-5">
        <img alt="example" className="img-fluid headerimg" src="./crm.png" />
        <form onSubmit={formik.handleSubmit}>
          <h1 className="p-3">Login User Account</h1>
          <MDBInput
            className="mb-4"
            type="email"
            Name="email"
            label="Email address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />{formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
          
          <MDBInput className="mb-4" type="password" label="Password" Name="pass" onChange={formik.handleChange}
            value={formik.values.pass}/>
          <MDBBtn type={"submit"} value="Submit" className="mb-4" block>
            Sign in
          </MDBBtn>
          <div className="text-center">
            <p>
              Not a member? <Link to="/signup">Register User</Link>
            </p>
            <p>
              Admin <Link to="/signup">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </MDBContainer>
  );
}

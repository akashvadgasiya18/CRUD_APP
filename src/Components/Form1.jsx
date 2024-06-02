import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form1 = () => {
  const [values, setValues] = useState({
    fname: "",
    email: "",
    pass: "",
    mno: "",
    address: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setValues((preval) => {
      return {
        ...preval, [name]: value
      }
    })
  }

  const addData = async (e) => {
    e.preventDefault();

    const { fname, email, pass, mno, address } = values;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname, email, pass, mno, address
      })
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");
      alert("error");
    }
    else {
      alert("data added..");
      console.log("data addedd..");
    }
  }

  return (
    <>
      <div class="container">

        <div class="row justify-content-center mt-5">
          <div class="col-lg-6">
            <Link to="/">
              <i class="fa-solid fa-arrow-left mr-2"></i>Back
            </Link>

            <form method="POST" className="mt-5">
              <h1 style={{ justifyContent: 'center', textAlign: 'center', marginBottom: '2rem' }}>ADD NEW DATA</h1>
              <div class="mb-3">
                <label class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="fname"
                  class="form-control"
                  onChange={setdata}
                  value={values.fname}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  onChange={setdata}
                  value={values.email}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="pass"
                  class="form-control"
                  onChange={setdata}
                  value={values.pass}
                />
              </div>

              <div class="mb-3">
                <label class="form-label">
                  Mobile no
                </label>
                <input
                  type="text"
                  name="mno"
                  class="form-control"
                  onChange={setdata}
                  value={values.mno}
                />
              </div>

              <div class="mb-3">
                <label class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  class="form-control"

                  onChange={setdata}
                  value={values.address}
                />
              </div>

              <button type="submit" onClick={addData} class="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form1;

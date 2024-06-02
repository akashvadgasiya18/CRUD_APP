import React, { useEffect, useState } from "react";
import "../Components/css/view.css";
import { Link, useParams } from "react-router-dom";

const ViewData = () => {

  const { id } = useParams("");
  console.log(id);

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getDatas = async (e) => {

    const res = await fetch(`/getdata/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");
    }
    else {
      setUserdata(data);
      console.log("Get data");
    }
  }

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      <div>
        <div style={{ margin: "20px 20px" }}>
          <Link to="/">
            <i class="fa-solid fa-arrow-left mr-2"></i>Back
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div class="card">
            <h1>Welcome ! {getuserdata.fname}</h1>
            <p>
              <b>Email</b>: {getuserdata.email}
            </p>
            <p>
              <b>password </b>: {getuserdata.pass}
            </p>
            <p>
              <b>Phone</b>: {getuserdata.mno}
            </p>
            <p>
              <b>Address</b> : {getuserdata.address}
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link to={`/editdata/${id}`}>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </button>
              </Link>
              <buttonx
                type="button"
                class="btn btn-danger"
                style={{ marginRight: "10px" }}
              >
                Delete
              </buttonx>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default ViewData;

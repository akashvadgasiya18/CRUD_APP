import React, { useEffect, useState } from 'react'
import { Link, useParams,} from 'react-router-dom';

const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

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

    const { id } = useParams("");
    console.log(id);

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
            setValues(data);
            console.log("Get data");
        }
    }

    useEffect(() => {
        getDatas();
    }, []);

    const updateUserData = async (e) => {
        e.preventDefault();

        const { fname, email, pass, mno, address } = values;

        const res2 = await fetch(`/updateuser/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fname, email, pass, mno, address
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 404 || !data2) {
            alert("error");
        }
        else {
            setValues(data2);
            alert("data updated..");
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

                        <form className="mt-5">
                            <h1 style={{ justifyContent: 'center', textAlign: 'center', marginBottom: '2rem' }}>EDIT DATA</h1>

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

                            <button type="submit" onClick={updateUserData} class="btn btn-primary">
                                Edit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const getData = async (e) => {

        const res = await fetch("/getdata", {
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
        getData();
    }, [])

    const deleteUser = async (id) => {
        const res3 = await fetch(`/deleteuser/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data3 = await res3.json();
        console.log(data3);

        if (res3.status === 404 || !data3) {
            console.log("error");
        }
        else {
            console.log("user deleted...");
            getData();
        }
    }


    return (
        <>
            <div className="mt-5">
                <div className="container" style={{ overflow: 'auto' }}>
                    <div className="add_btn mt-2">
                        <div style={{ justifyContent: 'center', textAlign: 'center', marginBottom: '5rem' }}>
                            <h1 style={{ fontWeight: '700' }}>CURD OPERATION</h1>
                        </div>
                        <Link to='/addForm'>
                            <button className='btn btn-primary'><i class="fa-sharp fa-solid fa-plus mr-2"></i>ADD NEW</button>
                        </Link>
                    </div>

                    <table class="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Mobile No</th>
                                <th scope="col">Address</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getuserdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{element.fname}</td>
                                                <td>{element.email}</td>
                                                <td>{element.pass}</td>
                                                <td>{element.mno}</td>
                                                <td>{element.address}</td>
                                                <td>
                                                    <Link to={`viewdata/${element._id}`}><button type="button" class="btn btn-success" style={{ marginRight: '10px' }}>view</button></Link>
                                                    <Link to={`editdata/${element._id}`}><button type="button" class="btn btn-primary" style={{ marginRight: '10px' }}>Edit</button></Link>
                                                    <button type="button" onClick={() => deleteUser(element._id)} class="btn btn-danger" style={{ marginRight: '10px' }}>Delete</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }


                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default Home

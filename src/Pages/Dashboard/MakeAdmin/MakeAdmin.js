import axios from 'axios';
import React from 'react';
import Drawers from '../Drawers/Drawers';

const MakeAdmin = () => {
    const [email, setEmail] = React.useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        axios.put('https://vast-mesa-82001.herokuapp.com/person/admin', user)
            .then(data => {
                console.log(data.data);
                if (data.data.upsertedCount) {
                    alert("new admin added");
                }
                else {
                    alert("something went wrong");
                }
            })
        e.preventDefault();
    }

    return (
        <div className="container-fluid ">
            <div className="row">
                <Drawers></Drawers>
                <div className="col-md-9 bg-info p-md-5">
                    <h1>Make a admin</h1>
                    <form onSubmit={handleAdminSubmit}>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1"

                                className="form-label">Email address</label>
                            <div className="col-md-6 col-sm-12">
                                <input
                                    type="email"
                                    onBlur={handleOnBlur}
                                    className="form-control "
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="new admin email"
                                />
                            </div>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <button type="submit" className="btn btn-warning">Make Admin</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
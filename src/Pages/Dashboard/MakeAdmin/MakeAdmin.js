import React from 'react';

const MakeAdmin = () => {
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const [email, setEmail] = React.useState('');


    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://vast-mesa-82001.herokuapp.com/person/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    alert("new admin added");
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <div className="my-5 ms-5">
            <h1>Make a admin</h1>
            <form onSubmit={handleAdminSubmit}>

                    <div class="mb-3">
                    <label for="exampleInputEmail1" 
                    
                    class="form-label">Email address</label>
                    <input type="email" onBlur={handleOnBlur} className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-warning">Make Admin</button>
            </form>
        </div>
        </div>
    );
};

export default MakeAdmin;
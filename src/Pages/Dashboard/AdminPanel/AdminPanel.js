import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Drawers from '../Drawers/Drawers';

const AdminPanel = () => {
    const { user, admin } = useAuth();
    return (
        <div className="container-fluid">
            <div className="row">
                <Drawers></Drawers>
                <div className="col-md-9  bg-info">
                    <div className="container mt-5">
                        <div className="row justify-content-center align-items-center">
                            <div className="text-center">
                                <h4>{user.displayName}</h4>
                            </div>
                            <div className="text-center">
                                <img className="rounded-circle mb-2" style={{ width: "100px" }} src={user.urlPhoto ? user.urlPhoto : "https://i.ibb.co/ZVL2SBL/rounded-profile-pic.jpg"} alt="..." />
                            </div>
                            <div className="mx-4">
                                {admin ? (<p className="text-center">Role: Admin</p>) : (<p className="text-center">Role: User</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
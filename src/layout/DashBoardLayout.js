import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import UseAdmin from '../hooks/useAdmin';
import Header from '../shares/header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)


    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="drawer-button" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                    {/* <label htmlFor="drawer-button" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-button" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        {isAdmin && <>
                            <li><Link to='/dashboard/allusers'>All Users</Link></li>
                            <li><Link to='/dashboard/adddoctor'>Add A Doctor</Link></li>
                            <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                        </>}
                        {/* <li><Link to='/dashboard/allusers'>All Users</Link></li> */}
                    </ul>

                </div>
            </div>
        </div>
    );


};

export default DashboardLayout;
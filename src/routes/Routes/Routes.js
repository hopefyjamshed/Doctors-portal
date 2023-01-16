import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Appointment from "../../pages/appointment/Appointment/Appointment";
import Dashboard from "../../dashboard/dashboard/Dashboard";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signUp/SignUp";
import PrivateRoute from "../privateRoutes/PrivateRoute";
import DashboardLayout from "../../layout/DashBoardLayout";
import MyApppointments from "../../dashboard/myAppointment/MyApppointments";
import AllUsers from "../../pages/allUsers/AllUsers";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import AddDoctor from "../../dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../dashboard/manageDoctors/ManageDoctors";
import Page from "../../pages/error/Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <Page></Page>
            }


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyApppointments></MyApppointments>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            }

        ]
    }
])

export default router;
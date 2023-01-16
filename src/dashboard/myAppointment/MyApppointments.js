
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyApppointments = () => {
    const { user } = useContext(AuthContext)

    const url = `https://doctos-portal-server.vercel.app/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <h1 className='text-3xl'>My Appointments</h1>

            <div className="overflow-x-auto mt-20">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) => <tr
                                key={booking._id} className='hover'>
                                <th>{i + 1}</th>
                                <td>{booking.displayName}</td>
                                <td>{booking.serviceName}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.bookingDate}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApppointments;
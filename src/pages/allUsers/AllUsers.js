import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const url = 'https://doctos-portal-server.vercel.app/users'
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })


    const handleAdmin = (id) => {
        fetch(`https://doctos-portal-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin selected successfully')
                    refetch()
                }
            })
    }

    return (
        <div>
            <h1 className="text-4xl"> Users</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.role !== 'admin'
                                        && <button onClick={() => handleAdmin(user._id)} className='btn btn-primary'>Make Admin</button>
                                    }</td>
                                    <td><button className='btn bg-red-600 hover:bg-red-800 text-white border-none'>Delete</button></td>
                                </tr>
                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
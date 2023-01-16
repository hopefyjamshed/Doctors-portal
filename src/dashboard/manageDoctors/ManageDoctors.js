import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../shares/confirmationModal/ConfirmationModal';
import Loading from '../../shares/loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)

    const handleCancel = () => {
        return setDeletingDoctor(null)
    }





    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctos-portal-server.vercel.app/doctors')
                const data = await res.json()
                return data
            }
            catch (error) {

            }
        }
    })


    const handleSuccessDelete = (deletingDoctor) => {
        fetch(`https://doctos-portal-server.vercel.app/doctors/${deletingDoctor._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${deletingDoctor.name} deleted successfully`)
                    refetch()
                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-4xl">Manage Doctors {doctors?.length}</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <td className='font-bold'>{i + 1}</td>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{doctor.name}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {doctor.specialty}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">oral care</span>
                                </td>
                                <td>{doctor.email}</td>
                                <th>


                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-error">Delete</label>


                                </th>
                            </tr>)
                        }



                    </tbody>



                </table>
            </div>

            <>
                {
                    deletingDoctor && <ConfirmationModal
                        deletingDoctor={deletingDoctor}
                        title={'Are You sure You want to delete?'}
                        message={`If You Delete ${deletingDoctor.name}, it cannot be undone`}
                        actionSucces={handleSuccessDelete}
                        modalData={deletingDoctor}
                        successBtnName={'Delete'}
                        handleCancel={handleCancel}
                    ></ConfirmationModal>

                }
            </>
        </div>
    );
};

export default ManageDoctors;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_api
    const navigate = useNavigate()

    const { data: specialties = [] } = useQuery({
        queryKey: ['specialties'],
        queryFn: async () => {
            const res = await fetch('https://doctos-portal-server.vercel.app/appointmentspecialty')
            const data = await res.json()
            return data
        }
    })

    const handleAddDoctor = data => {
        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?&key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {


                    const doctor = {
                        name: data.Name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    console.log(doctor)

                    fetch('https://doctos-portal-server.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(doctorsdata => {
                            console.log(doctorsdata)
                            toast.success(`${data.Name} added successfully`)
                            navigate('/dashboard/managedoctors')
                        })
                }

            })
    }
    return (
        <div>


            <div className='flex'>
                <div className=' shadow-xl py-12 px-7 rounded-lg'>
                    <h1 className='text-4xl text-center'>Add A Doctor</h1>
                    <form className='' onSubmit={handleSubmit(handleAddDoctor)} >



                        <div className=" form-control lg:w-[390px] ">
                            {/* name */}

                            <label className="label">
                                <span className="label-text">Enter Your Name</span>
                            </label>
                            <input type='text' {...register("Name", { required: 'name is required' })} name='Name' className="input input-bordered w-full" />
                            {errors.Name && <p className='text-red-600'>{errors.name.message}</p>}
                            {/* email */}

                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input type="email" {...register("email", { required: 'email is required' })} name='email' className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                            {/* password  */}

                            <label className="label">
                                <span className="label-text">specialty</span>

                            </label>
                            <select  {...register("specialty")} className="select select-bordered w-full ">

                                {
                                    specialties.map(specialty =>
                                        <option
                                            key={specialty._id}
                                            value={specialty.name}
                                        >{specialty.name}</option>
                                    )
                                }


                            </select>
                        </div>
                        <label className="label">
                            <span className="label-text">Upload A Photo</span>
                        </label>
                        <input type='file' {...register("img", { required: 'img is required' })} name='img' className="input input-bordered w-full p-2" />
                        {errors.img && <p className='text-red-600'>{errors.name.message}</p>}


                        <input className='btn btn-accent text-white w-full mt-5' type="submit" value='Submit' />
                        <div className='mt-6'>

                        </div>





                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddDoctor;
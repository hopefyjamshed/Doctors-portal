
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, google } = useContext(AuthContext)

    const [signupError, setSignupError] = useState('')
    const handleSignup = data => {
        setSignupError('')
        console.log(data)


        createUser(data.email, data.password)

            .then(Result => {
                const user = Result.user
                toast.success('user created successfully!')
                console.log(user)
                const userInfo = {
                    displayName: data.Name

                }


                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.Name, data.email)
                    })
                    .catch(err => {

                        console.error(err.message)
                    })



            })
            .catch(err => {
                console.error(err)
                setSignupError(err.message)
            })

    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctos-portal-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                getUserToken(email)

            })
    }

    const handleGoogleLogin = () => {
        google()
            .then()
            .catch(err => {
                console.error(err)
            })
    }

    const getUserToken = email => {
        fetch(`https://doctos-portal-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    navigate('/')
                }
            })
    }



    return (
        <div className=' h-[800px] flex flex-col items-center justify-center'>
            <div className=' shadow-xl py-12 px-7 rounded-lg'>
                <h1 className='text-4xl text-center'>SignUp</h1>
                <form className='' onSubmit={handleSubmit(handleSignup)} >



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
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" {...register("password", {
                            required: 'password is required',
                            minLength: { value: 6, message: 'password should be 6character or longer' },
                            pattern: { value: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/, message: 'password should have one upperCase ,one lowerCase one special letter ' }
                        },

                        )} name='password' className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>



                    <input className='btn btn-accent text-white w-full mt-5' type="submit" value='Register' />
                    <div className='mt-6'>
                        {
                            signupError && <p className='text-red-600'>{signupError}</p>
                        }
                    </div>

                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>
                <p className='mt-3'>Already Have An Account? <Link className='text-secondary' to='/login'>Please Login!</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
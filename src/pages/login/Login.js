import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [loginError, setLoginError] = useState('')
    const { user, login, google } = useContext(AuthContext)


    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleGoogleLogin = () => {
        google()
            .then()
            .catch(err => {
                console.error(err)
            })
    }


    const handleLogin = data => {
        setLoginError('')
        console.log(data)

        login(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('user logged in successfully!')
                navigate(from, { replace: true })

            })
            .catch(err => {
                setLoginError(err.message)
                console.error(err)
            })
    }

    return (
        <div className=' h-[800px] flex flex-col items-center justify-center'>
            <div className=' shadow-xl py-12 px-7 rounded-lg'>
                <h1 className='text-4xl text-center'>Login</h1>

                <form className='' onSubmit={handleSubmit(handleLogin)}>



                    <div className=" form-control lg:w-[390px] ">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="email" name='email' className="input input-bordered w-full" {...register("email", { required: 'email is required' })} />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" name='password' className="input input-bordered w-full" {...register("password", {
                            required: 'password is required',
                            minLength: { value: 6, message: 'password must be 6character or longer' }
                        })} />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <label className="label">
                        <span className="label-text">Forgot Password?</span>

                    </label>


                    <input className='btn btn-accent text-white w-full mt-5' type="submit" />

                    <div>
                        {
                            loginError && <p className='text-red-600 mt-5'>{loginError}</p>
                        }
                    </div>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>
                <p className='mt-3'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
            </div>
        </div>
    );
};

export default Login;
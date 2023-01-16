import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryBtn from '../../../components/shortComponents/primaryBtn/PrimaryBtn';

const Banner = () => {
    return (
        <div className="hero lg:pr-9 lg:pl-12 pb-20 lg:pb-52 lg:pt-52" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse lg:cols-6 ">
                <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold font-OpenSans text-accent ">Your New Smile Starts Here</h1>
                    <p className="py-6 font-OpenSans text-4 text-accent">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;
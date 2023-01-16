import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {/* first div  */}
            <div className='pl-7 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center'>
                <div className=' my-12'>
                    <img src={clock} alt="" />
                </div>
                <div className='ml-6 mr-6 text-white'>
                    <h1 className='text-xl font-bold'>Opening Hours</h1>
                    <p className=''>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            {/* second div  */}
            <div className='pl-7 rounded-lg bg-accent flex items-center'>
                <div className='my-12'>
                    <img src={location} alt="" />
                </div>
                <div className='ml-6 mr-6 text-white'>
                    <h1 className='text-xl font-bold'>Visit our location</h1>
                    <p className=''>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            {/* third div  */}
            <div className='pl-7 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center'>
                <div className='my-12'>
                    <img className='text-3xl' src={phone} alt="" />
                </div>
                <div className='ml-6 mr-6 text-white'>
                    <h1 className='text-xl font-bold'>Contact us now</h1>
                    <p className=''>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Info;
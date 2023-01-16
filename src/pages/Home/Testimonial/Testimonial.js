import React from 'react';
import img1 from '../../../assets/images/people1.png'
import img2 from '../../../assets/images/people2.png'
import img3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';
import quat from '../../../assets/icons/quote.svg'

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            detail: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            address: 'California',
            img: img1
        },
        {
            id: 2,
            detail: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Alita',
            address: 'Texas',
            img: img2
        },
        {
            id: 3,
            detail: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'leera',
            address: 'penssylvania',
            img: img3
        }
    ]
    return (
        // style={{
        //     background: `url(${quat})`,
        //     backgroundRepeat: " no-repeat",
        //     backgroundPosition: 'right',
        //     height: '200px',

        // }}
        <div className='mt-24'>

            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary text-5 font-bold'>Testimonial</h3>
                    <h2 className='text-4xl font-openSens mt-3 mb-36'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quat} alt="" />
                </div>
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-14'>
                {
                    testimonials.map(testimonial => <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                    ></TestimonialCard>)
                }
            </div>
        </div >
    );
};

export default Testimonial;
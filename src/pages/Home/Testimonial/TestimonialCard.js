import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { detail, name, img, address } = testimonial
    return (
        <div className='shadow-2xl px-7 py-9 rounded-lg'>
            <p className='text-4'>{detail}</p>
            <div className='flex items-center mt-9'>
                <div>

                    <img className='w-16 border border-primary rounded-full border-4' src={img} alt="" />
                </div>
                <div className='ml-4'>
                    <h3 className='text-5 font-semibold text-accent'>{name}</h3>
                    <p className='text-accent'>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
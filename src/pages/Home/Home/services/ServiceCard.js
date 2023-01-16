import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, icon, para, } = service
    return (
        <div className=''>
            <div className='shadow-2xl rounded-2xl p-9'>
                <img className='mx-auto' src={icon} alt="" />
                <h2 className='mt-9 font-semibold text-xl text-accent'>{title}</h2>
                <p className='mt-2 text-accent font-sans'>{para}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
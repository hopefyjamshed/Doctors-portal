import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import teeth from '../../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            para: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
        },
        {
            id: 2,
            title: 'Cavity Filling',
            para: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            para: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: teeth,
        },
    ]
    return (
        <div className='text-center mt-32'>
            <h3 className='text-primary text-5 font-bold'>OUR SERVICES</h3>
            <h2 className='mt-2 text-4xl text-accent'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-16'>
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
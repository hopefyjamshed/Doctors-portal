import React from 'react';
import PrimaryBtn from '../../../components/shortComponents/primaryBtn/PrimaryBtn';

const ServiceAppointment = ({ service, setServiceModal }) => {
    const { name, slots, price } = service
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-secondary font-bold text-center mb-3">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : 'Please Try Another Day'}</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <p className='text-center mt-2'>price: ${price}</p>
                <div className="card-actions justify-center">

                    {slots.length > 0 ?
                        <label onClick={() => setServiceModal(service)} htmlFor="Booking-Modal" className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white mt-4">BOOK APPOINTMENT</label>
                        :
                        <label onClick={() => setServiceModal(service)} htmlFor="Booking-Modal" className="btn btn-primary  bg-gradient-to-r from-primary to-secondary  text-white mt-4" disabled>BOOK APPOINTMENT</label>}
                </div>
            </div>
        </div>
    );
};

export default ServiceAppointment;
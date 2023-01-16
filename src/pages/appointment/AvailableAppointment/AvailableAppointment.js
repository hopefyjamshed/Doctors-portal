
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../../shares/loading/Loading';
import Modal from '../AppointmentModal/Modal';
import ServiceAppointment from '../serviceAppointment/ServiceAppointment';

const AvailableAppointment = ({ selectedDate }) => {
    // const [services, setServices] = useState([])
    const date = format(selectedDate, 'PP')
    const [serviceModal, setServiceModal] = useState(null)
    const { data: services = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://doctos-portal-server.vercel.app/appointmentOptions?date=${date}`)
            const data = res.json()

            return data
        }

    })
    if (isLoading) {
        return <Loading></Loading>

    }


    // useEffect(() => {
    //     fetch('https://doctos-portal-server.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <section className='lg:mt-9'>
            <p className='text-2xl text-secondary font-bold text-center'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-9 mb-12 lg:mt-24'>
                {
                    services.map(service => <ServiceAppointment
                        key={service._id}
                        service={service}
                        setServiceModal={setServiceModal}

                    ></ServiceAppointment>)
                }
            </div>
            {serviceModal &&
                <Modal serviceModal={serviceModal}
                    selectedDate={selectedDate}
                    setServiceModal={setServiceModal}
                    refetch={refetch}
                ></Modal>}
        </section>
    );
};

export default AvailableAppointment;
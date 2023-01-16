import React from 'react';
import doc from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../../components/shortComponents/primaryBtn/PrimaryBtn';

const MakeAppointment = () => {
    return (
        <section className='mt-44'>
            <div style={{
                background: ` URL(${appointment})`
            }} className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doc} className="lg:w-1/2 hidden lg:block -mb-4 -mt-32 rounded-lg " alt='' />
                    <div className='py-16 px-7'>
                        <h3 className='text-primary font-bold text-5 mb-4'>Appointment</h3>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryBtn>Appointment</PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
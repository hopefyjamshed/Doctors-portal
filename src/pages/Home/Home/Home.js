import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../contact/ContactUs';
import Info from '../info/Info';
import MakeAppointment from '../makeAppointment/MakeAppointment';
import Terms from '../terms/Terms';
import Testimonial from '../Testimonial/Testimonial';
import Services from './services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <div>
                <Banner></Banner>
                <Info></Info>
            </div>
            <div>
                <Services></Services>
                <Terms></Terms>

            </div>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
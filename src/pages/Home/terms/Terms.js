import React from 'react';
import treat from '../../../assets/images/treatment.png'

const Terms = () => {
    return (
        // style={{ "height": "576px", 'width': '458px' }}
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treat} className="lg:mx-12 w-full lg:w-5/12  mt-14 lg:mb-9  lg:ml-33 rounded-lg shadow-2xl" alt='' />
                <div className='lg:ml-16 mt-8 lg:py-52 lg:mr-24'>
                    <h1 className="text-5xl font-bold text-accent font-openSens">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 mb-12 font-openSens">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page .</p>
                    <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Terms;
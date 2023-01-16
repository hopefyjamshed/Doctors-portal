import React from 'react';
import bg from '../../../assets/images/appointment.png';
import PrimaryBtn from '../../../components/shortComponents/primaryBtn/PrimaryBtn';

const ContactUs = () => {

    const handleReview = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const subject = form.subject.value
        const message = form.message.value
        console.log(email, subject, message)
    }
    return (
        <section className='mt-36'>
            <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className=' py-20 px-9 lg:px-96 lg:py-16'>
                        <div className='text-center mb-10'>
                            <h3 className='text-5 font-bold text-primary'>Contact Us</h3>
                            <h2 className='text-4xl font-openSens mt-3'>Stay connected with us</h2>
                        </div>
                        <form onSubmit={handleReview}>
                            <input name='email' type="email" placeholder="Your Email" className="input w-full" />

                            <input name='subject' type="text" placeholder="Subject" className="input mt-5 w-full " />

                            <textarea name='message' className="textarea mt-5 w-full" placeholder="Your message"></textarea>
                            <input className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white mt-9 px-9 py-4" type="submit" value='submit' />
                        </form>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default ContactUs;
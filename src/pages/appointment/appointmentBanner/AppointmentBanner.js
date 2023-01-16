import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bg from '../../../assets/images/bg.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {



    return (
        <header className='lg:pt-44 lg:pb-56 lg:pl-52 lg:pr-32'
            style={{
                background: `url(${bg})`,

            }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} className="w-full lg:w-1/2 rounded-lg shadow-2xl lg:ml-32" alt='dentist chair' />
                    <div className='flex-row'>
                        <div className='bg-white shadow-2xl rounded-lg'>
                            <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={(selectedDate) => {
                                    if (selectedDate) {
                                        setSelectedDate(selectedDate)
                                    }
                                }}

                            />
                        </div>

                    </div>

                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;
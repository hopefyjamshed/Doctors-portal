import { format } from 'date-fns';
import React, { useContext } from 'react';
import { SelectSingleContext } from 'react-day-picker';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Modal = ({ serviceModal, selectedDate, setServiceModal, refetch }) => {

    const { user } = useContext(AuthContext)
    const { name, slots } = serviceModal
    const date = format(selectedDate, 'PP')
    const handleBooking = event => {
        event.preventDefault()

        const form = event.target
        const slot = form.slot.value
        const Name = form.Name.value
        const email = form.email.value
        const phone = form.phone.value
        const Booking = {
            appointmentDate: date,
            serviceName: name,
            patientsName: Name,
            bookingDate: slot,
            email,
            phone,
        }
        fetch(`https://doctos-portal-server.vercel.app/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Booking received successfully')
                    setServiceModal(null)
                    refetch()
                }
                else {
                    toast.error(data.message)
                }

            })

    }

    return (
        <>
            <input type="checkbox" id="Booking-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>


                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />

                        <select required name='slot' className="select select-bordered w-full ">
                            <option disabled selected>{
                                slots.length > 0 ? 'Pick your suitable Time' : 'Please try Another Day!'
                            }</option>

                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>

                        <input name='Name' type="text" disabled defaultValue={user?.displayName} className="input input-bordered w-full" />

                        <input name='email' type="email" disabled defaultValue={user?.email} className="input input-bordered w-full" />

                        <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full" />
                        <input className='btn btn-accent w-full text-white' type="submit" value="submit" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;
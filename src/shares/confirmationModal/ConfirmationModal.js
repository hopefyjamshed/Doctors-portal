import React from 'react';

const ConfirmationModal = ({ title, successBtnName, message, handleCancel, actionSucces, modalData }) => {


    return (
        <div>
            {/* The button to open modal */}
            <div className="modal-action">
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className=" modal duration-700 ">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => actionSucces(modalData)} htmlFor="confirmation-modal" className="btn">{successBtnName}</label>
                        <button onClick={handleCancel} className='btn btn-outline'>Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
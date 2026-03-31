import React from 'react';

const ErrorPageApp = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center py-20'>
            <div>
                <img src="https://i.ibb.co.com/zW1cJx4s/App-Error.png" alt="" />
            </div>
            <div className='text-center flex flex-col gap-2'>
                <h2 className='text-5xl font-semibold'>OPPS!! APP NOT FOUND</h2>
                <p className='text-xl text-[#627382]'>The App you are requesting is not found on our system.
                    please try another apps</p>
            </div>
        </div>
    );
};

export default ErrorPageApp;
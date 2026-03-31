import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center py-20'>
            <div>
                <img src="https://i.ibb.co.com/Y4Fsngx6/error-404.png" alt="" />
            </div>
            <div className='text-center flex flex-col gap-2'>
                <h2 className='text-5xl font-semibold'>Oops, page not found!</h2>
                <p className='text-xl text-[#627382]'>The page you are looking for is not available.</p>
            </div>
        </div>
    );
};

export default ErrorPage;
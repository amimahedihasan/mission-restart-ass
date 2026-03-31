import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { PiDownloadSimple } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router';
import LoadingSpinner from './LoadingSpinner';



const AppCard = ({ app }) => {
    const { title, image, downloads, ratingAvg, id } = app;
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            navigate(`/appDetails/${id}`);
        }, 300);
    };

    return (
        <div>
            <div onClick={handleClick} className="bg-gray-100 shadow-sm hover:scale-105 transition ease-in-out p-4">
                <div className='h-[316px] overflow-hidden'>
                    <img className='w-full h-full object-cover rounded-xl' src={image} alt="" />
                </div>
                <div className='p-4'>
                    <h2>{title}</h2>
                </div>
                <div className='flex justify-between items-center px-4 mb-4'>
                    <div className="badge bg-[#F1F5E8] text-[#00D390]">
                        <PiDownloadSimple className='w-[16px] h-[16px] text-[#54CF68]' />{downloads}</div>
                    <div className="badge bg-[#FFF0E1] text-[#FF8811]">
                        <FaStar className='w-[16px] h-[16px] text-[#FF8811]' />{ratingAvg}</div>
                </div>
            </div>
            {loading && <LoadingSpinner></LoadingSpinner>}
        </div>
    );
};

export default AppCard;
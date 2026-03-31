import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';
import { FaStar } from "react-icons/fa";
import { PiDownloadSimple } from "react-icons/pi";
import { BiLike } from 'react-icons/bi';


const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading, error } = useApps()

    const [installed, setInstalled] = useState(false)
    useEffect(() => {
        const existingList = JSON.parse(localStorage.getItem('installation')) || [];
        const isInstalled = existingList.some(a => String(a.id) === String(id));
        setInstalled(isInstalled);
    }, [id]);

    if (loading) return <p>Loading...</p>

    const app = apps.find(a => String(a.id) === id)
    const { image, companyName, size, title, description, ratingAvg, downloads, reviews } = app;

    const handleAddToInstallation = () => {

        const existingList = JSON.parse(localStorage.getItem('installation')) || [];
        let updatedList = []
        if (existingList) {
            const isDuplicate = existingList.some(a => a.id === app.id)
            if (isDuplicate) return toast("Already exist")
            updatedList = [...existingList, app]
        }
        else {
            updatedList.push(app)
        }

        localStorage.setItem('installation', JSON.stringify(updatedList))

        setInstalled(true)
        toast.success(`${title} App installed successfully`)
    }


    return (
        <section>
            {/* details */}
            <div className='flex justify-start item gap-10'>
                <div>
                    <img className='w-[350px] h-[350px]' src={image} alt="" />
                </div>

                <div className='flex flex-col justify-start items-start gap-7'>
                    <div>
                        <h2 className='text-3xl font-bold'>{title}</h2>
                        <p className='text-xl font-semibold'>Developed by
                            <span className='text-[#632EE3]'>{companyName}</span></p>
                    </div>

                    <div className='flex justify-start item gap-6'>

                        <div className='flex flex-col justify-center gap-2'>
                            <p><PiDownloadSimple className='w-[40px] h-[40px] text-[#54CF68]' /></p>
                            <p>Average Ratings</p>
                            <h2 className='text-4xl font-extrabold'>{downloads}</h2>
                        </div>
                        <div className='flex flex-col justify-center gap-2'>
                            <p><FaStar className='w-[40px] h-[40px] text-[#FF8811]' /></p>
                            <p>Average Ratings</p>
                            <h2 className='text-4xl font-extrabold'>{ratingAvg}</h2>
                        </div>
                        <div className='flex flex-col justify-center gap-2'>
                            <p><BiLike className='w-[40px] h-[40px] text-[#9F62F2]' /></p>
                            <p>Average Ratings</p>
                            <h2 className='text-4xl font-extrabold'>{reviews}</h2>
                        </div>

                    </div>
                    <button onClick={handleAddToInstallation} className='btn btn-outline bg-[#00d390]' disabled={installed}>
                        {installed ? "Installed" : `Install Now ${size}`}
                    </button>
                </div>
            </div>
            {/* chart */}
            <div className='space-y-3'>
                <h1 className='text-xl font-bold'>Ratings</h1>
                <div className='bg-base-100 rounded-xl p-4 h-80'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            
                            data={app.ratings}

                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis dataKey="count" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#FF8811" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            {/* description */}
            <div>
                <h2 className='text-2xl font-semibold mb-6'>Description</h2>
                <div>
                    <p className='text-[20px] text-[#627382]'>{description}</p>
                </div>
            </div>
        </section>
    );
};

export default AppDetails;
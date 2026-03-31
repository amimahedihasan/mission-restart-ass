import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';
import Banner from '../Components/Banner';
import LoadingSpinner from '../Components/LoadingSpinner';

const Home = () => {

    const { apps,  } = useApps()
    const navigate = useNavigate()
    const [btnLoading, setBtnLoading] = useState(false)

    const featuredApps = apps.slice(0, 8)

    const handleShowAll = () => {
        setBtnLoading(true)

        setTimeout(() => {
            setBtnLoading(false);
            navigate('/apps');
        }, 300);
    }

    return (
        <div>
            <Banner></Banner>
            <div>
                <div className='flex flex-col gap-4 text-center mb-[40px]'>
                    <h2 className='text-5xl font-bold'>Trending Apps</h2>
                    <p className='text-xl'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        featuredApps.map(app => (
                            <AppCard key={app.id} app={app}></AppCard>
                        ))
                    }
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <button onClick={handleShowAll} className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] 
                py-3 px-4 text-[16px] text-white">Show All</button>
                </div>
            </div>

            {btnLoading && <LoadingSpinner></LoadingSpinner>}

        </div>
    );

};

export default Home;
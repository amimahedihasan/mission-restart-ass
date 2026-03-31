import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import NoFoundApp from '../Components/NoFoundApp';
import LoadingSpinner from '../Components/LoadingSpinner';

const Apps = () => {
    const { apps } = useApps()
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false)
    const [searchedApps, setSearchedApps] = useState(apps)
    const term = search.trim().toLocaleLowerCase();


    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            if (term) {
                setSearchedApps(apps.filter(app => app.title.toLocaleLowerCase().includes(term)))
            } else {
                setSearchedApps(apps)
            }
            setLoading(false)
        }, 300);
        return () => clearTimeout(timer)
    }, [term, apps])



    return (
        <div>
            <div className='flex flex-col gap-4 text-center mb-[40px]'>
                <h2 className='text-5xl font-bold'>Our All Applications</h2>
                <p className='text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>



            <div className='flex flex-col gap-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='text-2xl font-semibold'>
                        <p><span>({searchedApps.length})</span> Apps Found</p>
                    </div>
                    <label className="input">
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)} type="search" placeholder="search Apps" />
                    </label>
                </div>


                {searchedApps.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            searchedApps.map(app => (
                                <AppCard key={app.id} app={app}></AppCard>
                            ))
                        }
                    </div>

                ) : (
                    <NoFoundApp></NoFoundApp>
                )}

                <div>
                    {loading && <LoadingSpinner></LoadingSpinner>}
                </div>
            </div>
        </div>
    );
};

export default Apps;
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Installed = () => {
    const [installation, setInstallatiion] = useState([])
    const [sort, setSort] = useState('none')

    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem('installation'))
        if (saveList) setInstallatiion(saveList)
    }, [])

    const sortedApps = (
        () => {
            if (sort === 'downloads-asc') {
                return [...installation].sort((a, b) => a.downloads - b.downloads)
            }
            else if (sort === 'downloads-desc') {
                return [...installation].sort((a, b) => b.downloads - a.downloads)
            }
            else {
                return installation
            }
        }
    )()


    const handleUninstall = (id) => {
        const existingList = JSON.parse(localStorage.getItem('installation'))

        const appToRemove = existingList.find(a => a.id === id)

        let updatedList = existingList.filter(a => a.id !== id)

        setInstallatiion(updatedList)
        localStorage.setItem('installation', JSON.stringify(updatedList))

        toast.success(`${appToRemove.title} Uninstalled successfully`)
    }


    return (
        <div>

            <div className='flex flex-col gap-4 text-center mb-[40px]'>
                <h2 className='text-5xl font-bold'>Your Installed Apps</h2>
                <p className='text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>


            <div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='text-2xl font-semibold'>
                            <p><span>{sortedApps.length}</span> Apps Found</p>
                        </div>
                        <label className='form-control w-full max-w-xs'>
                            <select className='select select-bordered' value={sort} onChange={e => setSort(e.target.value)}>
                                <option value="none">short by downloads</option>
                                <option value="downloads-asc">Low-&gt;High</option>
                                <option value="downloads-desc">High-&gt;Low</option>
                            </select>
                        </label>
                    </div>
                    <div className='space-y-4'>
                        {
                            sortedApps.map(a => (
                                <div key={a.id}>
                                    <div className='flex flex-row justify-between items-center p-4 bg-white shadow-sm '>
                                        <div className='flex gap-4'>
                                            <img className='w-[80px] h-[80px]' src={a.image} alt="" />
                                            <div className=''>
                                                <h2>{a.title}</h2>
                                                <div className='flex justify-start item gap-6'>
                                                    <p>{a.downloads}</p>
                                                    <p>{a.ratingAvg}</p>
                                                    <p>{a.size}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <button onClick={() => handleUninstall(a.id)} className='btn'>Uninstall</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Installed;
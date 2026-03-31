import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';

const Banner = () => {
    return (
        <section>

            <div>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='text-7xl font-bold text-center'>We Build <br /> <span className='text-[#9F62F2]'>Productive</span> Apps</h2>
                    <p className='text-[20px] text-[#627382] text-center'>At HERO.IO, we craft innovative apps
                        designed to make everyday life simpler, smarter, and more exciting. <br />
                        Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='pt-10'>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                        <div>
                            <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                                href="https://play.google.com/store/games?hl=en" target="_blank">
                                <FaGooglePlay className='text-[#47BCFF]' />Google Play</a>
                        </div>
                        <div>
                            <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                                href="https://www.apple.com/app-store/" target="_blank">
                                <FaAppStoreIos className='text-[#00BFFC]' />App Store</a>
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center pt-10 '>
                <img src="https://i.ibb.co.com/1JhCvJbV/hero.png" alt="" />
            </div>


            <div className='flex flex-col bg-gradient-to-r from-[#632ee3] to-[#9f62f2] mb-20 py-20'>
                <h2 className='text-5xl font-bold text-center text-white pt-10'>Trusted by Millions, Built for You</h2>
                <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center gap-6 text-white py-10'>
                    <div className='flex flex-col justify-start items-center gap-4'>
                        <p>Total Downloads</p>
                        <h2 className='text-6xl font-extrabold'>29.6M</h2>
                        <p>21% more than last month</p>
                    </div>
                    <div className='flex flex-col justify-start items-center gap-4'>
                        <p>Total Downloads</p>
                        <h2 className='text-6xl font-extrabold'>29.6M</h2>
                        <p>21% more than last month</p>
                    </div>
                    <div className='flex flex-col justify-start items-center gap-4'>
                        <p>Total Downloads</p>
                        <h2 className='text-6xl font-extrabold'>29.6M</h2>
                        <p>21% more than last month</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;
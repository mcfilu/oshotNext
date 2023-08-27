import React from 'react'
// import {  thermiva } from '../assets'
import thermiva from '../../public/thermiva.jpg';
import Image from 'next/image';

const OshotImage = () => {
  return (
    <div className={`flex w-full h-screen relative`}>
        <Image className={`w-screen h-screen object-cover`} src={thermiva} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
        <div className={`absolute left-[1.5vw] top-[28%] md:w-[45%]`}>
        {/* <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}> */}
                    {/* <h1 className={`text-gold1 text-[8vh] font-header mb-[3vh] mt-20 text-left`}>Vampire Breast Lift™ </h1> */}
                    <h2 className={`text-gold1 text-[8vh] font-header  mt-[3vh] text-left`}>Thermiva</h2>
                <h2 className={`text-gold1 text-[8vh] font-header mb-[1vh] text-left`}>Feminine Wellness</h2>
                        <h1 className={`text-white text-[2.2vh] md:text-[3vh] font-main mb-[1vh] text-left  w-full md:w-[65%]`}>Rejuvenate and Revitalize with Thermiva Feminine Wellness in London</h1>
                        <a href="#thermi_image" className={`text-gold1 hover-underline-animation2 text-left text-[2vh] font-main `}>READ MORE</a>
                       
                    {/* </div> */}
        </div>
        {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
    </div>
  )
}

export default OshotImage
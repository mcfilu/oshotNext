import React from 'react'
// import { oshot_image5, } from '../assets'
import oshot_image5 from '../../public/oshot5.jpg'

import Link from 'next/link'
import Image from 'next/image'

const OshotBenefits
 = () => {
  return (
    <div className={`flex w-full flex-row  md:min-h-[55vh]   `}>
        <div className={`hidden md:flex w-[45%]  flex  relative`}>
            {/* <video src={breastliftvideo} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
            <Image src={oshot_image5} className={`w-full h-full object-cover`} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
        </div>
        <div className={`hidden md:flex flex flex-col w-[55%] p-[2vh]  items-center`}>
            <h1 className={`text-gold1 text-[5vh] text-center font-header`}>O-Shot And G-Shot Benefits</h1>
            <p className={`text-white font-poppins text-[2.1vh] text-justify mt-[3vh] mb-[2vh] font-main`}>
The combined treatment of the O-Shot and G-Shot offers a remarkable solution for individuals seeking enhanced sexual pleasure and gratification. By effectively increasing blood flow to the genitals and stimulating sensitive areas, this innovative treatment can yield a multitude of benefits:</p>
            <ul className={`text-white text-[2.1vh] font-poppins w-full items-left`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Experience heightened sensation and pleasure, leading to more intense and fulfilling orgasms.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Boost sex drive and libido, reigniting passion and desire for a more satisfying sexual experience.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Amplify and enhance the G-spot, increasing sexual stimulation and pleasure during intimate moments.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Rejuvenate the vaginal tissues involved in the female orgasm system, leading to improved sexual function and well-being.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Alleviate discomfort and improve overall vaginal health, promoting comfort and confidence during sexual activities.</li>
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></Link>
        </div>
        

      <div className={`md:hidden flex flex-col items-center`}>
      <h1 className={`text-gold1 text-[5vh] text-center font-header`}>O-Shot And G-Shot Benefits</h1>
      {/* <video src={boobs10} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
      <div className={`flex w-full h-[30vh] relative`}> 
        <Image src={oshot_image5} className={`w-full h-full object-cover `} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
      </div>
      <p className={`text-white font-poppins text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh] font-main`}>
The combined treatment of the O-Shot and G-Shot offers a remarkable solution for individuals seeking enhanced sexual pleasure and gratification. By effectively increasing blood flow to the genitals and stimulating sensitive areas, this innovative treatment can yield a multitude of benefits:</p>
            <ul className={`text-white text-[2.1vh] font-poppins pl-[1vh]`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Experience heightened sensation and pleasure, leading to more intense and fulfilling orgasms.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Boost sex drive and libido, reigniting passion and desire for a more satisfying sexual experience.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Amplify and enhance the G-spot, increasing sexual stimulation and pleasure during intimate moments.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Rejuvenate the vaginal tissues involved in the female orgasm system, leading to improved sexual function and well-being.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Alleviate discomfort and improve overall vaginal health, promoting comfort and confidence during sexual activities.</li>
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></Link>
      </div>
    
    </div>
  )
}

export default OshotBenefits

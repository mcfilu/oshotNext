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
            <h1 className={`text-gold1 text-[5vh] text-center font-header`}>O-Concept Chair Benefits</h1>
            <p className={`text-white font-poppins text-[2.1vh] text-justify mt-[3vh] mb-[2vh] font-main`}>Experience the transformative power of the O-Concept Chair for her, a cutting-edge solution designed to optimize feminine wellness and enhance sexual health. This innovative treatment offers a multitude of benefits tailored to women's specific needs and concerns:</p>
            <ul className={`text-white text-[2.1vh] font-poppins w-full items-left`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>The O-Concept Chair can help improve bladder control, reducing issues like urinary incontinence and enhancing overall pelvic floor strength.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Many women experience heightened orgasms and increased sexual pleasure through the use of the O-Concept Chair, as it stimulates and enhances sensitivity in the pelvic area.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>For women experiencing pelvic pain or discomfort, the O-Concept Chair can provide relief and promote overall pelvic health.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Straighten the penis in men with Peyronie's Disease, reducing discomfort and improving sexual function.</li> */}
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Alleviate symptoms such as white itchy patches on the genitals for improved comfort and well-being.</li> */}
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></Link>
        </div>
        

      <div className={`md:hidden flex flex-col items-center`}>
      <h1 className={`text-gold1 text-[5vh] text-center font-header`}>O-Concept Chair Benefits</h1>
      {/* <video src={boobs10} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
      <div className={`flex w-full h-[30vh] relative`}> 
        <Image src={oshot_image5} className={`w-full h-full object-cover `} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
      </div>
      <p className={`text-white font-poppins text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh] font-main`}>Experience the transformative power of the O-Concept Chair for her, a cutting-edge solution designed to optimize feminine wellness and enhance sexual health. This innovative treatment offers a multitude of benefits tailored to women's specific needs and concerns:</p>
            <ul className={`text-white text-[2.1vh] font-poppins pl-[1vh]`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>The O-Concept Chair can help improve bladder control, reducing issues like urinary incontinence and enhancing overall pelvic floor strength.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Many women experience heightened orgasms and increased sexual pleasure through the use of the O-Concept Chair, as it stimulates and enhances sensitivity in the pelvic area.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>For women experiencing pelvic pain or discomfort, the O-Concept Chair can provide relief and promote overall pelvic health.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Straighten the penis in men with Peyronie's Disease, reducing discomfort and improving sexual function.</li> */}
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Alleviate symptoms such as white itchy patches on the genitals for improved comfort and well-being.</li> */}
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></Link>
      </div>
    
    </div>
  )
}

export default OshotBenefits

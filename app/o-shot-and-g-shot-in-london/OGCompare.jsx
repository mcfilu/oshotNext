'use client'
import React, {useState} from 'react'
import Image from 'next/image';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
// import { oshot_before8, oshot_after8, oshot_before9, oshot_after9, oshot_before10, oshot_after10, oshot_before11, oshot_after11 } from '../assets';
import oshot_before8 from '../../public/oshot_before8.jpeg';
import oshot_after8 from '../../public/oshot_after8.jpeg';
import oshot_before9 from '../../public/oshot_before9.jpeg';
import oshot_after9 from '../../public/oshot_after9.jpeg';
import oshot_before10 from '../../public/oshot_before10.jpeg';
import oshot_after10 from '../../public/oshot_after10.jpeg';
import oshot_before11 from '../../public/oshot_before11.jpeg';
import oshot_after11 from '../../public/oshot_after11.jpeg';


const OshotCompare
 = () => {
    const [hov1, setHov1] = useState(false);
    const [hov2, setHov2] = useState(false);
    const [hov3, setHov3] = useState(false);
    const [hov4, setHov4] = useState(false);
    const [hov5, setHov5] = useState(false);
    const [hov6, setHov6] = useState(false);
    const [hov7, setHov7] = useState(false);
    const [hov8, setHov8] = useState(false);
    const [hov9, setHov9] = useState(false);
    const [hov10, setHov10] = useState(false);
    
    const [vis3, set3] = useState(false);
    const [vis4, set4] = useState(false);
    const [vis5, set5] = useState(false);
    const [vis6, set6] = useState(false);
    const [vis7, set7] = useState(false);
    const [vis8, set8] = useState(false);
    const [vis9, set9] = useState(false);
    const [vis10, set10] = useState(false);
    const [buttonVis, setButton] = useState(true);
    
    const handleImages = () => {
        if (vis3 == false ){
            set3(true);
        }
        else if (vis4 == false){
            set4(true);
            setButton(false);
        }
       
         
    
    }
  return (
    <div className={` py-[2vh] w-full `}>
        <div className={`w-full flex flex-col justify-center items-center `}>
            <h2 className={`text-gold1  text-center text-[5vh] mb-[1vh] font-header`}>Treatment Effects</h2>
            <div className={`flex flex-row justify-between w-[50%] mx-auto`}>
                <h2 className={`text-[3.5vh] text-white font-main`}>Before</h2>
                <h2 className={`text-[3.5vh] text-white font-main`}>After</h2>
            </div>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before8}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after8}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before8}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after8}></Image>
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before9}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after9}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before9}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after9}></Image>
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before10}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after10}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before10}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after10}></Image>
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? "" : 'hidden'} flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before11}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after11}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before11}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after11}></Image>
                    </div>
                </div>
            </div>

            
            <button onClick={() => handleImages()} className={`flex mx-auto px-[1vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 text-[2.5vh]  ${buttonVis ? "":"hidden"} mt-[1vh] font-main`}>Load More</button>
        </div>
    </div>
    
  )
}

export default OshotCompare

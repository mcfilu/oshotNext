'use client'
import React, {useState} from 'react'
import Image from 'next/image';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
// import { oshot_before1, oshot_after1, oshot_before2, oshot_after2, oshot_before3, oshot_after3, oshot_before4, oshot_after4, oshot_before5, oshot_after5, oshot_before6, oshot_after6, oshot_before7, oshot_after7 } from '../assets';
import oshot_before1 from '../../public/oshot_before1.jpeg';
import oshot_after1 from '../../public/oshot_after1.jpeg';
import oshot_before2 from '../../public/oshot_before2.jpeg';
import oshot_after2 from '../../public/oshot_after2.jpeg';
import oshot_before3 from '../../public/oshot_before3.jpeg';
import oshot_after3 from '../../public/oshot_after3.jpeg';
import oshot_before4 from '../../public/oshot_before4.jpeg';
import oshot_after4 from '../../public/oshot_after4.jpeg';
import oshot_before5 from '../../public/oshot_before5.jpeg';
import oshot_after5 from '../../public/oshot_after5.jpeg';
import oshot_before6 from '../../public/oshot_before6.jpeg';
import oshot_after6 from '../../public/oshot_after6.jpeg';
import oshot_before7 from '../../public/oshot_before7.jpeg';
import oshot_after7 from '../../public/oshot_after7.jpeg';

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
        }
        else if (vis5 == false){
            set5(true);
        }
        else if (vis6 == false){
            set6(true);
        }
        else if (vis7 == false){
            set7(true);
            setButton(false);
        }
        // else if (vis8 == false){
        //     set8(true);
        // }
        // else if (vis9 == false){
        //     set9(true);
        // }
        // else if (vis10 == false){
        //     set10(true);
        //     setButton(false);
        // }
         
    
    }
  return (
    <div className={` py-[2vh] w-full `}>
        <div className={`w-full flex flex-col justify-center items-center `}>
            <h2 className={`text-gold1  text-center text-[5vh] mb-[1vh] font-header`}>Treatment Effects</h2>
            <div className={`flex flex-row justify-between w-[50%] mx-auto`}>
                <h2 className={`text-[3.5vh] text-white font-main`}>Before</h2>
                <h2 className={`text-[3.5vh] text-white font-main`}>After</h2>
            </div>
            <div className='flex w-full h-full bg-gold2 items-center justify-center'>
                <p className='text-black text-[2.5vh] my-[1vh] text-center'>Sensitive Content</p>
                <p className='text-black text-[2.5vh] my-[1vh] text-center'>These photos contain nudity. You must be at least 18 years old to continue.</p>
                <p className='text-black text-[2.5vh] my-[1vh] text-center'>Are you over 18 years of age?</p>
                <div className='flex flex-row '>
                    <button className='py-[1vh] px-[2vh] border-black text-black'>NO</button>
                    <button className='py-[1vh] px-[2vh] border-black text-black'>YES</button>
                </div>
            </div>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before1}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after1}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before1}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after1}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before2}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after2}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before2}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after2}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before3}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after3}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before3}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after3}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? '' : 'hidden'} flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before4}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after4}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before4}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after4}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov5(true)} onMouseLeave={() => {setHov5(false)}} className={`${vis5 ? '' : 'hidden'} flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov5 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before5}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after5}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov5 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before5}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after5}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov6(true)} onMouseLeave={() => {setHov6(false)}} className={`${vis6 ? '' : 'hidden'} flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov6 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before6}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after6}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov6 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before6}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after6}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov7(true)} onMouseLeave={() => {setHov7(false)}} className={`${vis7 ? '' : 'hidden'} flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov7 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before7}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[17vw] h-[40vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after7}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov7 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_before7}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[40%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={oshot_after7}></Image>
                    </div>
                </div>
            </div>

            
            <button onClick={() => handleImages()} className={`flex mx-auto px-[1vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 text-[2.5vh]  ${buttonVis ? "":"hidden"} mt-[1vh] font-main`}>Load More</button>
        </div>
    </div>
    
  )
}

export default OshotCompare

import React from 'react'
import libido from '../../public/libido.png';
import ejaculation from '../../public/ejaculation.png';
import vagina from '../../public/vagina.png';
import Image from 'next/image';

const OshotTreated = () => {
  return (

<div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

<p className={`text-[5vh] text-gold1 text-center md:mb-[5vh] font-header`}>Conditions Treated</p>

<div className={`flex flex-col md:flex-row w-full items-center md:items-start justify-center mt-[2vh]  `}>

    
    
    
    <div  className={`relative flex flex-col       mt-[5vh] md:mt-[0px] hover:bg-opacity-80  hover:ease-in-out duration-500 items-center`}>
    
        <div className={`flex flex-col bg-black justify-center items-center`}>
            <div className={`flex h-[15vh] w-[25vw] md:w-[10vw] relative`}>
                <Image src={ejaculation} className={`w-full h-full object-contain`} objectFit="contain" objectPosition="center" fill="true" alt=""></Image>
            </div>
            
            <h2 className={`text-gold1 text-[4vh] text-center font-main md:mt-[2vh]`}>Vaginal Dryness</h2>
            {/* <h2 className={`text-gold1 text-[4vh] text-left font-main `}>Increase</h2> */}
            {/* <h2 className={` text-gold2 text-[5.5vh] text-left`}>Size</h2> */}
        </div>
        


    </div>

    <div  className={`relative flex flex-col      mt-[5vh] md:mt-[0px] hover:bg-opacity-80 ] hover:ease-in-out duration-500 mx-[10vw] items-center`}>
    
        <div className={`flex flex-col bg-black justify-center items-center`}>
            <div className={`flex h-[15vh]  w-[25vw] md:w-[10vw] relative`}>
                <Image src={vagina} className={`w-full h-full object-contain`} objectFit="contain" objectPosition="center" fill="true" alt=""></Image>
            </div>
            
            <h2 className={`text-gold1 text-[4vh] text-center font-main md:mt-[2vh]`}>Vagina Aesthetics</h2>
            {/* <h2 className={` text-white text-[5.5vh] text-left`}>Texture</h2> */}
        </div>
        


    </div>
    

    <div  className={`relative flex flex-col     mt-[5vh] md:mt-[0px] hover:bg-opacity-80  hover:ease-in-out duration-500 items-center`}>
    
        <div className={`flex flex-col bg-black justify-center items-center`}>
            <div className={`flex h-[15vh]  w-[25vw] md:w-[10vw] relative`}>
            <Image src={libido} className={`w-full h-full object-contain`} objectFit="contain" objectPosition="center" fill="true" alt=""></Image>
            </div>
            
            <h2 className={`text-gold1 text-[4vh] text-center font-main md:mt-[2vh]`}>Sexual Satisfaction</h2>
            {/* <h2 className={` text-gold2 text-[5.5vh] text-left`}>Rippling</h2> */}
        </div>
        


    </div>
    

    

    
</div>


</div>
  )
}

export default OshotTreated
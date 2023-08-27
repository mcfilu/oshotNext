

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
// import { chair1, shockwave1, oshot1, chair3, oshot_image1, oshot_image2, oshot_image3, oshot_image4, oshot_image5, oshot_image6, thermiva} from '../assets';
import shockwave1 from '../../public/shockwave1.jpg';
import oshot1 from '../../public/oshot1.jpg';
import oshot_image1 from '../../public/oshot1.jpeg';
import oshot_image2 from '../../public/oshot2.jpeg';
import oshot_image4 from '../../public/oshot4.jpg';
import oshot_image5 from '../../public/oshot5.jpg';
import oshot_image6 from '../../public/oshot6.jpg';
import thermiva from '../../public/thermiva.jpg';
import chair1 from '../../public/chair1.jpg';
import chair3 from '../../public/chair3.jpg';



const LabiaServices = () => {
    
  return (
    
    <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

    <p className={`text-[5vh] text-gold1 text-center font-header`}>Related Treatments</p>
    
    <div className={`flex flex-col md:flex-row w-full justify-between mt-[2vh] md:min-h-[65vh] `}>
    
        
        
        <div  className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <Link href="/gshot-injection-in-london">
            <div  className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
                <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={oshot_image2}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h2 className={`text-gold1 text-[5.5vh] text-left font-header`}>G-Shot</h2>
                    <h2 className={` text-gold1 text-[5.5vh] text-left font-header`}>PRP</h2>
                </div>
            </div>
            
            <div className={`relative flex flex-col w-full  items-center py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>G-Shot PRP, a procedure designed to enhance sexual pleasure and sensitivity in women. The G-Shot PRP involves the injection of Platelet-Rich Plasma (PRP) into the G-spot area, promoting tissue regeneration and increased blood flow. Discover how this minimally invasive procedure can potentially improve your intimate experiences and overall sexual well-being.</p>
                
            </div>
            {/* <Link to={`/breast-augmentation`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white  md:mt-[0px]`}>Read More</button> */}
        </Link>
        </div>
        
    
        <div className={` flex flex-col items-center bg-gold1 mt-[10vh] md:mt-[0px] w-[100%] md:w-[29%] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <Link href="/o-concept-chair-in-london">
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black `}>
                <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={oshot_image6}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h2 className={`text-gold2 text-[5.5vh] text-left font-header`}>O-Concept Chair</h2>
                    <h2 className={` text-gold2 text-[5.5vh] text-left font-header`}>For Her</h2>
                </div>
            </div>
            <div className={`relative items-center flex flex-col w-full  py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>A cutting-edge solution designed to enhance women's intimate well-being. This innovative chair utilizes advanced technology to optimize pelvic muscle strength and blood circulation, leading to improved sexual performance, sensation, and overall satisfaction. Experience a renewed sense of confidence and pleasure as the O-Concept Chair helps rejuvenate and empower you in your intimate experiences. </p>
                
                
            </div>
            {/* <Link to={`/breast-fat-enlargement`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh] md:mt-[0px]`}>Read More</button> */}
        </Link>
        </div>
        
    
        <div className={` flex flex-col  bg-gold1   w-[100%] md:w-[29%] mt-[10vh] md:mt-[0px] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <Link href="/o-shot-and-g-shot-in-london">
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
                <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={` flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={oshot_image4}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h2 className={`text-gold2 text-[5.5vh] text-left font-header`}>O-Shot</h2>
                    <h2 className={` text-gold2 text-[5.5vh] text-left font-header`}>And G-Shot</h2>
                </div>
            </div>
            <div className={` flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>The G-Shot focuses on stimulating the G-spot area, enhancing sensitivity and intensifying orgasms, while the O-Shot utilizes Platelet-Rich Plasma (PRP) to rejuvenate and enhance sexual health. Together, these treatments offer a comprehensive approach to elevate your intimate experiences, boost confidence, and enhance overall sexual satisfaction. </p>
                
            </div>
            {/* <Link to={`/breast-reduction`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            
        </Link>
        </div>
        
        
    
        
    
        
    </div>

    <div className={`flex flex-col md:flex-row w-full justify-between mt-[4vh] md:min-h-[65vh] `}>
    
        
        
        <div className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <Link href="/thermiva-feminine-wellness-in-london">
            <div  className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
                <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={thermiva}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h2 className={`text-gold1 text-[5.5vh] text-left font-header`}>ThermiVa</h2>
                    <h2 className={` text-gold1 text-[5.5vh] text-left font-header`}>Feminine</h2>
                    <h2 className={` text-gold1 text-[5.5vh] text-left font-header`}>Wellness</h2>
                </div>
            </div>
            
            <div className={`relative flex flex-col w-full  items-center py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Using advanced radiofrequency technology, ThermiVa stimulates collagen production and tightens the vaginal tissues, resulting in improved vaginal laxity, increased sensitivity, and enhanced overall sexual satisfaction. Discover how ThermiVa can potentially restore your confidence and reignite your intimate experiences.</p>
                
            </div>
            {/* <Link to={`/breast-augmentation`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white  md:mt-[0px]`}>Read More</button> */}
        </Link>
        </div>
        
    
        <div className={` flex flex-col items-center bg-gold1 mt-[10vh] md:mt-[0px] w-[100%] md:w-[29%] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <Link href="/co2-re-intima-in-london">
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black `}>
                <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={shockwave1}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h2 className={`text-gold2 text-[5.5vh] text-left font-header`}>CO2 RE</h2>
                    <h2 className={` text-gold2 text-[5.5vh] text-left font-header`}>Intima</h2>
                </div>
            </div>
            <div className={`relative items-center flex flex-col w-full  py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Using advanced CO2 laser technology, CO2RE Intima stimulates collagen production and promotes tissue remodeling, addressing concerns such as vaginal laxity, dryness, and discomfort. Experience improved vaginal tone, increased lubrication, and enhanced sexual satisfaction with this non-surgical and minimally invasive procedure.</p>
                
                
            </div>
            {/* <Link to={`/breast-fat-enlargement`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh] md:mt-[0px]`}>Read More</button> */}
        </Link>
        </div>
        
    
        <div  className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <Link href="/">
            <div  className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={oshot_image1}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h2 className={`text-gold1 text-[5.5vh] text-left font-header`}>O-Shot</h2>
                    <h2 className={` text-gold1 text-[5.5vh] text-left font-header`}>Vagina PRP</h2>

                </div>
            </div>
            
            <div className={`relative flex flex-col w-full  items-center py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>The O-Shot Vagina PRP The O-Shot ® is a new procedure developed to solve your sexual problems, increase your pleasure, and rejuvenate your vagina. It is a nonsurgical technique that uses the growth factors each woman has in her own body to stimulate vaginal and clitoral rejuvenation to activate the Female Orgasm System.</p>
                
            </div>
            {/* <Link to={`/breast-augmentation`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white  md:mt-[0px]`}>Read More</button> */}
        </Link>
        </div>
        
        
    
        
    
        
    </div>
    
    
    </div>
  )
}

export default LabiaServices
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { chair1, shockwave1, oshot1, chair3, oshot_image1, oshot_image2, oshot_image3, oshot_image4, oshot_image5, oshot_image6, thermiva} from '../assets';



const OConceptServices = () => {
    const [hov1, setHove1] = useState(false);
    const [hov2, setHove2] = useState(false);
    const [hov3, setHove3] = useState(false);
    const [hov4, setHove4] = useState(false);
    const [hov5, setHove5] = useState(false);
    const [hov6, setHove6] = useState(false);
  return (
    
    <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

<p className={`text-[5vh] text-gold1 text-center font-header`}>O-Concept Protocol Treatments</p>
    
    <div className={`flex flex-col md:flex-row w-full justify-between mt-[2vh] md:min-h-[65vh] `}>
    
        
        
        <div  onMouseEnter={() => setHove1((prev) => !prev)} onMouseLeave={() => setHove1((prev) => !prev)} className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <Link to={`/gshot-injection-in-london`}>
            <div  className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
                <img className={`flex w-full h-full  ease-in-out duration-500 object-cover ${hov1 ? 'scale-125' : ''}`} src={oshot_image2}></img>
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
        
    
        <div onMouseEnter={() => setHove2((prev) => !prev)} onMouseLeave={() => setHove2((prev) => !prev)} className={` flex flex-col items-center bg-gold1 mt-[10vh] md:mt-[0px] w-[100%] md:w-[29%] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <Link to={`/o-concept-chair-in-london`}>
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black `}>
                <img className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 ${hov2 ? 'scale-125' : ''}`} src={oshot_image6}></img>
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
        
    
        <div onMouseEnter={() => setHove3((prev) => !prev)} onMouseLeave={() => setHove3((prev) => !prev)} className={` flex flex-col  bg-gold1   w-[100%] md:w-[29%] mt-[10vh] md:mt-[0px] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <Link to={`/o-shot-and-g-shot-in-london`}>
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
                <img className={` flex w-full h-full  ease-in-out duration-500 object-cover ${hov3 ? 'scale-125' : ''}`} src={oshot_image4}></img>
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
    
        
        
        <div  onMouseEnter={() => setHove4((prev) => !prev)} onMouseLeave={() => setHove4((prev) => !prev)} className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <Link to={`/thermiva-feminine-wellness-in-london`}>
            <div  className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
                <img className={`flex w-full h-full  ease-in-out duration-500 object-cover ${hov4 ? 'scale-125' : ''}`} src={thermiva}></img>
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
        
    
        <div onMouseEnter={() => setHove5((prev) => !prev)} onMouseLeave={() => setHove5((prev) => !prev)} className={` flex flex-col items-center bg-gold1 mt-[10vh] md:mt-[0px] w-[100%] md:w-[29%] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <Link to={`/co2-re-intima-in-london`}>
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black `}>
                <img className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 ${hov5 ? 'scale-125' : ''}`} src={shockwave1}></img>
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
        
    
        <div onMouseEnter={() => setHove6((prev) => !prev)} onMouseLeave={() => setHove6((prev) => !prev)} className={` flex flex-col  bg-gold1   w-[100%] md:w-[29%] mt-[10vh] md:mt-[0px] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <Link to={`/labia-fillers-in-london`}>
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
                <img className={` flex w-full h-full  ease-in-out duration-500 object-cover ${hov6 ? 'scale-125' : ''}`} src={oshot1}></img>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h2 className={`text-gold2 text-[5.5vh] text-left font-header`}>Labia</h2>
                    <h2 className={` text-gold2 text-[5.5vh] text-left font-header`}>Fillers</h2>
                </div>
            </div>
            <div className={` flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Labia Fillers, a cosmetic procedure dedicated to enhancing the appearance and comfort of the labia. Our skilled practitioners utilize safe and effective dermal fillers to address concerns such as asymmetry, volume loss, or sagging in the labial area. Experience a renewed sense of confidence and aesthetic harmony as our tailored approach enhances your natural beauty.</p>
                
            </div>
            {/* <Link to={`/breast-reduction`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            
        </Link>
        </div>
        
        
    
        
    
        
    </div>
    
    
    </div>
  )
}

export default OConceptServices
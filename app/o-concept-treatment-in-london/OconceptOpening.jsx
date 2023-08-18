import React from 'react'
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';

const OconceptOpening = () => {
  return (
    <div className={`flex w-full flex-row md:min-h-[55vh]  md:p-[2vh] md:pl-[0px]`}>
        <div className={`hidden md:flex w-[45%] h-[100%] flex items-center relative`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <Image className={`w-screen h-screen object-cover`} fill={true} object-fit="cover" src="/sherif_new.jpeg" alt="Women"></Image>
        </div>
        <div className={`hidden md:flex w-[55%] h-[100%]  p-[2vh] flex flex-col items-left justify-between `}>
            <div className={` flex flex-col w-[100%]  bg-opacity-40  items-center justify-center my-auto`}>
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-center text-[1.3vw]`}></i>
                <p className={`flex text-white text-[2.5vh] text-left text-gold1 mt-[2vh] font-main`}>The O-Concept for Her offers a comprehensive treatment combination designed to address these issues and enhance overall sexual satisfaction. Whether you're seeking to rejuvenate vaginal tissues, improve lubrication, or enhance sensitivity, this unique treatment approach is tailored to meet your specific needs.</p>
                <p className={`flex text-white text-[2.5vh] text-left text-gold1 mt-[2vh] font-main`}>The O-Concept for Her is not only for women experiencing specific concerns, but also for those looking to enhance their sexual experience and regain confidence. Through a carefully curated selection of cutting-edge treatments, our goal is to achieve the best possible results for each individual. Experience the transformative benefits of the O-Concept for Her as it helps improve vaginal tone, increase sensitivity, and enhance overall sexual pleasure. </p>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-center text-gold1 text-[5vh] md:text-[1.3vw] mt-[2vh]`}></i>
                <p className={`flex  text-[4.5vh] text-center font-header text-gold1 mt-[5vh]`}>Dr. Sherif Wakil</p>
            </div>
            {/* <div className={`flex flex-col w-[100%]  bg-opacity-70 rounded-[9px] my-[1vh]`}>

                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face by harnessing the natural healing powers of the human body to repair damaged skin and stimulate new skin cell growth.</p>
                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face.</p>
            </div>
            <p className=" h-[6vh] w-[12vw] bg-gold1 text-white text-[2.5vh] bg-opacity-80 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
                url="https://calendly.com/nikekarta2/30min"


                rootElement={document.getElementById("root")}
                text="Book Consultation"
                textColor="#ffffff"
                color="#ffffff"
                /></p> */}
        </div>
        


        <div className={`md:hidden flex flex-col w-full items-center`}>
        <p className={`flex text-[4.5vh] font-header text-gold1 mt-[2vh]`}>Dr. Sherif Wakil</p>
        <div className={`flex w-full h-[30vh] relative`}>
                <Image  object-fit="cover" fill={true} src="/sherif_new.jpeg" alt=""></Image>
            </div>
            {/* <img className={`w-full h-full object-cover `} src={sherif_new}></img> */}
            
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-center text-[4vh] mt-[1vh]`}></i>
            <p className={`flex text-white text-[2.2vh] text-left ml-[1vh]  text-gold1 `}>The O-Concept for Her offers a comprehensive treatment combination designed to address these issues and enhance overall sexual satisfaction. Whether you're seeking to rejuvenate vaginal tissues, improve lubrication, or enhance sensitivity, this unique treatment approach is tailored to meet your specific needs.</p>
            <p className={`flex text-white text-[2.2vh] text-left ml-[1vh] mt-[2vh] text-gold1 `}>The O-Concept for Her is not only for women experiencing specific concerns, but also for those looking to enhance their sexual experience and regain confidence. Through a carefully curated selection of cutting-edge treatments, our goal is to achieve the best possible results for each individual. Experience the transformative benefits of the O-Concept for Her as it helps improve vaginal tone, increase sensitivity, and enhance overall sexual pleasure. </p>
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-center text-gold1 text-[4vh] `}></i>
            
            

        </div>
       
        
    
    </div>
  )
}

export default OconceptOpening
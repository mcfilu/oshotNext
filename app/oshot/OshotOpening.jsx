import React from 'react'
import sherif_new from '../../public/sherif_new.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';

const OshotOpening = () => {
  return (
    <div className={`flex w-full flex-row md:min-h-[55vh]  md:p-[2vh] md:pl-[0px]`}>
        <div className={`hidden md:flex w-[45%] h-[100%] flex items-center relative`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <Image className={`w-full h-full object-cover `} src={sherif_new} object-fit="cover" fill={true} alt=""></Image>
        </div>
        <div className={`hidden md:flex w-[55%] h-[100%]  p-[2vh] flex flex-col items-left justify-between `}>
            <div className={` flex flex-col w-[100%]  bg-opacity-40  items-center justify-center my-auto`}>
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-center text-[1.3vw]`}></i>
                <p className={`flex text-white text-[2.5vh] text-left text-gold1 mt-[2vh] font-main`}>The O-Shot® is a vital element of the transformative therapy known as The O Concept™. This innovative approach encompasses state-of-the-art technology, pioneering treatments, and natural supplements, all dedicated to enhancing sexual well-being and satisfaction.</p>
                <p className={`flex text-white text-[2.5vh] text-left text-gold1 mt-[2vh] font-main`}>By harnessing the power of Platelet Rich Plasma (PRP), the O-Shot® procedure taps into the body's innate healing and rejuvenating capabilities. Through targeted injections of PRP, abundant in growth factors, the O-Shot® triggers a regenerative process that stimulates the body's natural ability to heal and renew itself, particularly in the intimate areas.</p>
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
                <Image  object-fit="cover" fill={true} src={sherif_new} alt=""></Image>
            </div>
            {/* <Image className={`w-full h-full object-cover `} src={sherif_new} object-fit="cover" fill={true} href=""></Image> */}
            
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-center text-[4vh] mt-[1vh]`}></i>
            <p className={`flex text-white text-[2.2vh] text-left ml-[1vh] text-gold1 `}>The O-Shot® is a vital element of the transformative therapy known as The O Concept™. This innovative approach encompasses state-of-the-art technology, pioneering treatments, and natural supplements, all dedicated to enhancing sexual well-being and satisfaction.</p>
            <p className={`flex text-white text-[2.2vh] text-left ml-[1vh] mt-[2vh] text-gold1 `}>By harnessing the power of Platelet Rich Plasma (PRP), the O-Shot® procedure taps into the body's innate healing and rejuvenating capabilities. Through targeted injections of PRP, abundant in growth factors, the O-Shot® triggers a regenerative process that stimulates the body's natural ability to heal and renew itself, particularly in the intimate areas.</p>
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-center text-gold1 text-[4vh] `}></i>
            
            

        </div>
       
        
    
    </div>
  )
}

export default OshotOpening
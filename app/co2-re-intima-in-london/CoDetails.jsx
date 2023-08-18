import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const OshotDetails = () => {
  return (
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>The CO2RE Intima laser treatment is a cutting-edge procedure that stimulates collagen synthesis and remodels vaginal connective tissue fibers, all while preserving the surrounding tissues, resulting in improved symptoms. Moreover, it enhances vaginal muscle tone, strength, and control, providing a boost to self-confidence and comfort.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>CO2RE Intima employs an intra-vaginal device that delivers gentle pulses of photo-thermal energy to the vaginal walls, stimulating the production of new collagen and tightening the vaginal canal and supporting muscles.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>This treatment stands out as one of the quickest and most convenient options for vaginal rejuvenation, often requiring just a 5-minute outpatient session with minimal recovery time. To achieve optimal results, patients are advised to undergo an additional series of three Intima treatments at four-week intervals. Additionally, a touch-up treatment session may be recommended within 12 months to maintain the initial results.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>The patent-pending photo-thermal technology used in Intima has added benefits, as it can enhance vaginal comfort and increase blood flow to the pelvic region, potentially restoring a woman's libido and boosting self-confidence.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalization and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p> */}
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh] font-main`}>Book Consultation</button></Link>
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
        <div className={`hidden md:flex w-[45%] h-[100%] flex items-center`}>
        <video src="/blood_cells.mp4" autoPlay loop muted className={` object-cover w-[100%] h-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
        </div>

        <div className={`flex flex-col md:hidden items-center`}>
            <p className={`flex text-gold1 text-[6vh] text-center font-header`}>How does it work?</p>
            <video src="/blood_cells.mp4" autoPlay loop muted className={` object-cover h-[100%]`}></video>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>The CO2RE Intima laser treatment is a cutting-edge procedure that stimulates collagen synthesis and remodels vaginal connective tissue fibers, all while preserving the surrounding tissues, resulting in improved symptoms. Moreover, it enhances vaginal muscle tone, strength, and control, providing a boost to self-confidence and comfort.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>CO2RE Intima employs an intra-vaginal device that delivers gentle pulses of photo-thermal energy to the vaginal walls, stimulating the production of new collagen and tightening the vaginal canal and supporting muscles.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>This treatment stands out as one of the quickest and most convenient options for vaginal rejuvenation, often requiring just a 5-minute outpatient session with minimal recovery time. To achieve optimal results, patients are advised to undergo an additional series of three Intima treatments at four-week intervals. Additionally, a touch-up treatment session may be recommended within 12 months to maintain the initial results.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The patent-pending photo-thermal technology used in Intima has added benefits, as it can enhance vaginal comfort and increase blood flow to the pelvic region, potentially restoring a woman's libido and boosting self-confidence.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalization and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p> */}
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default OshotDetails
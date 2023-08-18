import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const OshotDetails = () => {
  return (
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>ThermiVa offers a versatile and non-invasive treatment approach that goes beyond addressing internal vaginal concerns. This innovative procedure can also improve the external appearance of enlarged or unsightly labia, eliminating the need for invasive surgery.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Using radiofrequency (RF) energy, ThermiVa effectively tightens the vaginal opening and the entire length of the vagina, enhancing sexual satisfaction for both patients and their partners. Additionally, it addresses vulvar or labial laxity, resulting in tightened labial tissues and reduced sag or a 'camel toe' appearance, providing noticeably softer and smoother skin. This, in turn, brings more comfort in tight clothing and boosts confidence in leotards and bikinis.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Moreover, ThermiVa effectively targets vaginal dryness (atrophic vaginitis), promoting softer and thicker skin in the area and increasing both internal and external moisture. The treatment significantly enhances daily comfort and sexual intercourse without the need for hormones.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Furthermore, for those experiencing mild to moderate stress urinary incontinence, ThermiVa serves as an effective solution, reducing accidents and leakage and potentially alleviating urge symptoms. By complementing Kegel exercises, women may avoid the necessity for surgically applied mesh slings in the vagina.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Lastly, ThermiVa addresses sexual or orgasmic dysfunction, leading to increased sensitivity, stronger muscular contractions, and the ability to achieve orgasms in a shorter timeframe. The therapeutic effects of radiofrequency on muscular and tissue healing, long utilized in physical therapy practices, contribute to these remarkable outcomes. With ThermiVa, patients experience comfortable temperatures akin to a warm stone massage, ensuring a pleasant and soothing treatment experience.</p>
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
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>ThermiVa offers a versatile and non-invasive treatment approach that goes beyond addressing internal vaginal concerns. This innovative procedure can also improve the external appearance of enlarged or unsightly labia, eliminating the need for invasive surgery.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Using radiofrequency (RF) energy, ThermiVa effectively tightens the vaginal opening and the entire length of the vagina, enhancing sexual satisfaction for both patients and their partners. Additionally, it addresses vulvar or labial laxity, resulting in tightened labial tissues and reduced sag or a 'camel toe' appearance, providing noticeably softer and smoother skin. This, in turn, brings more comfort in tight clothing and boosts confidence in leotards and bikinis.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Moreover, ThermiVa effectively targets vaginal dryness (atrophic vaginitis), promoting softer and thicker skin in the area and increasing both internal and external moisture. The treatment significantly enhances daily comfort and sexual intercourse without the need for hormones.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Furthermore, for those experiencing mild to moderate stress urinary incontinence, ThermiVa serves as an effective solution, reducing accidents and leakage and potentially alleviating urge symptoms. By complementing Kegel exercises, women may avoid the necessity for surgically applied mesh slings in the vagina.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Lastly, ThermiVa addresses sexual or orgasmic dysfunction, leading to increased sensitivity, stronger muscular contractions, and the ability to achieve orgasms in a shorter timeframe. The therapeutic effects of radiofrequency on muscular and tissue healing, long utilized in physical therapy practices, contribute to these remarkable outcomes. With ThermiVa, patients experience comfortable temperatures akin to a warm stone massage, ensuring a pleasant and soothing treatment experience.</p>
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default OshotDetails
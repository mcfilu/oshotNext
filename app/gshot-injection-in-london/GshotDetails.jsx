import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const OshotDetails = () => {
  return (
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>G-Spot Amplification, also known as the G-Shot, offers a unique approach to enhancing sexual pleasure and gratification for women. By using dermal filler products, typically used for facial contouring and other treatments, the G-Spot can be amplified and made more prominent, resulting in increased sensitivity to stimulation.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>While debates exist in society and scientific literature regarding the impact of the G-Spot, many women find it elusive and challenging to locate. By bringing the G-Spot to prominence through amplification, a whole new level of sexual pleasure can be unlocked.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>During the G-Spot amplification procedure, hyaluronic acid-based dermal fillers are injected into the anterior wall of the vagina, precisely targeting the location of the G-Spot. The thick, natural hyaluronic acid gel enhances both the size and thickness of the G-Spot, projecting it lower into the vaginal canal. This makes it easier to stimulate during penetrative sex and other sexual activities.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>By amplifying the G-Spot, women can experience heightened sexual sensations and discover a previously untapped source of pleasure. G-Spot amplification is a non-surgical treatment that offers women the opportunity to enhance their sexual experiences and explore new dimensions of pleasure.</p>
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
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>G-Spot Amplification, also known as the G-Shot, offers a unique approach to enhancing sexual pleasure and gratification for women. By using dermal filler products, typically used for facial contouring and other treatments, the G-Spot can be amplified and made more prominent, resulting in increased sensitivity to stimulation.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>While debates exist in society and scientific literature regarding the impact of the G-Spot, many women find it elusive and challenging to locate. By bringing the G-Spot to prominence through amplification, a whole new level of sexual pleasure can be unlocked.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>During the G-Spot amplification procedure, hyaluronic acid-based dermal fillers are injected into the anterior wall of the vagina, precisely targeting the location of the G-Spot. The thick, natural hyaluronic acid gel enhances both the size and thickness of the G-Spot, projecting it lower into the vaginal canal. This makes it easier to stimulate during penetrative sex and other sexual activities.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>By amplifying the G-Spot, women can experience heightened sexual sensations and discover a previously untapped source of pleasure. G-Spot amplification is a non-surgical treatment that offers women the opportunity to enhance their sexual experiences and explore new dimensions of pleasure.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalization and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p> */}
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default OshotDetails
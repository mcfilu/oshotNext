import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const OshotDetails = () => {
  return (
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>The O Concept™ Chair represents a groundbreaking advancement in pelvic floor exercises, leveraging state-of-the-art high-intensity focused electromagnetic (HIFEM) technology to revolutionize your pelvic health. Through effortless muscle contractions, this innovative chair helps to strengthen and tone your pelvic floor muscles, providing targeted relief for issues like leakages and pelvic pain.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>But the benefits of the O Concept™ Chair extend far beyond its functional advantages. Alongside improving pelvic health, this cutting-edge solution also elevates your sexual experience. By promoting better orgasms and simulating the equivalent of 16,000 pelvic floor contractions in just 30 minutes, it unlocks a whole new level of sexual pleasure and gratification.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Imagine the convenience and ease of prioritizing your pelvic floor health with the O Concept™ Chair. You can simply sit fully clothed and let the high-intensity focused electromagnetic stimulation work its magic, doing the hard work for you. Compared to traditional gym exercises, this chair offers superior results, making it a game-changer for anyone seeking a more effective and enjoyable way to strengthen their pelvic floor muscles.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Don't let leakages, pelvic pain, or concerns about sexual wellness hold you back any longer. Embrace the transformative power of the O Concept™ Chair, an all-encompassing solution that not only addresses functional issues but also enhances your overall well-being and sexual satisfaction. Step into a new era of pelvic health and unlock the potential for a more confident, empowered, and pleasurable lifestyle.</p>
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
            <video src="/blood_cells.mp4" autoPlay loop muted playsInline className={` object-cover h-[100%]`}></video>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>The O Concept™ Chair represents a groundbreaking advancement in pelvic floor exercises, leveraging state-of-the-art high-intensity focused electromagnetic (HIFEM) technology to revolutionize your pelvic health. Through effortless muscle contractions, this innovative chair helps to strengthen and tone your pelvic floor muscles, providing targeted relief for issues like leakages and pelvic pain.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>But the benefits of the O Concept™ Chair extend far beyond its functional advantages. Alongside improving pelvic health, this cutting-edge solution also elevates your sexual experience. By promoting better orgasms and simulating the equivalent of 16,000 pelvic floor contractions in just 30 minutes, it unlocks a whole new level of sexual pleasure and gratification.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Imagine the convenience and ease of prioritizing your pelvic floor health with the O Concept™ Chair. You can simply sit fully clothed and let the high-intensity focused electromagnetic stimulation work its magic, doing the hard work for you. Compared to traditional gym exercises, this chair offers superior results, making it a game-changer for anyone seeking a more effective and enjoyable way to strengthen their pelvic floor muscles.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Don't let leakages, pelvic pain, or concerns about sexual wellness hold you back any longer. Embrace the transformative power of the O Concept™ Chair, an all-encompassing solution that not only addresses functional issues but also enhances your overall well-being and sexual satisfaction. Step into a new era of pelvic health and unlock the potential for a more confident, empowered, and pleasurable lifestyle.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalization and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p> */}
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default OshotDetails
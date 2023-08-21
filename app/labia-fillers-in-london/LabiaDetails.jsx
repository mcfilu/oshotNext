import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const OshotDetails = () => {
  return (
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>Labia majora augmentation, aimed at enhancing the outer labia of the vagina, offers numerous benefits to women at various life stages. This procedure employs hyaluronic acid-based dermal fillers that are free from animal-derived substances.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>We utilize specialized products such as Desirial, Neauvia Rose, and Regenyal Armonia fillers, which are formulated specifically for the female intimate area, providing long-lasting and stable results for labia majora augmentation.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Desirial is a filler containing both mannitol and hyaluronic acid (19mg/ml or 21mg/ml in Desirial Plus). Mannitol serves as an ideal excipient for hyaluronic acid (HA) fillers due to its hydrating and antioxidant properties. Additionally, it helps reduce the post-injection effects like redness and swelling, while also extending the longevity of hyaluronic acid in the tissue.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Neauvia Rose is another hyaluronic acid-based product enriched with glycine and L-Proline, essential amino acids for collagen formation. With a high concentration of hyaluronic acid (28mg/ml), it possesses a thick gel consistency, ideal for correcting lipoatrophy, providing structure and volume, and augmenting the soft tissue in the female vaginal region.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Regenyal Armonia is a biorivolumetric hyaluronic acid-based product (25mg/ml) created through a gentle cross-linking process, forming a 3D matrix when implanted in the skin. Its smaller particle size enables better integration and distribution within the labia tissue, leading to more natural-looking results. It is well-suited for correcting asymmetries in the labia, restoring elasticity to the perineum and vulvo-vaginal region, and addressing issues like episiotomy scarring and vaginal dryness.</p>
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
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>Labia majora augmentation, aimed at enhancing the outer labia of the vagina, offers numerous benefits to women at various life stages. This procedure employs hyaluronic acid-based dermal fillers that are free from animal-derived substances.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>We utilize specialized products such as Desirial, Neauvia Rose, and Regenyal Armonia fillers, which are formulated specifically for the female intimate area, providing long-lasting and stable results for labia majora augmentation.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Desirial is a filler containing both mannitol and hyaluronic acid (19mg/ml or 21mg/ml in Desirial Plus). Mannitol serves as an ideal excipient for hyaluronic acid (HA) fillers due to its hydrating and antioxidant properties. Additionally, it helps reduce the post-injection effects like redness and swelling, while also extending the longevity of hyaluronic acid in the tissue.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Neauvia Rose is another hyaluronic acid-based product enriched with glycine and L-Proline, essential amino acids for collagen formation. With a high concentration of hyaluronic acid (28mg/ml), it possesses a thick gel consistency, ideal for correcting lipoatrophy, providing structure and volume, and augmenting the soft tissue in the female vaginal region.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Regenyal Armonia is a biorivolumetric hyaluronic acid-based product (25mg/ml) created through a gentle cross-linking process, forming a 3D matrix when implanted in the skin. Its smaller particle size enables better integration and distribution within the labia tissue, leading to more natural-looking results. It is well-suited for correcting asymmetries in the labia, restoring elasticity to the perineum and vulvo-vaginal region, and addressing issues like episiotomy scarring and vaginal dryness.</p>
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default OshotDetails
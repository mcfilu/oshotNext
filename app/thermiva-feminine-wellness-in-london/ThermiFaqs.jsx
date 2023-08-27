'use client'
import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
// import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

const OshotFaqs = () => {

    const [openSecond, setSecond] = useState(true);
    const [openThird, setThird] = useState(false);
    const [openFourth, setFourth] = useState(false);
    const [openFifth, setFifth] = useState(false);
    const [openSixth, setSixth] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className={` w-full`}>
            <div className={` p-[2vh]   `}>
                <h2 className={`text-gold1  text-center text-[5vh] mb-[1vh] font-header`}>Frequently Asked Questions</h2>

                
                <hr className={`border-gold1 mt-[2vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setSecond(!openSecond)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSecond ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openSecond ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Am i suitable for this treatment?</h2>
                    </div>
                    <div className={`flex ${openSecond ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        A full medical history will be taken during discussion about your suitability for treatment. If you have any of the following conditions, then this treatment is just right for you: vaginal laxity, a lack of tightness in the vaginal canal, vulvar or labial laxity, a lack of tightness in the labial or vaginal lip tissue, vaginal dryness, medically known as atrophic vaginitis, mild to moderate stress urinary incontinence (SUI) or sexual or orgasmic dysfunction, an inability to reach orgasm, poor climaxing ability or a lengthy time until orgasm.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setThird(!openThird)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openThird ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openThird ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Does it hurt?</h2>
                    </div>
                    <div className={`flex ${openThird ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        The treatment is a warm sensation (temperature control allows the tissue to get as warm as tolerable).
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFourth(!openFourth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFourth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openFourth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>How long does it take?</h2>
                    </div>
                    <div className={`flex ${openFourth ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        Approximately 10-15 minutes for labia majora reduction and 15-20 minutes for vaginal tightening. The protocol consists of 3 treatments recommended one month apart.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFifth(!openFifth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFifth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openFifth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Is there any downtime/recovery time?</h2>
                    </div>
                    <div className={`flex ${openFifth ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        There is no downtime, no post-treatment discomfort or any restrictions.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setSixth(!openSixth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSixth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openSixth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>What kind of results can I expect?</h2>
                    </div>
                    <div className={`flex ${openSixth ? '' : 'hidden'} flex-col md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        Our patients have noted improvements in tightening (internal and external), incontinence, sensation, and lubrication after one treatment. Most of these results could be noted immediately or within days after the first treatment.
                        </p>
                        
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default OshotFaqs
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
                    <div className={`flex ${openSecond ? '' : 'hidden'} md:w-[50vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        If you suffer from urinary incontinence then this treatment could help. A consultation with our doctors will determine your suitability.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setThird(!openThird)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openThird ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openThird ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Does it hurt?</h2>
                    </div>
                    <div className={`flex ${openThird ? '' : 'hidden'} md:w-[50vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        You may experience tingling and pelvic floor muscles contractions during the procedure.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFourth(!openFourth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFourth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openFourth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>How long does it take?</h2>
                    </div>
                    <div className={`flex ${openFourth ? '' : 'hidden'} md:w-[50vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        One O Concept™ Chair session takes 30 minutes; multiple treatments are usually recommended. This depends on the severity of your concern. A detailed consultation with our doctors will determine what’s best for you.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFifth(!openFifth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFifth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openFifth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Is there any downtime/recovery time?</h2>
                    </div>
                    <div className={`flex ${openFifth ? '' : 'hidden'} md:w-[50vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        You can get back to your normal routine immediately after treatment.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setSixth(!openSixth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSixth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openSixth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>What kind of results can I expect?</h2>
                    </div>
                    <div className={`flex ${openSixth ? '' : 'hidden'} flex-col md:w-[50vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        It helps in gradual reduction in the frequency of your incontinence. Results may be noticeable after one session and will typically continue to improve with over the next few weeks and with more treatment. You may also see improvement in your orgasms, reduced pelvic pain, and more sculpted buttocks and abs.
                        </p>
                        {/* <ul className={`text-white text-[2.1vh] font-main my-[1vh] mb-6`}>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Increased blood flow and circulation</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Increased firmness of erection</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Strengthening of the penis</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Improved sexual capabilities</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Increased sensation and pleasure</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Smoother skin</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Fill implant “rippling”</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Lift inverted nipples</li>
                        </ul> */}
                        {/* <p className={`text-white text-[2.1vh] font-main`}>Like other Vampire Procedures, the Vampire Breast Lift™ injections will last about 12-24 months, depending on individual patients.</p> */}
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default OshotFaqs
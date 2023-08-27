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
                    <div className={`flex flex-col ${openSecond ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        If you have experienced fat loss and tissue sagging in the outer labia or lips of your vagina through weight loss, childbirth or the menopause, or you feel that this area is not cosmetically or functionally satisfying then you may be a good candidate for vaginal rejuvenation with soft tissue fillers.


                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Your suitability for augmentation of the labia majora will be determined during a consultation with our doctor to assess the current atrophy and skin laxity in the vulva. A full medical history will also be taken to ensure your suitability.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Depending on the level of correction required or desired, this will also determine the amount and type of product used which will be most suitable for your individual concerns. During your consultation, our doctor will be able to recommend the safest and most effective treatment options from The O Concept™ to rebuild your sexual well-being. The O Concept™ is a specialised combination of sexual aesthetic treatments brought together to treat female sexual dysfunction.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Those with a known allergy or sensitivity to hyaluronic acid will not be suitable for treatment.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        If you are pregnant or breast feeding, you will also not be suitable for this treatment until after that stage in your life.
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
                        To avoid discomfort in this sensitive area, treatment is performed after application of local anaesthetic and numbing cream.
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
                        The procedure takes approximately 20-30 minutes, including the application of the topical anaesthesia. Injecting the hyaluronic acid will take approximately 15 minutes.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFifth(!openFifth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFifth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openFifth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Is there any downtime/recovery time?</h2>
                    </div>
                    <div className={`flex flex-col ${openFifth ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        You will be able to return to work and your normal activities immediately post-treatment, but you should expect to feel some discomfort for a little while afterwards.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Expect some swelling, redness, tenderness, itching and pain in the vaginal area, which can be managed with over the counter pain medications such as paracetamol and cold compresses or ice packs. This should resolve after a few days.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        You should refrain from sexual intercourse for a week to avoid the risk of infection at the injection point(s).
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
                        Results from the augmentation will be visible immediately post-treatment. The body will slowly metabolise the hyaluronic acid gel over time. Given the specific products used, Desirial and Neauvia Rose, which are designed solely for use in the intimate areas of the female body, results are long-lasting, up to two years in some people. Repeat treatments are recommended after 8 to 12 months to maintain the effect.
                        </p>
                        
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default OshotFaqs
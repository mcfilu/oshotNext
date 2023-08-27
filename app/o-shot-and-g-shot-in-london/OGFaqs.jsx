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
                        Your suitability for treatment will be assessed in a consultation with our doctor where your detailed medical and sexual history will be discussed. Each woman’s sexual health and dysfunction needs are different, so a unique treatment combination will be tailored to suit you and your condition(s) or symptoms as part of The O Concept™ treatment programme. The O Concept™ is a specialised combination of sexual aesthetic treatments brought together to treat female sexual dysfunction. During your consultation, our doctor will be able to recommend the safest and most effective treatment options to rebuild your sexual well-being.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        There are few reasons why you may not be suitable for these combined treatments, but the ideal candidate is a sexually active women with near-normal sexual function or who has previously had normal sexual function.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Some women, approximately 1 in 20, suffer from a condition called Female Sexual Arousal Disorder which means that they find it difficult to get aroused, experience sexual pleasure and achieve an orgasm, despite wanting to have sex with their partner. Another condition Female Orgasmic Disorder means that a woman can get aroused but has difficulty achieving orgasm. These conditions can be improved with O-Shot and G-Shot treatments, depending on severity and history, and will be discussed in your consultation if you feel that you may be affected by these conditions.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        You will be required to come for treatment at a point in your menstrual cycle when you are not bleeding.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Pregnant or breast-feeding women will not be suitable for this treatment.
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
                        Many patients report experiencing no pain during the delivery of the PRP for the O-Shot treatment. However, a topical anaesthetic or numbing cream is applied before the treatment is administered to avoid any pain or discomfort being felt. A local anaesthetic injection will also be used inside the vagina before the G-shot treatment is performed.
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
                        The combined orgasm rejuvenation treatment will take 45 mins to an hour to complete, including taking the sample of blood and creating the plasma for reinjection
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
                        There is minimal downtime from this combined treatment, and you can return to your normal activities immediately. You may experience some minor bleeding from the G-shot injection and will be provided with a tampon or sanitary towel to wear for approximately 4 hours after treatment
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        You can resume normal sexually activity on the same day if you feel comfortable doing so, but if the G-shot injection site is tender then you may prefer to wait for 24-48 hours to allow the area to heal.
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
                        The use of PRP for treating female sexual disorders is being studied all the time. The combination of this treatment with the amplification of the G-spot can lead to significant improvements in the female sexual experience. Results will vary by individual, depending on age, medical and sexual history plus other factors, and cannot be guaranteed.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Results reported from the combined O-Shot and G-Shot treatments include rejuvenation of the vaginal labia (vulva), an increase in the ability to reach arousal from clitoral stimulation, heightened sensitivity leading to an increase in sex drive, increased natural lubrication, reduction in pain during sexual intercourse (dyspareunia) and an increased ability to reach climax, with stronger and more frequent orgasms experienced, as well as increased ability to achieve a vaginal orgasm.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Repeat treatments, especially using the hyaluronic acid dermal fillers in the G-Shot, which is metabolised by the body over time, may be required to maintain the improvements to your sexual experiences.
                        </p>
                        
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default OshotFaqs

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
                        There are a number of sexual arousal disorders that the O-Shot® can be used to address. It is estimated that as many as 1 in 20 women suffers from Female Sexual Arousal Disorder, which means that, while they may want to have sex, they find it difficult to get aroused, experience pleasure or achieve orgasm. 
                        </p>

                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>Around 5% of women are also thought to suffer from Female Orgasmic Disorder, where they can become aroused but have difficulty achieving orgasm. Some women also suffer from pain during and after sex, which is not from decreased lubrication or vaginal spasm, some suffer from stress urinary incontinence especially after delivery, If you have any of these problems then the O-Shot® could be a solution for you. As with any treatment, you will need to have a consultation with Dr Wakil first in order to assess your suitability and rule out any contraindications.</p>
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
                        As a non-surgical solution, there is minimal pain and discomfort associated with the O-Shot® treatment with some patients reporting experiencing no pain at all. The procedure is performed under Topical anaesthetic to minimise any pain.
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
                        The treatment will take around 40 minutes.
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
                        One of the big advantages of the O-Shot® treatment is that you can return to your normal activities immediately after treatment. Sexual intercourse can even be resumed the same day.
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
                        Some of the feedback from patients who have undergone the O-Shot® procedure reported that it may help them in achieving:
                        </p>
                        <ul className={`text-white text-[2.1vh] font-main my-[1vh] mb-6`}>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Greater arousal from clitoral stimulation</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Younger, smoother skin of the vulva (lips of the vagina)</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Stronger orgasm</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>More frequent orgasm</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Increased sexual desire</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Increased ability to have a vaginal orgasm</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Decreased pain for those with dyspareunia painful intercourse</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Increased natural lubrication</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Decreased urinary incontinence</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Great improvement for Lichen Sclerosus conditions</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Stops the tears, lacerations that accompanies Lichen Sclerosus condition</li>
                        </ul>
                        <p className={`text-white text-[2.1vh] font-main`}>Please be advised that these results vary between patients according to age, medical condition, hormonal levels, social habits and the results are not guaranteed.</p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default OshotFaqs
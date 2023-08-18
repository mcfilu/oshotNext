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
                <h1 className={`text-gold1  text-center text-[5vh] mb-[1vh] font-header`}>Frequently Asked Questions</h1>

                
                <hr className={`border-gold1 mt-[2vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setSecond(!openSecond)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSecond ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openSecond ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Am i suitable for this treatment?</h1>
                    </div>
                    <div className={`flex flex-col ${openSecond ? '' : 'hidden'} md:w-[50vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Your suitability for G-spot amplification will be determined in a consultation with our doctor. Detailed discussions about your sexual activity and function plus medical history will be required. During your consultation, our doctor will be able to recommend the safest and most effective treatment options available with The O Concept™ to rebuild your sexual well-being.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Ideal candidates are sexually active women with normal sexual function. If you have other vaginal concerns such as vaginal dryness, dyspareunia (painful intercourse), difficulty with arousal or orgasm, then diagnosis and treatment options for these will need to be discussed before we can consider a G-shot procedure.
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
                        <h1 className={`${openThird ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Does it hurt?</h1>
                    </div>
                    <div className={`flex ${openThird ? '' : 'hidden'} md:w-[50vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        To reduce discomfort during the procedure a local anaesthetic, lidocaine, will be applied to numb the area inside the vagina.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFourth(!openFourth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFourth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFourth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>How long does it take?</h1>
                    </div>
                    <div className={`flex flex-col ${openFourth ? '' : 'hidden'} md:w-[50vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        The procedure is performed in a similar way to the positioning you would take when having a PAP smear test. You will be asked to self-examine to locate your G-spot and the doctor will also perform a pelvic examination to locate the exact target placement for the dermal filler gel, based on your directions. A special speculum will then be placed into the vagina which exposes the agreed location of your G-spot. A local anaesthetic injection, to numb the area, can then be delivered before the injection of the hyaluronic acid product.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        The whole G-Shot procedure takes approximately 15 – 20 minutes.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFifth(!openFifth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFifth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFifth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Is there any downtime/recovery time?</h1>
                    </div>
                    <div className={`flex flex-col ${openFifth ? '' : 'hidden'} md:w-[50vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        There is very minimal downtime from this procedure, and you can return to your normal activities immediately. Once the local anaesthetic has worn off you may feel a little discomfort in your vagina, much like can be felt after a PAP smear test. This will disappear after a few hours.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        You will be given a tampon or sanitary towel to wear immediately after the procedure as there can be some minor bleeding from the injection site. This can be removed and disposed after approximately 4 hours. You need to wait 5-7 days before you can resume normal sexual activity. This would also allow the injection points to heal and reduce the risks of potential infection.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setSixth(!openSixth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSixth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openSixth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>What kind of results can I expect?</h1>
                    </div>
                    <div className={`flex ${openSixth ? '' : 'hidden'} flex-col md:w-[50vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        In a pilot study performed in the USA on 20 women, 87% reported enhanced sexual gratification and arousal after having G-spot amplification.
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
                        <p className={`text-white text-[2.1vh] font-main mt-[2vh]`}>Hyaluronic acid is naturally metabolised by the body over time, hence results from the G-shot procedure, will last approximately 9-12 months before a repeat treatment is required. Results vary from person to person.</p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default OshotFaqs
import React from 'react'

// import "/o-concept-animation.mp4" from '../../public/o-concept-animation.mp4';
import Link from 'next/link'

const OconceptInfo = () => {
  return (
    <div className={`flex w-full flex-row  md:min-h-[55vh]   `}>
        <div className={`hidden md:flex w-[45%]  flex  `}>
            <video src={"/o-concept-animation.mp4"} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video>
            {/* <img src={"/o-concept-animation.mp4"} className={`w-full h-full object-cover`}></img> */}
        </div>
        <div className={`hidden md:flex flex flex-col w-[55%] p-[2vh]  items-center`}>
            <h1 className={`text-gold1 text-[5vh] text-center font-header`}>O-Concept for Her</h1>
            <p className={`text-white font-poppins text-[2.1vh] text-justify mt-[3vh] mb-[2vh] font-main`}>The O Concept™ for Her provides a personalized treatment plan tailored to address specific concerns related to women's sexual health. With a customized approach, it ensures optimal results for conditions such as low libido, orgasmic difficulties, or vaginal health issues. What sets the O Concept™ for Her apart is its unique combination of treatments, carefully designed to meet individual needs and provide comprehensive care.</p>
            <p className={`text-white font-poppins text-[2.1vh] text-justify mt-[3vh] mb-[2vh] font-main`}>Dr. Sherif Wakil, renowned as a leading expert in Sexual Aesthetics, has been honored with numerous national and global awards for his groundbreaking work in sexual and reproductive health. His expertise and dedication have earned him the distinguished title of "God Father of Sexual Aesthetics." Patients can rely on his exceptional knowledge and experience, knowing that they are in the hands of a respected professional who is committed to providing the highest quality care for women's sexual well-being.</p>
            
            <Link href="/o-concept-treatment-in-london/"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Read More</button></Link>
        </div>
        

      <div className={`md:hidden flex flex-col items-center`}>
      <h1 className={`text-gold1 text-[5vh] text-center font-header`}>O-Concept for Her</h1>
      {/* <video src={boobs10} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
      <video src={"/o-concept-animation.mp4"} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video>
      <p className={`text-white font-poppins text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh] font-main`}>The O Concept™ for Her provides a personalized treatment plan tailored to address specific concerns related to women's sexual health. With a customized approach, it ensures optimal results for conditions such as low libido, orgasmic difficulties, or vaginal health issues. What sets the O Concept™ for Her apart is its unique combination of treatments, carefully designed to meet individual needs and provide comprehensive care.</p>
      <p className={`text-white font-poppins text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh] font-main`}>Dr. Sherif Wakil, renowned as a leading expert in Sexual Aesthetics, has been honored with numerous national and global awards for his groundbreaking work in sexual and reproductive health. His expertise and dedication have earned him the distinguished title of "God Father of Sexual Aesthetics." Patients can rely on his exceptional knowledge and experience, knowing that they are in the hands of a respected professional who is committed to providing the highest quality care for women's sexual well-being.</p>
            
            <Link href="/o-concept-treatment-in-london/"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Read More</button></Link>
      </div>
    
    </div>
  )
}

export default OconceptInfo
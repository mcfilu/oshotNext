import React from 'react'
import dynamic from 'next/dynamic'
const OconceptInfo = dynamic(() => import ('../components/OconceptInfo'))
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookNow from '../components/BookNow'
import Awards from '../components/Awards'
import Media from '../components/Media'
import YoutubeTestimonials from '../components/YoutubeTestimonials'
import WakilSummary from '../components/WakilSummary'
import TrustPilotSlider from '../components/TrustPilotSlider'
import FooterBook from '../components/FooterBook'

const GshotDetails = dynamic(() => import('./GshotDetails'))
import GshotBenefits from './GshotBenefits'
// import GshotDetails from './GshotDetails'
import GshotFaqs from './GshotFaqs'
import GshotImage from './GshotImage'
import GshotOpening from './GshotOpening'
import GshotServices from './GshotServices'
import GshotSummary from './GshotSummary'
import GshotTreated from './GshotTreated'
import GshotVideo from './GshotVideo'

export const metadata = {
    title: 'G Shot® | GShot® Injection in London',
    description : "Get the best G Shot® injection in London at Dr. Sherif Wakil's clinic. Experience top-notch Gshot® with the O Concept Treatment. Call +44 (0)20 3006 8459 now",
}

const Gshot = () => {
    // const [videoEnded, setVideoEnded] = useState(false);
    // // var Speed = 50;
    // const handleVideoEnd = () => {
    //     setVideoEnded(true);
    // };

  return (
    <div className={`bg- w-full`}>
        
        {/* <div className={`hidden md:flex fixed z-20 `}>
            <video src={Gshot_vid} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <GshotImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="gshot_opening" className={`flex  w-full  justify-center mt-20`}>
                <GshotOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <GshotDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <GshotBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <GshotTreated/>
              </div>
              
              {/* <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <GshotVideo/>
              </div> */}
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <GshotSummary/>
              </div>
              
              <div className={`flex  w-full md:w-[70%] md:mx-auto items-center mt-[7vh]`}>
                  <GshotFaqs/>
              </div>
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <OconceptInfo/>
              </div>
              {/* <div className={`flex  w-full h-auto  justify-center items-center  mt-[7vh] `}>
                  
              </div> */}
              <div className={`flex  w-full  justify-center items-center  mt-[7vh]`}>
                <YoutubeTestimonials/>
              </div>
              <div className={`flex  w-full  justify-center items-center `}>
                  <BookNow/>
              </div>
              
              
              
             
              
              
              <div className={`flex flex-col w-full  mt-[7vh]`}>
                  <TrustPilotSlider/>
              </div>
              
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <GshotServices/>
              </div>
              <div className={`flex flex-col  justify-center  my-[7vh]`}>
                    <div>
                        <Media/>
                    </div>
                    
                    <div className={`mt-[2vh]`}>
                        <Awards/>
                    </div>
                </div>
              

          </div>
        </div>
        <div className={`relative z-0 ` }>
          <Footer/>
        </div>
    </div>
  )
}

export default Gshot
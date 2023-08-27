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

const CoDetails = dynamic(() => import('./CoDetails'))
import CoBenefits from './CoBenefits'
// import CoDetails from './CoDetails'
import CoFaqs from './CoFaqs'
import CoImage from './CoImage'
import CoOpening from './CoOpening'
import CoServices from './CoServices'
import CoSummary from './CoSummary'
import CoTreated from './CoTreated'
import CoVideo from './CoVideo'

export const metadata = {
    title: 'CO2RE Intima Vaginal Rejuvenation in London | O-Shot',
    description : 'Experience vaginal rejuvenation in London with CO2RE Intima by Dr. Sherif Wakil. Discover the best O Concept treatment. Call +44 (0)20 3006 8459.',
}


const Co = () => {
    // const [videoEnded, setVideoEnded] = useState(false);
    // // var Speed = 50;
    // const handleVideoEnd = () => {
    //     setVideoEnded(true);
    // };

  return (
    <div className={`bg- w-full`}>
        
        {/* <div className={`hidden md:flex fixed z-20 `}>
            <video src={Co_vid} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <CoImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="co_opening"  className={`flex  w-full  justify-center mt-20`}>
                <CoOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <CoDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <CoBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <CoTreated/>
              </div>
              
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <CoVideo/>
              </div>
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <CoSummary/>
              </div>
              
              <div className={`flex  w-full md:w-[70%] md:mx-auto items-center mt-[7vh]`}>
                  <CoFaqs/>
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
                  <CoServices/>
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

export default Co
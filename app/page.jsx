import React from 'react'
import dynamic from 'next/dynamic'
const OconceptInfo = dynamic(() => import ('./components/OconceptInfo'))
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookNow from './components/BookNow'
import Awards from './components/Awards'
import Media from './components/Media'
import YoutubeTestimonials from './components/YoutubeTestimonials'
import WakilSummary from './components/WakilSummary'
import TrustPilotSlider from './components/TrustPilotSlider'
import FooterBook from './components/FooterBook'



import OshotBenefits from './oshot/OshotBenefits'
import OshotCompare from './oshot/OshotCompare'
const OshotDetails = dynamic(() => import('./oshot/OshotDetails'))
// import OshotDetails from './oshot/OshotDetails'
import OshotFaqs from './oshot/OshotFaqs'
import OshotImage from './oshot/OshotImage'
import OshotOpening from './oshot/OshotOpening'
import OshotServices from './oshot/OshotServices'
import OshotSummary from './oshot/OshotSummary'
import OshotTreated from './oshot/OshotTreated'
import OshotVideo from './oshot/OshotVideo'

// import { Oshot_vid } from '../assets'

export const metadata = {
    title: 'O Shot® UK | Revitalise and Rejuvenate with the O-Shot® in London',
    description : 'The London O-Shot® by Dr Sherif Wakil is made to enhance your intimate life. Explore O-Shot® UK price & reviews today. Call +44 (0)20 3006 8459 for a consultation.',
}

const Oshot = () => {
    // const [videoEnded, setVideoEnded] = useState(false);
    // // var Speed = 50;
    // const handleVideoEnd = () => {
    //     setVideoEnded(true);
    // };

  return (
    <div className={`bg- w-full`}>
        
        {/* <div className={`hidden md:flex fixed z-20 `}>
            <video src={Oshot_vid} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <OshotImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="oshot_opening" className={`flex  w-full  justify-center mt-20`}>
                <OshotOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <OshotDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <OshotBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <OshotTreated/>
              </div>
              
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <OshotVideo/>
              </div>
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <OshotSummary/>
              </div>
              
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <OshotCompare/>
              </div>
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <OshotFaqs/>
              </div>
             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <OshotFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <OshotCompare/>
                </div>
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
                  <OshotServices/>
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

export default Oshot
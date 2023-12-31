import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookNow from '../components/BookNow'
import Media from '../components/Media'
import Awards from '../components/Awards'
import FooterBook from '../components/FooterBook'
import WakilSummary from '../components/WakilSummary'

import WakilDetails from './WakilDetails'
import WakilOpening from './WakilOpening'
import WakilClinic from './WakilClinic'
import WakilImage from './WakilImage'
import WakilPreOpening from './WakilPreOpening'

export const metadata = {
    title: 'Dr. Sherif Wakil | Sexual Aesthetics Doctor in UK',
    description : 'Experience the best O-Shot and O Concept Treatment in London with Dr. Sherif Wakil. Call +44 (0)20 3006 8459 to book your appointment and revitalize your skin.',
}

const DrWakil = () => {
  return (
    <div className={`bg-primary w-full`}>
        

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>
            <WakilImage></WakilImage>
        </div>
        <div className="flex flex-col bg-black " >
            <div className={`flex flex-col justify-center`}>
              <div className={`flex  w-full  justify-center items-center mt-[8vh]`} >
                  <WakilPreOpening/>
              </div>
              <div id="wakil_opening" className={`flex  w-full  justify-center items-center mt-[8vh]`} >
                  <WakilOpening/>
              </div>
              <div className={`flex  w-full  justify-center items-center mt-[8vh]`} >
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center items-center mt-[8vh]`} >
                  <WakilDetails/>
              </div>
              
              
              {/* <div className={`flex  w-full  justify-center items-center mt-[8vh]`} >
                  <WakilClinic/>
              </div> */}
              
              <div className={`flex  w-full justify-center items-center mt-[8vh]`} >
                  <BookNow/>
              </div>
              <div className={`flex flex-col  justify-center my-[8vh]`}>
                    <div>
                        <Media/>
                    </div>
                    
                    <div className={`mt-[8vh]`}>
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

export default DrWakil



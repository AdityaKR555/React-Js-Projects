import React from 'react'
import Video from '../components/home/Video'
import HeroText from '../components/home/HeroText'
import MiddleText from '../components/home/MiddleText'
import BottomText from '../components/home/BottomText'

const Home = () => {
  return (
    <div>
       <div className='w-screen h-screen bg-red-500 fixed'>
            <Video />
       </div>
       <div className='w-screen h-screen relative flex flex-col pt-4 pb-2 justify-between'>
         <HeroText />
         <MiddleText />
         <BottomText />
       </div>
    </div>
  )
}

export default Home

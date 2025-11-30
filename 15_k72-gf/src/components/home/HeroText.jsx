import Video from './Video'

const HeroText = () => {
  return (
    <div className='flex flex-col item-center text-[9rem] text-white font-[font-1]  leading-[9vw] text-center'>
        <div>THE SPARK FOR</div>
        <div className='flex gap-2 item-center justify-center'>ALL<div className='h-29 w-65 rounded-full overflow-hidden'><Video /></div>THINGS</div>
        <div>CREATIVE</div>
    </div>
  )
}

export default HeroText

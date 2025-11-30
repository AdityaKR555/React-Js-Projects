const Video = () => {
  return (
    <div className='w-full h-full'>
       <video className='w-full h-full object-cover' autoPlay muted loop>
          <source src="../../../public/video/69496b2d.mp4" type="video/mp4"/>
       </video>
    </div>
  )
}

export default Video

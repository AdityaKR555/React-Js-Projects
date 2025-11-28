import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);


  const getImages = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=15`)
    setImages(response.data);
  }

  useEffect(() => {
    getImages();
  }, [images])  

  return (
    <>
      <div className="flex gap-4 flex-wrap justify-center px-4 py-8">
        {images.map((image,idx) => (
          <div  key={idx} className="rounded-xl overflow-hidden border-2 border-black w-100 h-70 shadow-[0_4px_10px_rgba(200,200,200,0.5)] bg-black p-2">
          <img src={image.download_url} className='object-cover w-[95%] h-[90%] display-block m-auto rounded-xl' />
          <h2 className='text-lg text-white text-center mt-1'>{image.author}</h2>
          </div>
        ))}
      </div>
      <div className='flex justify-center item-center gap-8 mb-4'>
          <button className='bg-orange-800 text-black font-bold rounded-xl px-4 py-2 text-xl' onClick={() => {
            if(page>1) setPage(page-1)
          }}>Prev</button>
          <h2 className='text-white text-2xl content-center font-bold'>{page}</h2>
          <button className='bg-orange-800 text-black font-bold rounded-xl px-4 py-2 text-xl' onClick={() => {
            setPage(page+1)
          }}>Next</button>
        </div>
    </>
  )
}

export default App

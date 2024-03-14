import React, { useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard'
import { getVideos } from '../services/allApi'

function Videos(addStatus) {

  const [allVideos, setAllVideos] = useState([])
  const [delStatus, setDelStatus] = useState([])

  useEffect(() => {
    getdata()
  },[addStatus, delStatus]);

  const getdata = async () => {
    const res = await getVideos()
    //console.log(res.data)
    setAllVideos(res.data)
    // console.log(allVideos)
  }

  return (
    <div className='bg-dark row border border-2 border-light p-5 '>
      {
      allVideos?
      allVideos.map(item => (
        <VideoCard key={item.id} video={item} setDelStatus={setDelStatus} />

      ))
    :
    <h1>No Videos</h1>
    }
    </div>
  )
}

export default Videos
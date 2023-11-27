import React, { useEffect, useState } from 'react'
import './player.css'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify' 
const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([])
  const [currentTrack, setCurrentTrack] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if(location.state){
      apiClient.get("playlists/" + location.state?.id + "/tracks").then((res)=>{
        setTracks(res.data.items);
        setCurrentTrack(res.data.items[0].track);
      })
    }
  }, [location.state])
  
  return (
    <div className='screen-container'>
      <div className='right-player-body'></div>
    </div>
  )
}

export default Player
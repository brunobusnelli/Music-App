import React, { useEffect, useState } from 'react'
import './player.css'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify' 
import Songcard from '../../components/Songcard/Songcard'
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
    <div className='screen-container flex'>
      <div className="left-player-body"></div>
      <div className='right-player-body'>
        <Songcard album={currentTrack.album} />
      </div>
    </div>
  )
}

export default Player
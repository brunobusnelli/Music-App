import React, { useEffect, useState } from 'react'
import './player.css'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify' 
import Songcard from '../../components/Songcard/Songcard'
import Queue from '../../components/Queue/Queue'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
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
  
  useEffect(() => {
    setCurrentTrack(tracks?.[currentIndex]?.track)
  }, [currentIndex, tracks])
  
  return (
    <div className='screen-container'>
      <div className="top-body">
      <div className="left-player-body">
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
      <div className='right-player-body'>
        <Songcard album={currentTrack?.album} />
      </div>
      </div>

      <div className="bottom-player-body">
      <AudioPlayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  )
}

export default Player
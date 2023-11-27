import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify'
import './library.css'
import { IconContext } from 'react-icons'
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const [playlists, setplaylists] = useState(null)
  
  useEffect(() => {
  apiClient.get("me/playlists").then(function (response){
    setplaylists(response.data.items)
  })
}, [])
  const navigate = useNavigate()
  const playPlaylist = (id) => {
    navigate('/player', {state: {id: id}})
  }


  return (
    <div className='screen-container'>
      <div className="library-body">
      {
        playlists?.map(playlist=>(
          <div className='playlist-card' key={playlist.id} onClick={()=>playPlaylist(playlist.id)}>
            <img src={playlist.images[0].url} alt="" className='playlist-art' />
            <p className='playlist-title'>{playlist.name}</p>
            <p className='playlist-subtitle'>{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{size: "40px", color: "white"}}>
              <FaPlayCircle />
              </IconContext.Provider>
            </div>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default Library
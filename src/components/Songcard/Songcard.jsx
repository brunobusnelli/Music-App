import React from 'react'
import './songcard.css'
import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'
const Songcard = ({album}) => {
  
    return (
    <div className='songcard-body flex'>
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album}/>
    </div>
  )
}

export default Songcard
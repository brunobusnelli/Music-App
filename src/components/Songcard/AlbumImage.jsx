import React from 'react'
import './albumimage.css'

const AlbumImage = ({url}) => {
    console.log(url)
  return (
        <div className="albumimage flex">
            <img src={url} alt="" className='albumimage-art'/>
        <div className="albumimage-shadow">
            <img src={url} alt="" className='albumimage-shadow' />
        </div>
        </div>
  )
}

export default AlbumImage
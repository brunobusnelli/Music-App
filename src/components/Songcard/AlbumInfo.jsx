import React from 'react'
import './albuminfo.css'

const AlbumInfo = ({album}) => {
    console.log(album)
    const artists = []
    album?.artists?.forEach(element => {
        artists.push(element.name)
    });
    
  return (
    <div className='albuminfo-card'>
        <div className='albumName-container'>
            <div className="marquee">
            <p>{album?.name + " - " + artists?.join(", ")}</p>
            </div>
        </div>
        <div className="album-info">
            <p>{`${album?.name} es un ${album?.album_type} de ${artists?.join(", ")} con ${album?.total_tracks} cancion(es)`}</p>
        </div>
        <div className="album-release">
            <p>Fecha de lanzamiento: {album?.release_date}</p>
        </div>
    </div>
  )
}

export default AlbumInfo
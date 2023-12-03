import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify'
import FeedCard from './FeedCard';
import './feed.css'

const Feed = () => {
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  
  useEffect(() => {
      apiClient
        .get(`/browse/featured-playlists`)
        .then((res) => {
          const a = res.data?.playlists.items.slice(0, 5);
          setFeatured(a);
        })
        .catch((err) => console.error(err));

      apiClient
        .get(`/browse/new-releases`)
        .then((res) => {
          const a = res.data?.albums.items.slice(0, 5);
          setNewRelease(a);
        })
        .catch((err) => console.error(err));
  }, []);




  return (
    <div className='screen-container'>
      <div className="feed-body">
        <FeedCard featured={featured} title="For you"  />
        <FeedCard newRelease={newRelease} title="New Release"  /> 
      </div>
    </div>
  )
}

export default Feed
import React from 'react';
import './feedcard.css';
import FeedCardEntry from './FeedCardEntry';

const FeedCard = ({ title, featured, newRelease }) => {
  console.log("featured", featured, "newRelease", newRelease);
  
  return (
    <div className='card-container'>
      <div className="card-body">
        <div className="card-name">
          {title}
        </div>
        <div className="card-entries">
          {featured
            ? featured.map((playlist, index) => (
                <FeedCardEntry
                  key={index}
                  title={playlist?.name}
                  subtitle={playlist?.tracks?.total + " Songs"}
                  image={playlist?.images[0]?.url}
                />
              ))
            : null}
           {newRelease
            ? newRelease.map((album, index) => (
                <FeedCardEntry
                  key={index}
                  title={album?.name}
                  subtitle={album?.artists[0]?.name}
                  image={album?.images[2]?.url}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

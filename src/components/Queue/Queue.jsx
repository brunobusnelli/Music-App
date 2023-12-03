import React from "react";
import "./queue.css";

const msToMinutes = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const Queue = ({ tracks, setCurrentIndex }) => {

  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Siguiente Cancion</p>
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div key={index + "key"} className="queue-item flex" onClick={() => setCurrentIndex(index)}>
              <p className="track-name">{track?.track?.name}</p>
              <p>{msToMinutes(track?.track?.duration_ms)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;


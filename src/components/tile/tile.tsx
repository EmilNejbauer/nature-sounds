import './tile.css';
import React, { useEffect, useState } from 'react';

interface Props {
    logo: string;
    url: string;
};

function Tile({logo, url}: Props) {
    const [volume, setVolume] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio(url));

    useEffect(() => {
      audio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
      }, false);
    }, [audio]); 

    const changeVolume = (volumeLevel: number) => {
        setVolume(volumeLevel)
        audio.volume = volumeLevel;
    }

    const playPause = () => {
        let playing = isPlaying;
    
        if (playing) {
          audio.pause();
        } else {
          audio.play();
        }
        setIsPlaying(!playing);
      };

    return (
      <div className={`tile  ${isPlaying ? "active" : ""}`}>
        <div onClick={playPause} className={`logo fa-solid ${logo}`}></div>
        <input
          className={`slider  ${isPlaying ? "" : "hidden"}`}
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={volume}
          onChange={event => {
            changeVolume(event.target.valueAsNumber)
          }}
        />
      </div>
    );
  }

export default Tile;
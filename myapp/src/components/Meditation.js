import React from "react";
import './Meditation.css';
import backAnimation from './video/rain.mp4'

function Meditation(){



    return (
            <div className="med">

                <div className="vid-container" >
                    <video autoPlay loop muted>
                        <source src={backAnimation} type="video/mp4" />
                    </video>
                </div>

                <div className="time-select">
                    <div id="back-button">
                        <img className="back-icon" src={'https://anwesharoses.github.io/Lighthouse/secondpage/meditat/back.png'}/>
                            <a href="../"> back </a>
                    </div>
                    <button data-time="60">1 minute</button>
                    <button data-time="300">5 minutes</button>
                    <button data-time="600">10 minutes</button>
                </div>
                <div className="player-container">

                    <audio className="song">
                        <source src="./songs/rain.mp3" />
                    </audio>
                    <img src={'https://anwesharoses.github.io/Lighthouse/secondpage/meditat/svg/play.svg'} className="play"></img>
                    <svg className="track-outline" width="453" height="453" viewBox="0 0 453 453" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="226.5" cy="226.5" r="216.5" stroke="white" stroke-width="20" />
                    </svg>
                    <svg className="moving-outline" width="453" height="453" viewBox="0 0 453 453" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" stroke-width="20" />
                    </svg>
                    <img src={'https://anwesharoses.github.io/Lighthouse/secondpage/meditat/svg/replay.svg'}className="replay"></img>
                    <div className="time-display"><h3>00:00</h3></div>

                </div>
                <div className="sound-picker">
                    {/* <button data-sound="./songs/rain.mp3" data-video="./video/rain.mp4"><img src="./png/rain.png">RAIN</button> */}

                    <button ><img src={'https://anwesharoses.github.io/Lighthouse/secondpage/meditat/png/rain.png'}/>RAIN</button>
                    <button ><img src={'https://anwesharoses.github.io/Lighthouse/secondpage/meditat/png/forest.png'}></img>NATURE</button>
                    <button ><img src={'https://anwesharoses.github.io/Lighthouse/secondpage/meditat/png/beach.png'}/>BEACH</button>
                </div>
            </div>

    );
}

export default Meditation;



{/* //JS  file */}
{/* const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");
//Sounds
const sounds = document.querySelectorAll(".sound-picker button");
//Time Display
const timeDisplay = document.querySelector(".time-display");
const outlineLength = outline.getTotalLength();
//Duration

const timeSelect = document.querySelectorAll(".time-select button");
let fakeDuration = 600;

outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
  fakeDuration % 60
)}`;

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song);
  });
});

play.addEventListener("click", function() {
  checkPlaying(song);
});

replay.addEventListener("click", function() {
    restartSong(song);
    
  });


const restartSong = song =>{
    let currentTime = song.currentTime;
    song.currentTime = 0;
    console.log("ciao")

}

timeSelect.forEach(option => {
  option.addEventListener("click", function() {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});

const checkPlaying = song => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "./svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};

song.ontimeupdate = function() {
  let currentTime = song.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;
  let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
  outline.style.strokeDashoffset = progress;

  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
}; */}
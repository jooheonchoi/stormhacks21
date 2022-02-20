import React, { useState, useEffect } from "react";
import "./Audio.css";
// import Journal from "./Journal";
import './Journal.css';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function Audio() {

  const HEIGHT = 300;
  const WIDTH = 300;

  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);
  let deleteClicked = false;

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else if (isListening && deleteClicked === true) {
      mic.start();
      mic.onend = () => {
        console.log("Delete is used");
        mic.start();
      };
      deleteClicked = false;
      console.log("delete reset");
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);

      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note]);
    setNote("");
  };

  const deleteAll = () => {
    console.log("delete");
    let deleteArray = savedNotes;
    var arrLength = deleteArray.length;
    for (var i = 0; i < arrLength; i++) {
      if (deleteArray[i]) {
        deleteArray.splice(i, 1);
      }
    }
    setIsListening((prevState) =>
      prevState === true ? console.log("true") : console.log("false")
    );
    deleteClicked = true;
  };

  const storeEntry = () => {
    console.log("katie");
    console.log(savedNotes);
    const entry = [...savedNotes];
    var arrayLength = entry.length;
    for (var i = 0; i < arrayLength; i++) {
      if (entry[i].includes("sad" || "depressed") === 0) {
        console.log("nothing found");
      } else {
        console.log("FOUND");
      }
    }
  };


  // journal
  const startVideo = () => {
    setIsListening(true);
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName('app__videoFeed')[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };



  const stopVideo = () => {
    setIsListening(false);
    setPlaying(false);
    let video = document.getElementsByClassName('app__videoFeed')[0];
    video.srcObject.getTracks()[0].stop();
  };






  return (
    <div className="general">
      <h2 className="titleVideo"> Video Journal Log </h2>
            <p className="subTitleVideo">A place of no judgement and where all emotion are accepted</p>
      <div className="container">
        <div className="box">
          <h2>Current Note</h2>
          {isListening ? <span>🎙️ Recording... </span> : <span>🛑🎙️ Recording has stopped</span>}
          <button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          {/* <button onClick={() => {
            setIsListening((prevState) => !prevState);
            // startVideo();
          }}>
            Start
          </button> */}

          {/* <button onClick={() => {
            setIsListening((prevState) => !prevState);
            // stopVideo();
          }}>
            Stop
          </button> */}

          {/* journal */}
          <div className="app">
            
            <div className="app__container">
              <video
                height={HEIGHT}
                width={WIDTH}
                muted
                autoPlay
                className="app__videoFeed"
              ></video>
            </div>
            <div className="app__input">
              {playing ? (
                <button onClick={stopVideo}>Stop</button>
              ) : (
                <button onClick={startVideo}>Start</button>
              )}
            </div>
          </div>



          {/* <Journal/> */}
          <p>{note}</p>
        </div>
        <div className="box">
          <h2>Notes</h2>
          {savedNotes.map((n) => (
            <p key={n}>{n}</p>
          ))}
          <button onClick={storeEntry}>Curated for me</button>
          <button onClick={deleteAll}>Delete All</button>
        </div>
      </div>
    </div>
  );
}

export default Audio;

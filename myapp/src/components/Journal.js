import React, { useState } from 'react';
import './Journal.css';

function Journal() {
	const [playing, setPlaying] = useState(false);

	const HEIGHT = 300;
	const WIDTH = 300;

	const startVideo = () => {
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
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
	};

	return (
		<div className="app">
            <h2>Welcome to your emotions video journal</h2>

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
	);
}


export default Journal;
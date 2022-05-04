
const videoElements = document.querySelectorAll('#services-page header video');

Array.from( videoElements ).forEach( ( videoElement, i ) => {

	const nextVideoElement = videoElements[ ( i + 1 ) % 3 ];

	videoElement.addEventListener( "timeupdate", function () {

		if ( videoElement.currentTime > videoElement.duration - 0.5 ) {

			videoElement.pause();

			videoElement.style.display = 'none';

			nextVideoElement.style.display = 'unset';

			nextVideoElement.currentTime = 0.5;

			nextVideoElement.play();

		}

	});

} );

/*
const videoURLs = [
	"/assets/cad-service-teaser.mp4", 
	"/assets/rendering-service-teaser.mp4",
	"/assets/innovation-service-teaser.mp4"
];

let activeVideo = 0;

videoElement.addEventListener( 'ended', e => {
	// update the new active video index
	activeVideo = ( activeVideo + 1 ) % videoURLs.length;

	// update the video source and play
	videoElement.src = videoURLs[ activeVideo ];
});
*/

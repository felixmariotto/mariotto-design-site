
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

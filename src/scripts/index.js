let percentBar = 0;
let counter = 0;
let animationEnabled = true;
let playedVideo = null;
const loadingSpeed = 0.037;
const loadedBar = document.querySelector('#index-carousel-nav-loaded');
const carouselButtons = document.querySelectorAll('#index-carousel-nav button');
const carouselSections = document.querySelectorAll('#index-carousel section')
const indexCarousel = document.querySelector('#index-carousel');

indexCarousel.addEventListener('mouseover', () => {

    animationEnabled = false;

    loadedBar.classList.add( 'disabled' );

} );

indexCarousel.addEventListener('mouseleave', () => {

    animationEnabled = true;

    loadedBar.classList.remove( 'disabled' );

} );

for ( let i=0 ; i<3 ; i++ ) {

    const button = carouselButtons[ i ];

    button.addEventListener( 'click', () => {

        // set loading bar at the level of the clicked button,
        // so the animation is resumed from the clicked button.
        percentBar = ( 100 / 3 ) * i;
        
        setFocusOn( i );

    } );

};

setInterval( () => {

    if ( !animationEnabled ) return

    percentBar = ( percentBar + loadingSpeed ) % 100;
    counter = ( counter + 1 ) % 6;

    loadedBar.style.width = percentBar + '%';

    if ( counter == 1 ) {

        const focusedID = Math.floor( percentBar / 33.33 ) % 3;

        setFocusOn( focusedID )

    }

}, 10 );

function setFocusOn( id ) {

    if ( id !== playedVideo ) {
        // reset the video
        const video = carouselSections[ id ].querySelector('video');
        video.pause();
        video.currentTime = 0;
        video.play();
        playedVideo = id;
    }

    for ( let i=0 ; i<3 ; i++ ) {
        carouselButtons[ i ].classList.remove('focus');
        carouselSections[ i ].classList.remove('focus');
        if ( i == id ) {
            carouselButtons[ i ].classList.add('focus');
            carouselSections[ i ].classList.add('focus');
        }
    }

}
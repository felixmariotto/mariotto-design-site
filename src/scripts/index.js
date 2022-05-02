let percentBar = 0;
let counter = 0;
let animationEnabled = true;
let playedVideo = null;
const loadingSpeed = 0.037;
const loadedBar = document.querySelector('#index-carousel-nav-loaded');
const carouselNav = document.querySelector('#index-carousel-nav');
const carouselButtons = document.querySelectorAll('#index-carousel-nav button');
const carouselSections = document.querySelectorAll('#index-carousel section')

for ( let i=0 ; i<3 ; i++ ) {

    const button = carouselButtons[ i ];

    button.addEventListener( 'mouseover', () => {

        animationEnabled = false;
        
        setFocusOn( i );

        loadedBar.classList.add( 'disabled' );

    } );

    button.addEventListener( 'mouseleave', () => {

        animationEnabled = true;

        loadedBar.classList.remove( 'disabled' );

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
        const video = carouselSections[ id ].children[ 1 ];
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
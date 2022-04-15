
const defaultLocale = "en";
let locale = defaultLocale;
let transcripts;
let defaultTranscript;
let transcript;

// fetch the text transcripts

function fetchTranscript( country ) {
	return new Promise( ( resolve, reject ) => {
		fetch( `./i18n/lang/${ country }.json` )
		.then( response => response.json() )
		.then( data => resolve( data ) )
		.catch( err => reject(err) );
	} );
}

const enPromise = fetchTranscript("en");
const frPromise = fetchTranscript("fr");
const itPromise = fetchTranscript("it");
const domReady = new Promise( (resolve) => {
	window.addEventListener( 'load', () => resolve() );
} );

Promise.all( [ enPromise, frPromise, itPromise, domReady ] )
.then( values => {
	transcripts = {
		en: values[ 0 ],
		fr: values[ 1 ],
		it: values[ 2 ]
	};
} )
.then( v => {
	initTranslate();
} )

// when the transcripts have been loaded, we get the visitor preferredd language and translate if possible/needed.

function initTranslate() {
	
	defaultTranscript = transcripts[ defaultLocale ];
	transcript = transcripts[ locale ];

	// Retrieve user-preferred locales from the browser
	const browserLocales = navigator.languages.map( locale => locale.split( "-" )[ 0 ] );

	const intersectLocales = browserLocales.filter( e => Object.keys( transcripts ).includes( e ) );

	locale = intersectLocales[0] || defaultLocale;

	transcript = transcripts[ locale ];

	translatePage();

}

// Replace the inner text of each element that has a
// i18n-key attribute with the translation corresponding
// to its i18n-key
function translatePage() {
	document
	.querySelectorAll( "[i18n]" )
	.forEach( translateElement );
}

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's i18n-key
function translateElement( element ) {
  const key = element.getAttribute( "i18n" );
  const text = transcript[ key ] || defaultTranscript[ key ];
  element.innerText = text;
}
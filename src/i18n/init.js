
import frTranscript from './lang/fr.json';
import enTranscript from './lang/en.json';
import itTranscript from './lang/it.json';

//

const defaultLocale = "en";
let locale = defaultLocale;

const transcripts = {
	en: enTranscript,
	fr: frTranscript,
	it: itTranscript
};

const defaultTranscript = transcripts[ defaultLocale ];
let transcript = transcripts[ locale ];

//

window.addEventListener( 'load', () => {

	// Retrieve user-preferred locales from the browser
	const browserLocales = navigator.languages.map( locale => locale.split( "-" )[ 0 ] );

	const intersectLocales = browserLocales.filter( e => Object.keys( transcripts ).includes( e ) );

	locale = intersectLocales[0] || defaultLocale;

	transcript = transcripts[ locale ];

	translatePage();

} );

// Replace the inner text of each element that has a
// i18n-key attribute with the translation corresponding
// to its i18n-key
function translatePage() {
	document
	.querySelectorAll( "[i18n-key]" )
	.forEach( translateElement );
}

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's i18n-key
function translateElement( element ) {
  const key = element.getAttribute( "i18n-key" );
  const text = transcript[ key ] || defaultTranscript[ key ];
  element.innerText = text;
}
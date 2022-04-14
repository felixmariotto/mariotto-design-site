
import frTranscript from './lang/fr.json';
import enTranscript from './lang/en.json';
import itTranscript from './lang/it.json';
let transcript = enTranscript;

// The locale our app first shows
const defaultLocale = "en";
const supportedLocales = [ "en", "fr", "it" ];
let locale = defaultLocale;

window.addEventListener( 'load', () => {

	// Retrieve user-preferred locales from the browser
	const browserLocales = navigator.languages.map( locale => locale.split( "-" )[ 0 ] );

	const intersectLocales = browserLocales.filter( e => supportedLocales.includes( e ) );

	locale = intersectLocales[0] || defaultLocale;

	updateTranscript();

	translatePage();

} );

// update the default updateTranscript accroding to the current locale.
function updateTranscript() {
	switch ( locale ) {
		case 'en':
			transcript = enTranscript;
			break
		case 'fr':
			transcript = frTranscript;
			break
		case 'it':
			transcript = itTranscript;
			break
		default:
			transcript = enTranscript;
			break
	}
}

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
  const text = transcript[ key ];
  element.innerText = text;
}
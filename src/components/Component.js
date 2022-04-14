
/*
General helper class to assist in the creation of standardized html elements.
*/

export default function Component( options ) {

	options = options || {};
	options.tagName = options.tagName || 'DIV';
	options.i18n = options.i18n || null;

	const component = document.createElement( options.tagName );

	// add i18n keys to define the text content that should fill the
	// element, according to the visitor's preferred language.

	if ( options.i18n ) {

		component.setAttribute( 'i18n-key', options.i18n );

	}

	// if classes were provided, we add the classes to the element.

	if ( options.classes ) {

		options.classes
		.split(' ')
		.forEach( c => component.classList.add( c ) );

	}

	if ( options.id ) {

		component.id = options.id;
		
	}

	//

	if ( options.src ) {

		component.src = options.src;

	}

	//

	return component

}
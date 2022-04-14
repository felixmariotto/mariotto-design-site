
import Component from './Component.js';

//

export default function Navbar() {

	const container = Component({ classes: 'navbar' });

	container.append(
		NavbarLink( 'navbar-about', '/aboutus' ),
		NavbarLink( 'navbar-services', '/services' ),
		NavbarLink( 'navbar-contact', '/contact' )
	);

	return container

}

//

function NavbarLink( title, href ) {

	const link = Component( {
		tagName: 'A',
		i18n: title,
		href
	} );

	return link

}
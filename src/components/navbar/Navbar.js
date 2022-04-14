import './navbar.css';
import Component from '../Component.js';
import logoURL from '../../assets/logo.png';

//

export default function Navbar() {

	const container = Component({ id: 'navbar' });

	const rightContainer = Component({ id: 'navbar-right-container' });

	container.append(
		Logo(),
		rightContainer
	);

	rightContainer.append(
		NavbarLink( 'navbar-about', '/aboutus' ),
		NavbarLink( 'navbar-services', '/services' ),
		NavbarLink( 'navbar-contact', '/contact' )
	)

	return container

}

//

function Logo() {

	const logo = Component( {
		tagName: 'IMG',
		src: logoURL,
		id: 'navbar-logo'
	} );

	return logo

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
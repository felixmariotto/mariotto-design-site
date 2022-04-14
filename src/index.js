import './index.css';
import Component from './components/Component.js';
import './i18n/init.js';

const title = Component({ tagName:"H1", i18n: "title" });
const subtitle = Component({ tagName:"H2", i18n: "subtitle" });

document.body.append( title, subtitle );

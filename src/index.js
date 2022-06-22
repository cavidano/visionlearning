
//////////////////////////////////////////////
// A. Module Imports
//////////////////////////////////////////////

import './modules/accents';

import './modules/accessibility';

import Accordion from './modules/accordion';

import Alerts from './modules/alerts';

import './modules/article';

import './modules/aspect-ratios';

import './modules/backdrops';

import './modules/borders';

import './modules/breakpoints';

import Buttons from './modules/buttons';

import './modules/cards';

import Collapse from './modules/collapse';

// import './modules/color';

import './modules/containers';

import './modules/display';

import './modules/document';

import './modules/flex';

import Forms from './modules/forms';

import './modules/grid';

import './modules/icons';

import './modules/links';

// import Modal from './modules/modal';

import Navigation from './modules/navigation';

import './modules/opacity';

import './modules/overflow';

import './modules/position';

import './modules/shadows';

import './modules/sizing';

import './modules/spacing';

import Tabs from './modules/tabs';

import Tables from './modules/tables';

import './modules/typography';

import './modules/z-index/index';

//////////////////////////////////////////////
// B. Initialize JS Modules
//////////////////////////////////////////////

const accordion = new Accordion();
accordion.init();

const alerts = new Alerts();
alerts.init();

const buttons = new Buttons();
buttons.init();

const collapse = new Collapse();
collapse.init();

const forms = new Forms();
forms.init();

// const modal = new Modal();
// modal.init();

const navigation = new Navigation();
navigation.init();

const tabs = new Tabs();
tabs.init();

const tables = new Tables();
tables.init();

//////////////////////////////////////////////
// Custom Modules
//////////////////////////////////////////////

import Layout from './custom_modules/layout'; 

const layout = new Layout();
layout.init();

import './custom_modules/navigation';

import Quiz from './custom_modules/quiz'; 

import Modal from './custom_modules/modal';

const modal = new Modal();
modal.init();

const quiz = new Quiz();
quiz.init();

import ReadingToggles from './custom_modules/reading_toggles';
new ReadingToggles();

import './custom_modules/css_variables';

import './custom_modules/lists';

import './custom_modules/color';

import './custom_modules/section_cards';

//////////////////////////////////////////////
// Environments (For Testing Webpack)
//////////////////////////////////////////////

if (process.env.NODE_ENV === 'development') {
    console.log("Development Mode");
} else if (process.env.NODE_ENV === 'production') {
    console.log("Production Mode");
}
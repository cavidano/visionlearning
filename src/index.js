
//////////////////////////////////////////////
// A. Module Imports
//////////////////////////////////////////////

import './modules/accents';

import './modules/accessibility';

// import Accordion from './modules/accordion';

import Alerts from './modules/alerts';

import './modules/article';

import './modules/aspect-ratios';

import './modules/backdrops';

// import './modules/borders';

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

// const accordion = new Accordion('.accordion');
// accordion.init();

const alerts = new Alerts('.alert--dismissable');
alerts.init();

const buttons = new Buttons('.button--icon-only');
buttons.init();

const collapse = new Collapse('[data-target-toggle]');
collapse.init();

const forms = new Forms('form[novalidate]', '.form-entry', '.file-upload');
forms.init();

// const modal = new Modal('.modal', '[data-modal-open]');
// modal.init();

const navigation = new Navigation();
navigation.init();

const tables = new Tables();
tables.init();

const tabs = new Tabs();
tabs.init();

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

import Accordion from './custom_modules/accordion';

const accordion = new Accordion();
accordion.init();

const quiz = new Quiz();
quiz.init();

import ReadingToggles from './custom_modules/reading_toggles';
new ReadingToggles();

import './custom_modules/css_variables';

import './custom_modules/lists';

import './custom_modules/borders';

import './custom_modules/color';

import './custom_modules/section_cards';
//////////////////////////////////////////////
// Polyfills
//////////////////////////////////////////////

import "element-closest-polyfill";

//////////////////////////////////////////////
// Natura11y Modules
//////////////////////////////////////////////

import "./modules/accents";

import Accessibility from "./modules/accessibility";
new Accessibility();

import Accordion from "./modules/accordion";
new Accordion();

import Alerts from "./modules/alerts";
new Alerts();

// import "./modules/article";

import "./modules/aspect-ratios";

import "./modules/backdrops";

import "./modules/borders";

import "./modules/breakpoints";

import Buttons from "./modules/buttons/";
new Buttons();

import "./modules/cards";

import Collapse from "./modules/collapse";
new Collapse();

import "./modules/color";

import "./modules/containers";

import "./modules/display";

import Document from "./modules/document";
new Document();

import "./modules/flex";

import Forms from "./modules/forms";
new Forms();

import "./modules/grid";

import "./modules/icons";

import "./modules/language";

import "./modules/links";

import Modal from "./modules/modal";
new Modal();

import Navigation from "./modules/navigation";
new Navigation();

import "./modules/opacity";

import "./modules/overflow";

import "./modules/position";

import "./modules/shadows";

import "./modules/sizing";

import "./modules/spacing";

import Tabs from "./modules/tabs";
new Tabs();

import Tables from "./modules/tables";
new Tables();

import "./modules/typography";

import "./modules/z-index";

//////////////////////////////////////////////
// Custom Modules
//////////////////////////////////////////////

import Layout from "./custom_modules/layout"; 
new Layout();

import "./custom_modules/navigation";

import FullHeight from "./custom_modules/full-height";
new FullHeight();

import Quiz from "./custom_modules/quiz"; 
new Quiz();

import ReadingToggles from "./custom_modules/reading_toggles"; 
new ReadingToggles();

import "./custom_modules/css_variables";

import "./custom_modules/color";

//////////////////////////////////////////////
// Environments (For Testing Webpack)
//////////////////////////////////////////////

if (process.env.NODE_ENV === 'development') {
    console.log("Development Mode");
} else if (process.env.NODE_ENV === 'production') {
    console.log("Production Mode");
}
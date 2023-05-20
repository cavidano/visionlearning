/*

In this file:

// A. SCSS
// B. JS

*/

//////////////////////////////////////////////
// A. SCSS
//////////////////////////////////////////////

import './scss/styles.scss';

//////////////////////////////////////////////
// B. JS Modules
//////////////////////////////////////////////

import Alert from './js/alert';
const alert = new Alert();
alert.init();

import Button from './js/button';
const button = new Button();
button.init();

import Collapse from './js/collapse'
const collapse = new Collapse();
collapse.init();

import Form from './js/form';
const form = new Form();
form.init();

import Lightbox from './js/lightbox';
const lightbox = new Lightbox();
lightbox.init();

import Navigation from './js/navigation';
const navigation = new Navigation();
navigation.init();

import Table from './js/table';
const table = new Table();
table.init();

import Tab from './js/tab';
const tab = new Tab();
tab.init();

//////////////////////////////////////////////
// C. Custom JS Modules
//////////////////////////////////////////////

import Accordion from './js/customJS/accordion';
const accordion = new Accordion();
accordion.init();

import { AnchorNav } from './js/customJS/table-of-contents';
const anchorNav = new AnchorNav();
anchorNav.init();

import { CompCheck } from './js/customJS/quiz'; 
const compCheck = new CompCheck();
compCheck.init();

import Layout from './js/customJS/layout'; 
const layout = new Layout();
layout.init();

import Modal from './js/customJS/modal';
const modal = new Modal();
modal.init();

import ReadingToggles from './js/customJS/reading-toggles';
new ReadingToggles();

import Search from './js/customJS/search';
const search = new Search();
search.init();
//////////////////////////////////////////////
// A. SCSS
//////////////////////////////////////////////

import './scss/styles.scss';

//////////////////////////////////////////////
// B. JS
//////////////////////////////////////////////

// Natura11y JS Modules

import AlertDismissable from './js/alert';
import Button from './js/button';
import Collapse from './js/collapse';
import FormInput, { FormSubmission, FormFileUpload } from './js/form';
import Lightbox from './js/lightbox';
import Navigation from './js/navigation';
import Table from './js/table';
import Tab from './js/tab';

// Custom JS Modules

import Accordion from './js/customJS/accordion';
import { AnchorNav } from './js/customJS/table-of-contents';
import { CompCheck } from './js/customJS/quiz'; 
import Layout from './js/customJS/layout'; 
import Modal from './js/customJS/modal';
import ReadingToggles from './js/customJS/reading-toggles';

//////////////////////////////////////////////
// C. Class Instantiation
//////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {

    const alertDismissable = new AlertDismissable();
    alertDismissable.init();

    const button = new Button();
    button.init();

    const collapse = new Collapse();
    collapse.init();

    const formInput = new FormInput();
    formInput.init();

    const formSubmission = new FormSubmission();
    formSubmission.init();

    const formFileUpload = new FormFileUpload();
    formFileUpload.init();

    const lightbox = new Lightbox();
    lightbox.init();

    const navigation = new Navigation();
    navigation.init();

    const table = new Table();
    table.init();

    const tab = new Tab();
    tab.init();

    const accordion = new Accordion();
    accordion.init();

    // Custom JS Modules

    const anchorNav = new AnchorNav();
    anchorNav.init();

    const compCheck = new CompCheck();
    compCheck.init();

    const layout = new Layout();
    layout.init();

    const modal = new Modal();
    modal.init();

    const readingToggles = new ReadingToggles();
    readingToggles.init();

});
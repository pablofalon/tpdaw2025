'use strict';

var contactFormElement;
var contactNameInputElement;
var contactNameErrorElement;
var contactEmailInputElement;
var contactEmailErrorElement;
var contactMessageInputElement;
var contactMessageErrorElement;

function initializeContactDom() {
    contactFormElement = document.getElementById('contact-form');
    contactNameInputElement = document.getElementById('contact-name');
    contactNameErrorElement = document.getElementById('contact-name-error');
    contactEmailInputElement = document.getElementById('contact-email');
    contactEmailErrorElement = document.getElementById('contact-email-error');
    contactMessageInputElement = document.getElementById('contact-message');
    contactMessageErrorElement = document.getElementById('contact-message-error');
}

document.addEventListener('DOMContentLoaded', initializeContactDom);

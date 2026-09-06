'use strict';

function isValidContactName(name) {
    var trimmedName = name.trim();
    return trimmedName.length > 0 && /^[A-Za-z0-9À-ÖØ-öø-ÿ ]+$/.test(trimmedName);
}

function isValidContactEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidContactMessage(message) {
    return message.trim().length > 5;
}

function handleContactFormSubmit(submitEvent) {
    var isFormValid = true;
    submitEvent.preventDefault();
    if (isValidContactName(contactNameInputElement.value)) {
        contactNameErrorElement.classList.add('hidden');
    } else {
        contactNameErrorElement.classList.remove('hidden');
        isFormValid = false;
    }
    if (isValidContactEmail(contactEmailInputElement.value)) {
        contactEmailErrorElement.classList.add('hidden');
    } else {
        contactEmailErrorElement.classList.remove('hidden');
        isFormValid = false;
    }
    if (isValidContactMessage(contactMessageInputElement.value)) {
        contactMessageErrorElement.classList.add('hidden');
    } else {
        contactMessageErrorElement.classList.remove('hidden');
        isFormValid = false;
    }
    if (!isFormValid) {
        return;
    }
}

function attachContactEventListeners() {
    contactFormElement.addEventListener('submit', handleContactFormSubmit);
}

document.addEventListener('DOMContentLoaded', attachContactEventListeners);

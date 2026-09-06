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

function buildMailtoUrl(name, email, message) {
    var subject = 'Contacto desde Buscaminas - ' + name;
    var body = 'Nombre: ' + name + '\n' + 'Correo: ' + email + '\n' + 'Mensaje: ' + message;
    return 'mailto:pablofalon@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
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
    window.location.href = buildMailtoUrl(
        contactNameInputElement.value.trim(),
        contactEmailInputElement.value.trim(),
        contactMessageInputElement.value.trim()
    );
}

function attachContactEventListeners() {
    contactFormElement.addEventListener('submit', handleContactFormSubmit);
}

document.addEventListener('DOMContentLoaded', attachContactEventListeners);

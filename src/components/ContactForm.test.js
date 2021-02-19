import React from 'react';
import { render, screen } from "@testing-library/react";
import ContactForm from './ContactForm.js';
import userEvent from '@testing-library/user-event';

test('Making sure that the Contact Form component renders correctly', () => {
    render(<ContactForm />)
})

test('When a person fills out and submits the contact form, a new contact is added and displayed', () => {
    render(<ContactForm />);
    // Arrange phase of the test
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    // Act phase of the test - This is where an action will be simulated on elements of the component
    userEvent.type(firstNameInput, 'Jayaram');
    userEvent.type(lastNameInput, 'Nair');
    userEvent.type(emailInput, 'jsnair46@gmail.com');
    userEvent.type(messageInput, 'I am a Coder!');

})
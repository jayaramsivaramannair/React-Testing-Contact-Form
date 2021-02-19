import React from 'react';
import { render, screen } from "@testing-library/react";
import ContactForm from './ContactForm.js';
import userEvent from "@testing-library/user-event";


test('Making sure that the Contact Form component renders correctly', () => {
    render(<ContactForm />)
})

test('When a user fills out and submit the form, a new contact is created and displayed', async () => {
    //Arrange phase of the test
    render(<ContactForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    //Act - type into the form , filling out all the fields and then submit
    userEvent.type(firstNameInput, "Jayaram");
    userEvent.type(lastNameInput, "Nair");
    userEvent.type(emailInput, "jsnair46@gmail.com");
    userEvent.type(messageInput, 'I am a coder');
    userEvent.click(submitButton);

    // Assert - make sure that the new contact we created is displayed on the screen
    const firstName = screen.findByText(/jayaram/i);

    firstName.then((element) => {
        console.log(element);
        expect(element).toBeInTheDocument();
    })

    const lastName = screen.findByText(/nair/i);

    lastName.then((element) => {
        console.log(element);
        expect(element).toBeInTheDocument();
    })

    const email = screen.findByText(/jsnair46@gmail.com/i);

    email.then((element) => {
        console.log(element);
        expect(element).toBeInTheDocument();
    })

    const message = screen.findByText(/i am a coder/i);

    message.then((element) => {
        console.log(element);
        expect(element).toBeInTheDocument();
    })
})
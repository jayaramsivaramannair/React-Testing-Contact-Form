import React from 'react';
import { render, screen } from "@testing-library/react";
import ContactForm from './ContactForm.js';
import userEvent from '@testing-library/user-event';

test('Making sure that the Contact Form component renders correctly', () => {
    render(<ContactForm />)
})


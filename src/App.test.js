import React from 'react';
import { render } from "@testing-library/react";
import App from "./App";

test('Making sure that the App renders without errors', () => {
    render(<App />);
})

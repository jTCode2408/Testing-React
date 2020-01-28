//test if component rendering w characters
//test api call
//test next & prev button clicks
import React from 'react';
import { render, fireEvent, wait, getByText } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';


test (' renders character component', async()=>{
    const { findByText, getByText } = render(<StarWarsCharacters/>);
    findByText(/Darth Vader/i);
    findByText(/leia Organa/i);
    
//buttons tests

const nextButton = getByText(/Next/i);
fireEvent.click(nextButton);

expect(nextButton.type).toBe('submit');

const backButton = getByText(/Previous/i);
fireEvent.click(backButton);

expect(backButton.type).toBe('submit');

});
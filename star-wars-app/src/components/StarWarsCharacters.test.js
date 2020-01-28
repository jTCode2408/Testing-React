//test if component rendering w characters
//test api call
//test next & prev button clicks
import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';


test (' renders character component', async()=>{
    const { findByText, findByAltText } = render(<StarWarsCharacters/>);
    findByText(/Darth Vader/i);
    findByText(/leia Organa/i);
    
})
// test if component rendering w characters
// test api call
// test next & prev button clicks
import React from 'react';
import { render, fireEvent, wait, waitForDomChange } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';
import { getData as mockGetData} from '../api';

jest.mock('../api');

test (' renders character component with buttons & buttons return data on click', async()=>{
    mockGetData.mockResolvedValueOnce({ 
        id:1,
        next:'https://swapi.co/api/people/?page=2',
        results:[
        {
            name:'Luke Skywalker', url:'testURL'
        }]})

    const { findByText, getByText, getAllByText } = render(<StarWarsCharacters/>);
    findByText(/Darth Vader/i);
    findByText(/Obi-Wan Kenobi/i);
    
    
// buttons render tests

const nextButton = getByText(/Next/i);
fireEvent.click(nextButton);
expect(nextButton.type).toBe('submit');

const backButton = getByText(/Previous/i);
fireEvent.click(backButton);
expect(backButton.type).toBe('submit');

//api test
expect(mockGetData).toHaveBeenCalledTimes(1);
expect(mockGetData).toHaveBeenCalledWith("https://swapi.co/api/people");
waitForDomChange();
await wait(() =>  expect(getByText(/luke/i)))
// await wait(() => expect(getAllByText(/asdfas/gi))); //to break test
});


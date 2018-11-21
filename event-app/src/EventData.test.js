import React from 'react';
import ReactDOM from 'react-dom';
import { getEvent } from './EventData';

it('can get data from event data json', () => {
  
    const eventData = getEvent();

    expect(eventData.title).toBe("SPA in a Day");
});

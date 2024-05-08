import React from 'react';
import CalenderComponents from '../atoms/CalenderComponents';
import EventListComponents from '../molecules/EventListComponents';

const EventsComponents = () => {
    return (
        <div className='flex flex-col gap-8'>
            <CalenderComponents/>
            <EventListComponents/>
        </div>
    );
};


export default EventsComponents;
import React from 'react';
import PropTypes from 'prop-types';
import EventsItemComponents from '../atoms/EventsItemComponents';

const EVENT_LIST = [{
    title: 'Interview with Designer',
    date: '07',
    month: 'Feb',
    hrName: 'Stella',
    fromTime: '10 A.M',
    toTime: '11 A.M'
}]

const EventListComponents = () => {
    return (
        <div >
            <div className='flex justify-between mb-8'>
                <div className='text-xl font-semibold '>Upcomings</div>
                <div className='text-blue-700 underline underline-offset-2 text-sm cursor-pointer'>View All</div>
            </div>
            <div>
                {EVENT_LIST.map((inst => <EventsItemComponents {...inst} />))}
            </div>
        </div>
    );
};

EventListComponents.propTypes = {};

export default EventListComponents;
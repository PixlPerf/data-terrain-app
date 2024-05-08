import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponents from './ButtonComponents';

const EventsItemComponents = ({ title, date, month, hrName, fromTime, toTime }) => {
    return (
        <div className='flex justify-between'>

            <div className='text-red-400 bg-gray-50'>

                <div>{date}</div>
                <div>{month}</div>

            </div>

            <div className='flex flex-col justify-between items-start'>
                <div>{title}</div>
                <div>Created by <span>{hrName}</span></div>
                <div>{fromTime} to {toTime}</div>

            </div>

            <ButtonComponents btnName={'Details'} />

        </div>
    );
};

EventsItemComponents.propTypes = {};

export default EventsItemComponents;
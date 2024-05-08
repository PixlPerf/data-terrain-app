

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DateRange } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';

const CalenderComponents = () => {

    const selectionRange={
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    };

    return (
        <div className='w-full drop-shadow-lg rounded-lg'>
            <DateRange
                showDateDisplay={false}
                scroll={{ calendarWidth: 10, calendarHeight: 1000 }}

                ranges={[selectionRange]}
                onChange={(e) => {
                    console.log(e)
                    // setSelectionRange(previous => {
                    //     return {
                    //         ...previous,
                    //         startDate: e.startDate,
                    //         endDate: e.endDate

                    //     }
                    // });
                }}
            />
        </div>
    );
};

CalenderComponents.propTypes = {};

export default CalenderComponents;
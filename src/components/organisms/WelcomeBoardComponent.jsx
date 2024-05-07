import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponents from '../atoms/ButtonComponents';

const WelcomeBoardComponent = () => {
    return (
        <div className='flex justify-between'>

            <div className='flex flex-col items-start gap-4'>
                <div className='font-semibold text-3xl'>
                    HR Employee
                </div>
                <div>
                    Enjoy your selecting potential candidates Tracking and Management System.
                </div>


            </div>
            <ButtonComponents btnName={'Task Details'}/>

        </div>
    );
};

WelcomeBoardComponent.propTypes = {};

export default WelcomeBoardComponent;
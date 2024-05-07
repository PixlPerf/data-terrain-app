import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponents = ({btnName,clickHandler}) => {
    return (
        <div onClick={clickHandler} className='bg-[#0A66C2] px-8 py-4 rounded-md h-fit text-white font-semibold'>
            {btnName}
        </div>
    );
};

ButtonComponents.propTypes = {};

export default ButtonComponents;
import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponents = ({btnName,clickHandler, plain}) => {
    return (
        <div onClick={clickHandler} className={plain? 'px-4 py-2 rounded-sm h-fit bg-white font-semibold hover:cursor-pointer text-md' :'bg-[#0A66C2] px-8 py-4 rounded-md h-fit text-white font-semibold hover:cursor-pointer'}>
            {btnName}
        </div>
    );
};

ButtonComponents.propTypes = {};

export default ButtonComponents;
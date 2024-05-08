import React from 'react';
import PropTypes from 'prop-types';
import IconComponent from '../atoms/IconComponents';

import MessageSVG from "../svgs/MessageSvg";

const SidebarComponent = () => {
    return (
        <div className=' sticky py-10 bg-white w-24 rounded-tr-3xl h-screen shadow-2xl flex flex-col items-center gap-16'>

            <IconComponent logo={MessageSVG} />

            <IconComponent logo={MessageSVG}/>


            <IconComponent logo={MessageSVG}/>

            <IconComponent logo={MessageSVG}/>

            <IconComponent logo={MessageSVG}/>


            <IconComponent logo={MessageSVG}/>
            
        </div>
    );
};

SidebarComponent.propTypes = {};

export default SidebarComponent;
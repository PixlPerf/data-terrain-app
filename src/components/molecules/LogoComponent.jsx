import React from 'react';
import MessageSVG from "../svgs/MessageSvg";
import IconComponent from '../atoms/IconComponents';

const LogoComponent = () => {
    return (
        <div className='flex  gap-3 items-center'>
            <IconComponent logo={MessageSVG} />
            <div>Talent Acquisition</div>
        </div>
    );
};


export default LogoComponent;
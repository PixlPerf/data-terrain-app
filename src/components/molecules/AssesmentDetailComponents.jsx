import React from 'react';
import FileSvg from '../svgs/FilesSvg';

import girlImage from '../images/girl.png';
import ButtonComponents from '../atoms/ButtonComponents';

const AssesmentDetailComponents = () => {
    return (
        <div className='bg-gradient-to-r from-[#0A66C2] to-[#5994CE] rounded-lg h-full flex p-8 w-full relative justify-between'>

            <div className='flex flex-col items-start gap-8'>
                <div className='bg-white w-fit px-8 py-4'>
                    {FileSvg}

                </div>
                <div className='text-5xl font-bold text-white'>
                    0033

                </div>
                <div className='text-lg  text-white'>
                    New Assessment's
                </div>
            </div>

            <div className='flex flex-col-reverse '>
                <div className=' flex self-end'>
                    <ButtonComponents btnName={'VIEW DETAILS'} plain/>
                </div>

            </div>

            <div className='absolute top-10 right-48 '>
                <img src={girlImage} className='w-24' />
            </div>
            <div className='absolute bottom-20 right-0 w-56 '>
                <img src={girlImage} />
            </div>



        </div>
    );
};

AssesmentDetailComponents.propTypes = {};

export default AssesmentDetailComponents;
import React from 'react';
import ChartComponents from '../atoms/ChartComponents';
import DropDownComponents from '../atoms/DropDownComponents';

const ApplicationInfoComponent = () => {
    return (
        <div className='w-full h-full bg-white rounded-xl shadow-lg p-4'>
            <div className='flex justify-between my-3 px-4'>
                <div className='flex gap-8 align-center justify-center'>
                    <div className='text-xl font-semibold'>Application's Info</div>
                    <div className='flex gap-8 '>
                        <div className='flex items-middle justify-center gap-2'> <div className='w-6 h-6 bg-[#277ACC] rounded-md'> </div> <div className='text-sm'>Received</div></div>
                        <div className='flex items-middle gap-2'><div className='w-6 h-6 bg-[#002b55b3] rounded-md'> </div>  <div className='text-sm'>Processed</div></div>
                    </div>
                </div>
                <div><DropDownComponents/></div>
            </div>
            <div className='bg-[#D6D6D6] h-0.5'></div>
            <div className='py-8 w-full h-full'>
                <ChartComponents />
            </div>
        </div>
    );
};


export default ApplicationInfoComponent;
import React from 'react';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='mx-auto text-center mb-10 md:w-4/12'>
            <p className='text-yellow-500 py-2'>---{subheading}---</p>
            <h3 className='text-3xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;
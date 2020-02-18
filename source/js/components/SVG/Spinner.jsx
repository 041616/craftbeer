import React from 'react';


export const Spinner = ({ className }) => (
    <svg className={className} viewBox='0 0 50 50'>
        <circle cx='25' cy='25' r='20' fill='none' strokeWidth='5'/>
    </svg>
);

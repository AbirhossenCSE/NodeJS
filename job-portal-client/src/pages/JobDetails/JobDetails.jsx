import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {title, company, deadline} = useLoaderData();
    
    return (
        <div className='m-5'>
            <h2 className='text-2xl font-bold'>Job Details for {title} </h2>
            <p>Apply for: {company} </p>
            <p>Deadline: {deadline} </p>
            <button className='btn'>Apply Now</button>
        </div>
    );
};

export default JobDetails;
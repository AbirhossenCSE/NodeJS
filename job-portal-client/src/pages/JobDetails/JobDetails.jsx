import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { _id, title, company, deadline} = useLoaderData();
    
    return (
        <div className='m-5'>
            <h2 className='text-2xl font-bold'>Job Details for {title} </h2>
            <p>Apply for: {company} </p>
            <p>Deadline: {deadline} </p>
            <Link to={`/jobApply/${_id}`}>
            <button className='btn'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;
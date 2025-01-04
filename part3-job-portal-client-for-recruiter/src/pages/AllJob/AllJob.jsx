import React, { useState } from 'react';
import useJobs from '../../hooks/useJobs';
import HotJobCard from '../Home/HotJobCard';

const AllJob = () => {
    const [sort, setSort] = useState(false);
    const { jobs, loading } = useJobs(sort);
    // console.log(sort);
    
    if (loading) {
        return <h2>Job is loading</h2>
    }

    return (
        <div>
            <h2 className='text-4xl font-bold py-4 text-center'>All Job Hare</h2>
            <div className='w-11/12 mx-auto bg-base-200 py-5 p-3 flex'>
                <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && 'btn-success'}`}>
                    {sort == true ? 'Sorted By Slary': 'Sort By Slary'}
                </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default AllJob;
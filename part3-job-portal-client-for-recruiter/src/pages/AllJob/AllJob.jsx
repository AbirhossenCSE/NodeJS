import React from 'react';
import useJobs from '../../hooks/useJobs';
import HotJobCard from '../Home/HotJobCard';

const AllJob = () => {
    const { jobs, loading } = useJobs();
    if (loading) {
        return <h2>Job is loading</h2>
    }

    return (
        <div>
            <h2 className='text-4xl text-center'>All Job Hare</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default AllJob;
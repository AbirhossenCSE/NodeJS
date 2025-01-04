import React, { useState } from 'react';
import useJobs from '../../hooks/useJobs';
import HotJobCard from '../Home/HotJobCard';
import { BiSearch } from 'react-icons/bi';

const AllJob = () => {
    const [sort, setSort] = useState(false);
    const [search, setSearch] = useState('');
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
    
    const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);
    // console.log(sort);

    if (loading) {
        return <h2>Job is loading</h2>
    }

    return (
        <div>
            <h2 className='text-4xl font-bold py-4 text-center'>All Job Hare</h2>
            <div className='w-11/12 mx-auto bg-base-200 py-5 p-3 gap-4 flex items-center'>
                <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && 'btn-success'}`}>
                    {sort == true ? 'Sorted By Salary' : 'Sort By Salary'}
                </button>

                <BiSearch ></BiSearch>

                <input
                    onKeyUp={(e) => setSearch(e.target.value)}
                    type="text"
                    className='input w-full max-w-2xl'
                    placeholder='Search By Job Location' />

                <div className='space-y-3'>
                    <input
                        onKeyUp={(e) => setMinSalary(e.target.value)}
                        type="text"
                        className='input w-full max-w-xs'
                        placeholder='Min Salary' />

                    <input
                        onKeyUp={(e) => setMaxSalary(e.target.value)}
                        type="text"
                        className='input w-full max-w-xs'
                        placeholder='Max Salary' />

                </div>
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
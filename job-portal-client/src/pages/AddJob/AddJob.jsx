import React from 'react';

const AddJob = () => {

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const { min, max, currency, ...newJob } = initialData;
        console.log(newJob);
        newJob.salaryRange = { min, max, currency }
        console.log(newJob);




    }
    return (
        <div>
            <h1>Post a new job</h1>
            <form onSubmit={handleAddJob} className="card-body">
                {/* title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job location</span>
                    </label>
                    <input type="text" name='location' placeholder="Job location" className="input input-bordered" required />
                </div>
                {/* job type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Pick a Job Type</option>
                        <option>Full-time</option>
                        <option>Intern</option>
                        <option>Part-time</option>
                    </select>
                </div>
                {/* job categoy */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Pick a Job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </div>
                {/* salary range */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name='min' placeholder="Min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name='max' placeholder="Max" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <select name='currency' className="select select-ghost w-full max-w-xs">
                            <option disabled selected>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>EURO</option>
                        </select>
                    </div>
                </div>
                {/* Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className='textarea textarea-bordered' name="description" placeholder='Job Description' required></textarea>
                </div>
                {/* company name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company name</span>
                    </label>
                    <input type="text" name='company' placeholder="Company name" className="input input-bordered" required />
                </div>
                {/* Requirments */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirments</span>
                    </label>
                    <textarea className='textarea textarea-bordered' name="requirements" placeholder='Put Each Job Requirments in new line' required></textarea>
                </div>
                {/* Responsibility */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibility</span>
                    </label>
                    <textarea className='textarea textarea-bordered' name="responsibilities" placeholder='Put Each Job Responsibility in new line' required></textarea>
                </div>
                {/* Hr email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" name='hr_email' placeholder="HR email" className="input input-bordered" required />
                </div>
                {/* Hr name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR name</span>
                    </label>
                    <input type="text" name='hr_name' placeholder="HR name" className="input input-bordered" required />
                </div>
                {/* logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo</span>
                    </label>
                    <input type="text" name='company_logo' placeholder="Company Logo" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;
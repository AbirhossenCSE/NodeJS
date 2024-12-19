import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedIn, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }

    }
    return (
        <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Apply the Job & Good Luck</h1>
            <form onSubmit={submitJobApplication} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input type="url" name='linkedIn' placeholder="LinkedIn URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">GitHub URL</span>
                    </label>
                    <input type="url" name='github' placeholder="GitHub URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;
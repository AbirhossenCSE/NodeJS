import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className='flex gap-2 m-2'>
                <figure>
                    <img
                        className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h3 className='text-2xl'>{company}</h3>
                    <p className='flex gap-1 items-center'> <FaMapMarkerAlt /> {location}</p>
                </div>

            </div>
            <div className="card-body p-2">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        requirements.map((skill, index) => <p key={index} className='border rounded-md text-center hover:text-white hover:bg-gray-400'>{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center p-2">
                    <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency} </p>
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;
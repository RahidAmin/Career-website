import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredAppliction } from '../../utility/localstorage';
import { Helmet } from 'react-helmet-async';

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = function (filter) {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }



    useEffect(() => {
        const storedJobIds = getStoredAppliction();
        // if (jobs.length > 0) {
        //     const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
        //     console.log(jobsApplied)
        // }

        const jobsApplied = [];

        for (const id of storedJobIds) {
            const job = jobs.find(job => job.id === id);
            if (job) {
                jobsApplied.push(job)
            }
        }
        setAppliedJobs(jobsApplied);
        setDisplayJobs(jobsApplied);


    }, [jobs])

    return (
        <div>
            <Helmet><title>Applied Jobs</title></Helmet>
            <h2 className='text-2xl'>Jobs i applied:{appliedJobs.length}</h2>


            <details className="dropdown mb-32">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>

            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} :{job.company_name} :{job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;
import './index.scss';
import { useState } from 'react';

const JobCard = ({ job }) => {

    const [expanded, setExpanded] = useState(false);

    const visibleDescription = expanded ? job.description : job.description.slice(0, 1);

    return (
        <>
            <div className="job-card">
                <div className="logo-wrapper">
                    <img src={job.logo} alt={`${job.company} logo`} className="company-logo"/>
                </div>

                <div className="job-content">
                    <h2 className="job-title">{job.position}</h2>

                    <div className="job-details">
                        <span className="job-company">{job.company}</span>
                        <span className="job-location"> | {job.location}</span>
                        <p className="job-duration"> {job.duration}</p>
                    </div>

                    <ul className="job-description">
                        {visibleDescription.map((item, idx) => (
                            <li key={idx} dangerouslySetInnerHTML={{__html: item}}/>
                        ))}
                    </ul>

                    {job.description.length > 1 && (
                        <button className="btn" onClick={() => setExpanded(!expanded)}>
                            {expanded ? "View Less" : "View More"}
                        </button>
                    )}

                </div>
            </div>
        
        </>
    )
}

export default JobCard;
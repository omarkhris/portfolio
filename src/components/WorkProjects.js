import React, { useState } from 'react';

const WorkProjects = (props) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const navigateToWebsite = (url) => {
        window.open(url, '_blank');
    };

    return (
        
            <div className="container">
                <img src={props.imgsrc} alt="image" />
                <h2 className="project-title">{props.title}</h2>
                <div className="card-details">
                    <p>{expanded ? props.text : `${props.text.slice(0, 150)}...`}</p>
                    {props.text.length > 150 && (
                        <button onClick={toggleExpand} className="btn">
                            {expanded ? 'Read less' : 'Read more'}
                        </button>
                    )}
                    <div className="card-btns">
                        {props.view && (
                            <a href={props.view} className="btn" target="_blank" rel="noopener noreferrer">
                                View Repo
                            </a>
                        )}
                        {props.website && (
                            <button onClick={() => navigateToWebsite(props.website)} className="btn" style={{ marginTop: '13px' }}>
                                Visit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        
    );
};

export default WorkProjects;

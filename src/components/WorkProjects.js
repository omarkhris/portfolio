import { Link } from "react-router-dom"
import "./WorkProjects.css"

import React from 'react'

const WorkProjects = (props) => {
    return (
        <div className="container">
        <img src={props.imgsrc} alt="image" />
        <h2 className="project-title">{props.title}</h2>
        <div className="card-details">
            <p>{props.text}</p>
            <div className="card-btns">
                <Link to={props.view} className="btn">
                    MORE
                </Link>
                <Link to="" className="btn">
                    Source
                </Link>
            </div>
        </div>
    </div>
    )
}

export default WorkProjects
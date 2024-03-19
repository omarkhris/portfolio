import { Link } from "react-router-dom"
import "./WorkProjects.css"

import React from 'react'
import WorkProjectsData from "./WorkProjectsData"
import WorkProjects from "./WorkProjects"

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">
            </h1>
            <div className="project-container">
                {
                    WorkProjectsData.map((val, ind) => {
                        return (
                            <WorkProjects
                                key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                text={val.text}
                                view={val.view}

                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work
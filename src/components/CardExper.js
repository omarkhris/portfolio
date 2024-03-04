import { Link } from "react-router-dom"
import "./CardExper.css"

import React from 'react'

const CardExper = () => {
    return (
        <div className="cardExper">
            <div className="cardContainer">
                <div className="card">
                    <h3>Program Degree</h3>
                    <span className="bar"></span>
                    <p className="Cname">Uni name</p>
                    <p>description</p>
                    <p>descriptiondescriptiondescriptiondescription</p>
                    <p>descriptiondescriptiondescriptiondescription</p>
                    <p>descriptiondescriptiondescriptiondescription</p>
                    <Link className="btn">website</Link>
                </div>
                <div className="card">
                    <h3>Program Degree</h3>
                    <span className="bar"></span>
                    <p className="Cname">Uni name</p>
                    <p>description</p>
                    <p>descriptiondescriptiondescriptiondescription</p>
                    <p>descriptiondescriptiondescriptiondescription</p>
                    <p>descriptiondescriptiondescriptiondescription</p>
                    <Link className="btn">website</Link>
                </div>
                <div className="card">
                    <h3>Program Degree</h3>
                    <span className="bar"></span>
                    <p className="Cname">Uni name</p>
                    <p>description</p>
                    <p>descriptiondescriptiondescriptiondescription</p>
                    <p>descriptiondescriptiondescriptiondescription</p>
                    <p>descriptiondescriptiondescriptiondescription</p>
                    <Link className="btn">website</Link>
                </div>
            </div>
        </div>
    )
}

export default CardExper
import "./PageContent.css"

import React, { Component } from 'react'

class PageContent extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }

}

export default PageContent
import React from 'react'
import {Link} from "react-router-dom"

export default function NotFound() {
    return (
        <div className="notFound">
            <h1>Page not found</h1>
            <img src="https://previews.123rf.com/images/amisb/amisb1702/amisb170200205/73266369-page-not-found-error-404-.jpg" alt="page not found" width="350"/>
            <br/><br/>
            <div><Link className="btn" to="/">Go to HomePage</Link></div>
            
        </div>
    )
}

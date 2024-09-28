import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div>
            <div>
                <p>404 Not Found</p>
                <Link to={'/'}>Back To Home</Link>
            </div>
        </div>
    )
}

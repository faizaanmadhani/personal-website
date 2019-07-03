import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Nav = () => {
    return (
        <nav>
            <ul>
                <li float><Link to="/">Home </Link></li>
                <li><Link to="/about">About </Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>      
        )
}

export default Nav
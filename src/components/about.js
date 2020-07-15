import React, { useContext, useState, useEffect } from "react"
import { Link } from "gatsby"
import { Container, Jumbotron, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Layout from "./layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const about = () => (

    <Layout>
        <Fade>
          <h1>
            Hi, I'm someone
          </h1>
        </Fade>
  </Layout>
  
)

export default about
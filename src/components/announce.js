import React, { useContext, useState, useEffect } from "react"
import { Link } from "gatsby"
import { Container, Jumbotron, Button, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Layout from "./layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const announce = () => (

    <div className="mainCenter">
      <Jumbotron fluid>
        <Fade>
          <Col>
          <h1>
            Hi, I'm Faizaan
          </h1>
          </Col>
        </Fade>
      </Jumbotron>
      </div>
  
)

export default announce
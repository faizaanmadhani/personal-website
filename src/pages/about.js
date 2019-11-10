import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Nav from "../components/nav"
import Bio from "../components/bio"

class AboutPage extends React.Component {
    render () {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <Layout location={this.props.location} title={siteTitle}>
            <SEO title="About" />
            <Nav />

                <div>

                    <h3>Hey there,</h3>
                    <p>My name is Faizaan and I'm a first year Computer Science student at the University of Waterloo.</p>
                    <p>I started programming in Grade 10, and since then I've had the opportunity to mentor at and attend various hackathons, and I also organized two others, <a href = "https://s1.hackthehammer.com/">this one</a> and <a href="https://uh.hackthehammer.com/">this one</a></p>
                    <p>I love to learn new things, and I'm currently exploring Machine Learning, Infastructure as Code and Cybersecurity</p>
                    <p>In the past, I've worked at <a href="https://humancode.ca">Human Code</a>. In the future, I hope to begin contributing to open source. </p>

                    <p>For recruiters, here's my <a href="https://drive.google.com/file/d/1-cns1tOm99c9plzqTwXcdHQT2WU1sl9p/view?usp=sharing">resume!</a> I'll be doing my best to maintain this blog with posts about the projects I'm working on or the work I'm doing, but probably not in a very regular fashion.</p>
                    
                </div>





            </Layout>
        )
        
    }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
}`

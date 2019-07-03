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
                    <p>My name is Faizaan and I just graduated high school, where I spent the last two years studying a whole lot of interesting stuff as an IB Diploma candidate. In the fall, I'll be going on to study Computer Science at the University of Waterloo.</p>
                    <p>I started programming in Grade 10, and since then I've had the opportunity to mentor at and attend various hackathons, and I also organized two others, <a href = "https://s1.hackthehammer.com/">this one</a> and <a href="https://uh.hackthehammer.com/">this one</a></p>
                    <p>I love to learn new things on the fly, and I'm currently exploring Containerization, Infastructure as Code and Cybersecurity</p>
                    <p>In the future, I hope to begin contributing to open source, and study machine learning / statistics.</p>

                    <p>For recruiters, here's my <a href="/">resume!</a> I'll be doing my best to maintain this blog with posts about the projects I'm working on or the work I'm doing, but probably not in a very regular fashion.</p>
                    
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

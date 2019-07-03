import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

class AboutPage extends React.Component {
    render () {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <Layout location={this.props.location} title={siteTitle}>
            <SEO title="About" />
            <Nav />

                <div>

                    <h3>Projects</h3>
                    <p>Most of my publicly availible projects can be found on my <a href="https://devpost.com/fzmadhani">Devpost</a> and my <a href="https://devpost.com/fzmadhani">Github</a> profiles.</p> 
                    <p>Any that I'm particularly proud of will be featured here, or will have their very own blog post &#128512;</p>
                    
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

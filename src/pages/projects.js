import React from "react"
import { graphql, Img, Button } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

class AboutPage extends React.Component {
    render () {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const projects = data.allProjectsJson.edges

        return (
            <Layout location={this.props.location} title={siteTitle}>
            <SEO title="Projects" />
            <Nav />

                <div>

                    <h3>Projects</h3>
                    <p>Most of my publicly availible projects can be found on my <a href="https://devpost.com/fzmadhani">Devpost</a> and my <a href="https://devpost.com/fzmadhani">Github</a> profiles.</p> 
                    <p>Any that I'm particularly proud of will be featured here, or will have their very own blog post &#128512;</p>
                    
                </div>

                <div className="project-list">
      {projects.map(project => (
        <div key={project.node.id} className="project-list__item">
          <div className="project-list__thumbnail">
            {/* <Img fluid={project.node.thumbnailImage.childImageSharp.fluid} /> */}
          </div>
          <div className="project-list__content">
            <h2>{project.node.title}</h2>
            <div className="project-list__excerpt">
              {project.node.description}
            </div>
            <a href={project.node.url}>
              <p>Visit Project</p>
            </a>
          </div>
        </div>
      ))}
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
    allProjectsJson {
      edges {
        node {
          id
          title
          date
          description
          url
          # thumbnailImage {
          #   childImageSharp {
          #     fluid(maxWidth: 1200) {
          #       ...GatsbyImageSharpFluid
          #     }
          #   }
          # }
        }
      }
    }
}`
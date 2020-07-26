import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./projects.css"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Github, Readthedocs } from '@icons-pack/react-simple-icons'
import { ReadtheDocs } from '@icons-pack/react-simple-icons'


const ProjectsPage = ({ data, location }) => {

    const siteTitle = data.site.siteMetadata.title
    const pageTitle = "Projects"

    return (
    
    <Layout location={location} title={siteTitle} pageTitle={pageTitle}>
      <SEO
        title="Home"
        keywords={[`gatsby`, `application`, `react`, `portfolio`]}
      />
      <br></br>
      <div>
        <p><i>
          This is a small selection of the projects I've worked on or am working on. The rest can be found on my github profilt <a href="https://github.com/faizaanmadhani">here</a> or my devpost profile <a href="https://devpost.com/fzmadhani">here</a></i>.
        </p>
      </div>
      <div>
        {data.allProjectsJson.edges.map(project => (
          <div key={project.node.id}>
            <div>
              <h3 style={{
                    fontFamily: `Sans-serif, Monospace`,
                    marginBottom: 10,
        }}>{project.node.title}</h3>
              <p className="project-subtitle">{project.node.subtitle}</p>
              <div>
                {project.node.description}
              </div>
              <a href={project.node.url}>
                <div style={{
                     boxShadow: 'none',
                     textDecoration: 'none'
                }}>
                    <br></br>
                <Link to={project.node.githuburl} style={{
                     boxShadow: 'none',
                     textDecoration: 'none'
                }}>
                <Github color="black"/>
                </Link>
                </div>
                {/* <Button buttonText="Visit the Website" /> */}
              </a>

            </div>
          </div>
        ))}
      </div>
      <br></br>
    </Layout>
    )
};

  export const projectsQuery = graphql`
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
          subtitle
          description
          githuburl
          devposturl
        }
      }
    }
  }
`;
  
export default ProjectsPage;
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
        <br></br>
      <p>
      
      For recruiters, here's my <a href="https://drive.google.com/file/d/14w59RUejrrd9CUXb3Zr1g79z5qWy-Vtf/view?usp=sharing">resume!</a> 
      <br></br><br></br>
      Hi, I'm Faizaan! I'm a Computer Science student at the University of Waterloo. I'm passionate about Web and Mobile Development, Machine Learning and Software Infastructure. 
      <br></br><br></br>
      Currently, I'm working at <a href="https://www.kinaxis.com/en">Kinaxis</a> as a Software Developer Intern. In the past, I've worked at <a href="https://humancode.ca/">Human_Code</a> and <a href="https://hiride.ca/">HiRide</a>, and I'm currently seeking internships for the Fall of 2021.
      <br></br><br></br>
      I'm ardent about using tech for social good and volunteer as a Technical Lead for <a href="https://uwblueprint.org/">UW Blueprint</a>, where the applications I've worked on have helped not-for-profit organizations be successful.
      <br></br><br></br>
      I'm also the founder of the not-for-profit <a href="https://hackthehammer.com/">Hack the Hammer</a>, where I spent two years organizing hackathons.
      <br></br><br></br>
      In my free time I spend hours reading, occasionally write, attend hackathons and tech conferences, develop my technical skills by exploring new fields, and rock climb!

      </p>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

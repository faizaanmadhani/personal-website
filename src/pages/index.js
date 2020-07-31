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
      <h3 style={{fontFamily: `Sans-serif, Monospace`}}>
        Hi!
      </h3>
      <p>
      For recruiters, here's my <a href="https://drive.google.com/file/d/14w59RUejrrd9CUXb3Zr1g79z5qWy-Vtf/view?usp=sharing">resume!</a> I'm a 2A Computer Science student at the University of Waterloo. In the past, I've interned at Human_Code and HiRide, and I'm currently seeking internships for Spring/Winter 2021. <br></br><br></br>

I'm passionate about Web and Mobile Development, and Software Infastructure. I'm ardent about using tech for social good and volunteer as a Project Developer for UW Blueprint, where the applications I've worked on have helped Not-for-Profit organizations be successful. <br></br><br></br>

I'm also the founder of the Not-For-Profit <a href="https://hackthehammer.com/">Hack the Hammer</a>, where I spent two years organizing hackathons: <a href="https://uh.hackthehammer.com/">This one</a> and <a href="https://s1.hackthehammer.com/">this one.</a> Currently, I serve as an advisor to the organization. <br></br><br></br>

In my free time I spend hours reading, occasionally write, attend hackathons and tech conferences, and rock climb! <br></br><br></br>

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

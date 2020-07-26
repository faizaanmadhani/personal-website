import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ReadingList = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title
    const pageTitle = "Reading List"

    return (
        <Layout location={location} title={siteTitle} pageTitle={pageTitle}>
            <SEO
                title="Reading List"
                keywords={[`gatsby`, `application`, `react`, `portfolio`]}
            />
            <br></br>
            <div>
                <p>Books</p>
            </div>
        </Layout>
    )

};

export default ReadingList

export const booksQuery = graphql`
query {
    site {
        siteMetadata {
            title
        }
    }
}`;
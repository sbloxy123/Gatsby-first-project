import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import Layout from '../components/layout'
// (for page query):
import { graphql } from 'gatsby'

const examples = ({ data }) => {
    const {
        site: {
            info: { author },
        },
    } = data
    return (
        <Layout>
            <p>Hello from the Examples Page</p>
            <Header />
            <HeaderStatic />
            <h5>Author: {author}</h5>
        </Layout>
    )
}

// (for page query):
export const data = graphql`
    query {
        site {
            info: siteMetadata {
                author
                data
                description
                title
                person {
                    name
                    age
                }
            }
        }
    }
`

export default examples

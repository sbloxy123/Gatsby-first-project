// == Static Query Hook (probably best) == //

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// [below const must be unique]
const getData = graphql`
    {
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

const Header = () => {
    const {
        // destructured Metadata (* use curly brackets):
        site: {
            info: {
                title,
                person: { name },
            },
        },
    } = useStaticQuery(getData)

    // const data = useStaticQuery(getData)

    return (
        <div>
            {/* <h1> title: {data.site.siteMetadata.title} </h1>
            <h1> name: {data.site.siteMetadata.person.name} </h1> */}
            <h1> title: {title} </h1>
            <h1> name: {name} </h1>
        </div>
    )
}

export default Header

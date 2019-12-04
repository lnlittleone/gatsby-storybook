import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {theme} from '../theme'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link style={{color : theme.mint, textDecoration : 'none', fontWeight : 'bold',fontFamily: theme.mainFont,}} to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

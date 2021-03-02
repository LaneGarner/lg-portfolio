import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Portfolio</h1>
    <p>These are some of my favorite projects that I've built.</p>
    <div className="card-container portfolio-container">
      <div className="card flex-center">
        <h2>Title</h2>
        <p>Description</p>
        <div style={{backgroundColor: "white", width: "200px", height: "200px", color: "#333"}}>Preview/link</div>
        <div>
          <span> Link </span>
          <span> GitHub </span>
        </div>
      </div>
      <div className="card flex-center">
        <h2>Title</h2>
        <p>Description</p>
        <div style={{backgroundColor: "white", width: "200px", height: "200px", color: "#333"}}>Preview/link</div>
        <div>
          <span> Link </span>
          <span> GitHub</span>
        </div>
      </div>
      <div className="card flex-center">
        <h2>Title</h2>
        <p>Description</p>
        <div style={{backgroundColor: "white", width: "200px", height: "200px", color: "#333"}}>Preview/link</div>
        <div>
          <span> Link </span>
          <span> GitHub </span>
        </div>
      </div>
      <div className="card flex-center">
        <h2>Title</h2>
        <p>Description</p>
        <div style={{backgroundColor: "white", width: "200px", height: "200px", color: "#333"}}>Preview/link</div>
        <div>
          <span> Link </span>
          <span> GitHub </span>
        </div>
      </div>
    </div>
    <h1>About</h1>
    <p>Hi, I'm Lane. I am web developer and musician who recently completed the fullstack bootcamp at Austin Coding Academy.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a hendrerit ante, interdum aliquet quam. Vestibulum et arcu consequat, eleifend sem nec, viverra sem. Nam id nisi ipsum. Fusce feugiat lectus vel tortor interdum cursus. Maecenas posuere mi quis nunc tristique ultricies. Duis velit justo, cursus ac faucibus ac, luctus eget libero. Mauris vel nisl dui. Donec non metus eget dolor pellentesque sagittis ornare in neque. Mauris tincidunt urna ex, ut lacinia augue facilisis non. Mauris elementum nunc eget massa scelerisque, sed fringilla elit luctus. Aliquam sapien lacus, condimentum vehicula lectus vitae, vestibulum mollis risus. Praesent sit amet rhoncus lacus, at volutpat libero. Donec aliquet fermentum nisi vel sollicitudin. Aliquam quis sagittis lorem. Suspendisse et enim vel erat consectetur posuere.</p>
  </Layout>
)

export default IndexPage

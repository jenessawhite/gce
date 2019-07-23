import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Button from "../components/button"
import headerImage from "../images/donnie-rosie-taO2fC7sxDU-unsplash.jpg"
import MockupContent from "./image"
import posterImage from "../images/GCE_FLYER.png"

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )


  return (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(254, 253, 255, 0.62), rgba(80, 21, 06, 0.78)), url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
        backgroundPosition: "bottom",
        backgroundSize: "cover"
      }}
    />

      <h1 style={{ textAlign: "center" }}>{data.site.siteMetadata.title}</h1>

      <p style={{ textAlign: "center", maxWidth: 700 }}>
        The Gospel Comedy Explosion is a touring roster of talented comedians spreading joyous noise in the form of laughter around the country. 
      </p>
      <p>
      Ecclesiastes 3:4 proclaims “a time to laugh” The Gospel Comedy Explosion is happy to oblige.
      </p>

      <Button link={'https://www.facebook.com/Paschal-Hildreth-Entertainment-253865181636743/'}>See Upcoming Events</Button>

      <div style={{ margin: 40, width: `350px`, position: "relative" }}>
        <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
          <MockupContent />
        </div>

        <div
          style={{
            position: "absolute",
            width: "100%",
            top: 0,
          }}
        >
          <img
            src={posterImage}
            alt="outlines of shapes and confetti in the background "
          />
        </div>
      </div>
  </div>
)}

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero

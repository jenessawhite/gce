import React from "react"

import logo from "../images/Paschal_Hildreth_Foundation_logo.jpg"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "0 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Paschal Hildreth Foundation"
      description="The Paschal Hildreth Foundation is here for the promotion of family and community prosperity."
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3></h3>
        <p style={{ color: COLORS.gray }}>
        If your organization would like to bring The Gospel Comedy Explosion to an event contact us at <a href="tel:+901-896-8419">901-896-8419</a>.
        </p>
        <p style={{ color: COLORS.gray }}>The Gospel Comedy Explosion is a wholly owned subsidiary of Paschal Hildreth Entertainment. There is only ONE true Gospel Comedy Explosion.  </p>
      </div>
      <div>
        <img src={logo} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content

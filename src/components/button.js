import React from "react"

import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import "../styles/button.css"

const Button = ({ children, link }) => (
  <a
    className="button"
    style={{
      color: `${COLORS.lightWhite} !important`,
      background: GRADIENT,
      borderRadius: BORDER_RADIUS
    }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

export default Button

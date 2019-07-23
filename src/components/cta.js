import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div class="cta" style={{ paddingBottom: "4rem", textAlign: "center" }}>
    <SectionHeader
      title="Stay Updated"
      description="Follow us on Facebook to find our latest show"
    />
    <Button link={'https://www.facebook.com/Paschal-Hildreth-Entertainment-253865181636743/'}>See Upcoming Events</Button>
  </div>
)

export default CallToAction

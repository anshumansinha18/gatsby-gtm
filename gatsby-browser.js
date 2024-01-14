// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import React from "react"

export const onClientEntry = () => {
  // Paste the code for the body here
  const script = document.createElement("script")
  script.src = "https://www.googletagmanager.com/ns.html?id=GTM-M3X4XLQR"
  script.height = 0
  script.width = 0
  script.style.display = "none"
  script.style.visibility = "hidden"

  document.body.appendChild(script)
}

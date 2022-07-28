import React from 'react'
import NavBar from './NavBar'
import TuneEditor from "./TuneEditor"
import AboutSection from "./Section"

const App = () => {

  return (
    <div>
      <NavBar />
      <div className="wrapper">
        <AboutSection

          title="About"
          description="Forza Tune Editor allows you to [view] and edit locked Forza Horizon tune files. This is an experimental website and will be updated over time. Sections with [VIEWABLE] next to them indicate that you can see those values when a tune is uploaded. At the time of this writing, Tire Pressure, Anti-roll Bars, and Springs are viewable. These will be changed when more categories are added."
        />
        <TuneEditor />
      </div>

      <footer><p>Website updated June 27, 2022</p></footer>
      <script>fixScale(document);</script>
    </div>
  )
}

export default App

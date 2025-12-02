import { useState } from 'react'
import Header from '../components/Header'
import Section from '../components/Section'

import WindowTracker from "../components/WindowTracker"

function App() {
  const [show, setShow] = useState(true);

  function handleTracker () {
    setShow(prev => !prev)
  }

  return (
    <>
      <Header />
      <main>
        <Section />
        {(show) ? <WindowTracker /> : null}
        <button onClick={handleTracker}>Toggle Tracker</button>
      </main>
    </>
  )
}

export default App

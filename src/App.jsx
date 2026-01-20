import React from 'react'
import GsapFrom from './components/GsapAnimations/GsapFrom'
import GsapTo from './components/GsapAnimations/GsapTo'
import GsapFromTo from './components/GsapAnimations/GsapFromTo'
import GsapTimeline from './components/GsapTimelines/GsapTimeline'

const App = () => {
  return (
    <>
      <GsapFrom />
      <br />
      <GsapTo />
      <br />
      <GsapFromTo />
      <br />
      <GsapTimeline />
    </>
  )
}

export default App

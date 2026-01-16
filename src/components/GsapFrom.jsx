import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React from 'react'

const GsapFrom = () => {
  useGSAP(() => {

    gsap.from(
      '#bluebox',
      {
        x: 300,
        rotation: 250,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      }

    )
  })
  return (
    <>
      <div id='bluebox' className='bg-blue-500 rounded-lg w-32 h-32 flex items-center justify-center  '>
      </div>
    </>

  )
}

export default GsapFrom
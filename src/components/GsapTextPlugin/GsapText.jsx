import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const GsapText = () => {
  useGSAP(() => {
    gsap.fromTo('#text', {
      ease: 'power1.inOut',
      opacity: 0,
      y: 20,
      duration: 1,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
    })
  }, [])

  return (
    <h1
      id='text'
      className='font-bold opacity-0 -translate-y-10'
    >
      HELLO EVERYONE
    </h1>
  )
}

export default GsapText

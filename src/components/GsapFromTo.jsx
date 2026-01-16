import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React from 'react'

const GsapFromTo = () => {
    useGSAP(() => {
        gsap.fromTo(
            '#greenbox',
            {
                x: 0,
                rotation: 0,
                borderRadius: '0%',
            },
            {
                x: 300,
                rotation: 360,
                borderRadius: '100%',
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'bounce.inOut',
            }
        )
    })
    return (
        <>
            <div id='greenbox' className='bg-green-500 rounded-lg w-32 h-32 flex items-center justify-center  '>
            </div>

        </>

    )
}

export default GsapFromTo
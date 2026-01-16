import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const GsapTo = () => {
    useGSAP(() => {
        gsap.to(
            '#redbox',
            {
                x: 300,
                rotation: 120,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'elastic.inOut(1, 0.3)',
            }
        )
    })
    return (

        <>
            <div id='redbox' className='bg-red-500 rounded-lg w-32 h-32 flex items-center justify-center  '>

            </div>
        </>
    )
}

export default GsapTo
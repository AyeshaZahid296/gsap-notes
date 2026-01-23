import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React from 'react'

const GsapStagger = () => {
    useGSAP(() => {
        gsap.to('.stagger-box', {
            y: 250,
            rotation: 360,
            duration: 1,
            borderRadius: "50%",
            repeat: -1,
            yoyo: true,
            // ease: "power1.inOut",
            // stagger: 0.5
            stagger: {
                amount: 2,
                grid: [1, 1],
                from: "center",
                ease: "circ.inOut",
                axis: "y"
            }
        })

    }, [])

    return (
        <>
            <div className='flex gap-4 flex-wrap justify-center  min-h-screen'>
                <div className='stagger-box bg-blue-500'></div>
                <div className='stagger-box bg-red-500'></div>
                <div className='stagger-box bg-green-500'></div>
                <div className='stagger-box bg-yellow-500'></div>
                <div className='stagger-box bg-purple-500'></div>
                <div className='stagger-box bg-pink-500'></div>
                <div className='stagger-box bg-indigo-500'></div>
            </div>

        </>
    )
}

export default GsapStagger
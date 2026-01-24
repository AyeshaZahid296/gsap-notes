import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const GsapScrollTrigger = () => {

    const scrollRef = useRef(null)

    useGSAP(() => {

        const boxes = gsap.utils.toArray(scrollRef.current.children)

        boxes.forEach((box) => {
            gsap.to(box, {
                x: 150 * (boxes.indexOf(box) + 5),
                rotation: 360,
                borderRadius: '100%',
                scale: 1.5,
                scrollTrigger: {
                    trigger: box,
                    start: 'top 600px',
                    end: 'bottom center',
                    scrub: true,
                    markers: true
                },
                ease: 'power1.inOut',
            })
        })

    }, { scope: scrollRef })

    return (
        <div
            ref={scrollRef}
            className='flex gap-4 flex-wrap justify-center min-h-screen'
        >
            <div className='box bg-green-500 w-32 h-32 rounded-lg'></div>
            <div className='box bg-blue-500 w-32 h-32 rounded-lg'></div>
        </div>
    )
}

export default GsapScrollTrigger

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const GsapTimeline = () => {
    const timelineRef = useRef(null);

    useEffect(() => {
        timelineRef.current = gsap.timeline({
            repeat: 1,
            repeatDelay: 1,
            yoyo: true,
            paused: true, // important
        });

        timelineRef.current.to('#yellowbox', {
            x: 300,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'power1.inOut',
        });

        timelineRef.current.to('#yellowbox', {
            y: 300,
            scale: 1,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'bounce.inOut',
        });

        timelineRef.current.to('#yellowbox', {
            x: 600,
            scale: 0.5,
            rotation: 0,
            borderRadius: '0%',
            duration: 2,
            ease: 'elastic.inOut',
        });
    }, []);

    const handlePlayPause = () => {
        if (timelineRef.current.paused()) {
            timelineRef.current.play();
        } else {
            timelineRef.current.pause();
        }
    };

    return (
        <>
            <div
                id="yellowbox"
                className="bg-yellow-500 rounded-lg w-32 h-32"
            ></div>

            <button
                onClick={handlePlayPause}
                className="mt-4 p-2 bg-red-200 text-black rounded cursor-pointer w-24"
            >
                Play/Pause
            </button>
        </>
    );
};

export default GsapTimeline;

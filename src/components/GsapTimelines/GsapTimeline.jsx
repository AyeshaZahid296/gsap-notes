import React, { useEffect } from 'react';
import gsap from 'gsap';

const GsapTimeline = () => {
    useEffect(() => {
        const timeline = gsap.timeline({
            repeat: 1,
            repeatDelay: 1,
            yoyo: true,
        });

        timeline.to('#yellowbox', {
            x: 300,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'power1.inOut',
        });

        timeline.to('#yellowbox', {
            y: 300,
            scale: 1,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'bounce.inOut',
        });

        timeline.to('#yellowbox', {
            x: 600,
            scale: 0.5,
            rotation: 0,
            borderRadius: '0%',
            duration: 2,
            ease: 'elastic.inOut',
        });
    }, []);

    return (
        <div
            id="yellowbox"
            className="bg-yellow-500 rounded-lg w-32 h-32 flex items-center justify-center"
        ></div>
    );
};

export default GsapTimeline;

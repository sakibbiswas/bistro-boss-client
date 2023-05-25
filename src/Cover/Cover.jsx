import React from 'react';
import { Parallax } from 'react-parallax';
const Cover = ({ img, title, text }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[500px] " >
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content hero-overlay  bg-opacity-40 bg-black w-[1000px] h-[300px] text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl capitalize font-serif">{title}</h1>
                        <p className="mb-5">{text}</p>

                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;
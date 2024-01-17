import {
    CardWrapper,
    CardImage,
    CardTextWrapper,
    CardTextDate,
    CardTextTitle,
    CardTextBody,
    CardStatWrapper,
    CardStats,
    LinkText
} from "./New2CardStyles";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";



const New2CardTrack = ({ title, text, imgUrl }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };
    return (
        <Tilt>
            <CardWrapper
                ref={divRef}
                onMouseMove={handleMouseMove}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                    style={{
                        opacity,
                        background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(248,70,17,.5), transparent 50%)`,
                    }}
                />
                <CardImage>
                    <img src={imgUrl} alt="" />
                </CardImage>
                <CardTextWrapper>
                    <CardTextTitle>{title}</CardTextTitle>
                    <CardTextBody>
                        {text}
                    </CardTextBody>
                </CardTextWrapper>
            </CardWrapper>
        </Tilt>
    );
};

export default New2CardTrack;

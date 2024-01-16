import React from 'react'
import New2CardTrack from '../tracks/New2CardTrack';
import TrackCard from "./TrackCard";
import TrackIcon from './TrackIcon';
import gameDev from "../../assets/game-development.png";
import innovation from "../../assets/innovation.png";
import blockchain from "../../assets/blockchain.png";
import iot from "../../assets/internet-of-things.png";
import aiml from "../../assets/artificial-intelligence.png";
import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from "gsap";
function Tracks() {
    const [selected, setSelected] = useState(0);
    const cardsRef = useRef([])
    cardsRef.current = []
    const bg = useRef();
    const cards = [
        {
            title: "Game Dev",
            bgCardColor: 'bg-[#ff7070]',
            bgColor: "#ff7070",
            icon: <TrackIcon url={gameDev} />,
            url: gameDev
        },
        {
            title: "IOT",
            bgCardColor: 'bg-[#a92b2b]',
            bgColor: "#a92b2b",
            icon: <TrackIcon url={iot} />,
            url: iot
        },
        {
            title: "AI & ML",
            bgCardColor: 'bg-[#3f759a]',
            bgColor: "#3f759a",
            icon: <TrackIcon url={aiml} />,
            url: aiml
        },
        {
            title: "BlockChain",
            bgCardColor: 'bg-[#a3315f]',
            bgColor: "#a3315f",
            icon: <TrackIcon url={blockchain} />,
            url: blockchain
        },
        {
            title: "Open Innovation",
            bgCardColor: 'bg-[#30a98b]',
            bgColor: "#30a98b",
            icon: <TrackIcon url={innovation} />,
            url: innovation
        }
    ];
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray(cardsRef.current).forEach((card, index) => {
                if (`card-${index}` === `card-${selected}`) {
                    gsap.to(bg.current, {
                        backgroundColor: cards[index].bgColor,
                        duration: 1,
                        ease: "none"
                    });
                    gsap.to('.img', {
                        top: "-140px",
                        delay: 0.7,
                        duration: 2,
                        ease: "none"
                    })
                }
            });
        });
        return () => ctx.revert();
    }, [selected]);
    const addToRef = (element) => {
        if (element && !cardsRef.current.includes(element)) {
            cardsRef.current.push(element);
        }
    }
    const handleClick = (key) => {
        setSelected(key);
    }
    return (
        <div className='xl:h-screen lg:h-screen md:h-screen h-[400px] w-1/2 flex items-center justify-center bg-orange-500 px-5'>
            {cards.map((card, index) => {
                return (
                    <div ref={addToRef} key={index} className={`
                    card-${index}
                    ${index === selected ? "w-[450px]" : "w-20"}
                     h-96
                     cursor-pointer transition-all ease-in-out duration-[3000ms]`}
                        onClick={() => handleClick(index)}
                    >
                        <TrackCard card={card} selected={selected} index={index} />
                    </div>
                )
            })}
        </div>
    )
}

export default Tracks;
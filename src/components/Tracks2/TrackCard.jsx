import React from 'react'

function TrackCard({ card, selected, index }) {
    return (
        <div className={`h-full relative`}>
            <div className={`h-full rounded-xl flex flex-col items-center justify-center gap-10 ${card.bgCardColor} z-10 relative`}>
                <span className='text-white absolute top-5 left-5 text-[1.2rem]'>{card.icon}</span>
                <h1 className={`text-white ${selected === index ? "rotate-0 text-[2rem]" : "rotate-90 text-[1rem]"} text-center font-bold transition-all ease-in-out duration-[3000ms]`}>{card.title}</h1>
                <p className={`text-white ${selected === index ? "rotate-0 text-[1rem]" : "rotate-90 text-[0rem]"} text-center font-thin w-15 transition-all ease-in-out duration-[3000ms]`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, est.
                </p>
            </div>
            <img className={`img z-1 ${selected === index ? "opacity-1" : "opacity-0"} w-60 absolute top-0`} src={card.url} alt="image" />
        </div>
    )
}

export default TrackCard;
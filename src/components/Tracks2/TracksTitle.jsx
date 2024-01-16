import React, { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/src/vanta.dots';
import Dots from 'vanta/dist/vanta.dots.min'


const TracksTitle = () => {
    useEffect(() => {
        DOTS({
            el:'#vanta'
        })
    }, [])

    return (
        <div id="vanta" className='bg-red-600 w-1/2 flex justify-center items-center'>
            <div className='text-orange-600 font-bold text-[80px]'>
                Tracks
            </div>
        </div>
    );
};

export default TracksTitle;

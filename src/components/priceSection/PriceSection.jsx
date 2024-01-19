import podiumData from './data'
import LayoutShell from './LayoutShell'
import Podium from './Podium'
import WinnersList from './WinnersList'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import React, { useState, useEffect, useRef } from 'react'
function PriceSection() {
    const [height, setHeight] = useState(0)
    const ref = useRef(null)
    useEffect(() => {
        setHeight(ref.current.clientHeight)
    })
    const { width } = useWindowSize()
    const winners = [...podiumData]
        .sort((a, b) => a.rank - b.rank)
        .map((winner, place) => ({ ...winner, place }));


    return (
        <div ref={ref} className='relative'>
            <LayoutShell>
                <div className='flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-center md:gap-0 gap-10 min-w-[100%]'>
                    <div className='h-[100%] xl:min-w-[50%] lg:min-w-[50%] md:min-w-[50%] min-w-[100%] flex justify-center items-center'>
                        <Podium winners={winners} />
                    </div>
                    <div className='xl:min-w-[50vw] lg:min-w-[50vw] md:min-w-[50vw] min-w-[100vw] flex justify-center items-center'>
                        <WinnersList winners={winners} />
                    </div>
                </div>
            </LayoutShell>
        </div>
    )
}

export default PriceSection;


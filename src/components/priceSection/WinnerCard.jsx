import { motion } from 'framer-motion'
import { positions, prizes } from './constants'

export default function WinnerCard({ winners, winner, index }) {
    return (
        <motion.div
            custom={index}
            initial="hidden"
            animate="visible"
            variants={{
                visible: () => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 1 + (winners.length - winner.place + 1),
                        duration: 0.75,
                        ease: 'backInOut'
                    }
                }),
                hidden: { opacity: 0, y: -100 }
            }}
            key={winner.id}
            className=""
        >
            <div
                className={`xl:w-[450px] lg:w-[380px] md:w-[300px] w-80 flex items-center justify-center gap-10 xl:my-3 lg:my-3 md:my-0 my-0 bg-[#f84611] rounded-lg shadow px-10 py-10 border border-white`}
            >
                <img
                    src={winner.avatar}
                    alt=""
                    className="shadow-sm w-11 h-11 mr-3"
                />

                <div className="font-bold text-white text-3xl">{positions[winner.place]}</div>

                <div className="w-fit text-sm flex-grow">
                    {/* <p className="text-gray-900 leading-none font-semibold">
                        {winner.name || 'No name'}
                    </p> */}
                    <p className="text-white w-fit font-bold text-2xl">{prizes[winner.place]}</p>
                </div>
            </div>
        </motion.div>
    )
}

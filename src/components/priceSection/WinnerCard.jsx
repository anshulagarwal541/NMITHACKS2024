import { motion } from 'framer-motion'
import { positions, prizes } from './constants'
import "./styles.css";

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
                className={`xl:w-[450px] lg:w-[420px] md:w-[380px] w-[70vw] flex xl:flex-row lg:flex-row md:flex-row sm:flex-row winnerslist items-center justify-center xl:gap-10 lg:gap-10 md:gap-5 gap-3 xl:my-3 lg:my-3 md:my-0 my-0 bg-[#f84611] rounded-lg shadow xl:px-10 lg:px-10 px-2 py-10 border border-white`}
            >
                <img
                    src={winner.avatar}
                    alt=""
                    className="shadow-sm h-11 mr-3 w-fit"
                />

                <div className="w-fit font-bold text-white text-3xl">{positions[winner.place]}</div>

                <div className="w-fit text-sm flex-grow flex items-center justify-center">
                    <p className="text-white w-fit font-bold text-2xl">{prizes[winner.place]}</p>
                </div>
            </div>
        </motion.div>
    )
}

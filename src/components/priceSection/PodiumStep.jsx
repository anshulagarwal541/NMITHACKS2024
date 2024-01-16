import { motion } from 'framer-motion'
import { positions } from './constants'


export default function PodiumStep({ podium, winner, index }) {
    const colors = [
        "bg-[#FFD700]",
        "bg-[#C0C0C0]",
        "bg-[#967444]"
    ];

    return (
        <div className="flex flex-col place-content-center">
            <motion.div
                custom={index}
                initial="hidden"
                animate="visible"
                variants={{
                    visible: () => ({
                        opacity: 1,
                        transition: {
                            delay: 1 + (podium.length - winner.place + 2),
                            duration: 0.75
                        }
                    }),
                    hidden: { opacity: 0 }
                }}
                className="mb-1 self-center"
            >
                {/* <span className="rounded-full overflow-hidden border p-3 font-bold border-gray-200 shadow-sm w-11 h-11">
                    {positions[winner.place]}
                </span> */}
                <img
                    src={winner.avatar}
                    alt=""
                    className="overflow-hidden shadow-sm w-11 h-11"
                />
            </motion.div>
            <motion.div
                custom={index}
                initial="hidden"
                animate="visible"
                variants={{
                    visible: () => ({
                        height: 280 * ((podium.length - winner.place) / podium.length),
                        opacity: 2,
                        transition: {
                            delay: 1 + (podium.length - winner.place),
                            duration: 2,
                            ease: 'backInOut'
                        }
                    }),
                    hidden: { opacity: 0, height: 0 }
                }}
                className={`${colors[winner.place]} flex xl:w-36 lg:w-30 w-16 border-b-0 rounded-t-lg shadow-lg place-content-center`}
                style={{
                    marginBottom: -1
                }}
            >
            </motion.div>
        </div>
    )
}

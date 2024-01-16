import WinnerCard from './WinnerCard'

export default function WinnersList({ winners }) {
    return (
        <div className="xl:p-10 lg:p-8 md:p-0 p-0 gap-5 flex justify-center items-center flex-col">
            {winners.map((winner, index) => (
                <WinnerCard
                    key={winner.id}
                    winners={winners}
                    winner={winner}
                    index={index}
                />
            ))}
        </div>
    )
}

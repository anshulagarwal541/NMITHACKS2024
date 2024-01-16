import React from 'react';
import PodiumStep from './PodiumStep';

export default function Podium({ winners }) {
    const podium = [8, 6, 4, 2, 0, 1, 3, 5, 7, 9]
        .reduce((podiumOrder, position) => [...podiumOrder, winners[position]], [])
        .filter(Boolean);

    return (
        <div
            className="grid grid-flow-col-dense gap-10 mt-0 justify-center justify-items-center place-content-center content-end items-end border-b "
            style={{ height: "fit-content" }}
        >
            {podium.map((winner, index) => (
                <PodiumStep key={winner.id} podium={podium} winner={winner} index={index} />
            ))}
        </div>
    );
}

import React from 'react'
import Tracks from './Tracks'
import TracksTitle from './TracksTitle'

function TrackSection() {
    return (
        <div className='flex flex-row'>
            <TracksTitle />
            <Tracks />

        </div>
    )
}

export default TrackSection
import React, { useState, useEffect,useRef } from 'react'

import Player_all from '../../views/admin/player/Player_all'
import $ from 'jquery'
const Player=({demo_data})=> {
    return (
        <>
    
        <Player_all/>
        <h1>{demo_data}</h1>
        </>
    )
}

export default Player

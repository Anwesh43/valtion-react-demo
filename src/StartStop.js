import React from 'react'
import { useSnapshot } from 'valtio'
import {start, stop, state} from './countState'
const StartStop = (props) => {
    const {interval} = useSnapshot(state)
    return (
        <div style = {{display : 'flex', justifyContent: 'space-around'}}>
            <button disabled = {interval} onClick = {() => start(100)}>Start</button>
            <button disabled = {!interval} onClick = {stop}>Stop</button>
        </div>
    )
} 

export default StartStop
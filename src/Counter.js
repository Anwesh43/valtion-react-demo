import React from 'react'
import {useSnapshot} from 'valtio'
import {state, increment} from './countState'
const Counter = (props) => {
    return <button onClick = {increment}>
    </button>
}

export default Counter 
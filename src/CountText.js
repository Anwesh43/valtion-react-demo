import React from 'react'
import {useSnapshot} from 'valtio'
import {increment, state} from './countState'

const CountText = (props) => {
    const {count} = useSnapshot(state)
    return (<span>{count}</span>)
}   

export default CountText 
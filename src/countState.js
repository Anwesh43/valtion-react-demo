import {proxy} from 'valtio'

export const state = proxy({
    count: 0, 
    interval : null 
})

export const increment = () => {
    state.count++
}


export const start = (delay) => {
    state.interval = setInterval(increment, delay)
}

export const stop = () => {
    if (state.interval) {
        clearInterval(state.interval)
        state.interval = null 
    }
}
import {proxy} from 'valtio'

export const state = proxy({
    count: 0 
})

export const increment = () => {
    state.count++
}


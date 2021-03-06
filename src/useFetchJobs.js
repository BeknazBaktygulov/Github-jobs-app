import React, {useReducer} from 'react'
import axios from 'axios'

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const reducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: [] }
        case ACTIONS.GET_DATA:
            return {...state, loading: false, jobs: action.payload.jobs}
        case ACTIONS.ERROR :
            return {...state, loading: false, error: action.payload.error, jobs: []}
        default: 
        return state
    }
}

function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true})

    dispatch({ type: 'hello', payload: { x: 3} })
    return {
        jobs: [],
        loading: false,
        error: false,
    }
}

export default useFetchJobs

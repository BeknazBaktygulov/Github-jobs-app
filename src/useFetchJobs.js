import React, {useReducer} from 'react'
import axios from 'axios'

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const reducer = (state, action) => {
    switch(action.type) {
        case MAKE_REQUEST:
            
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

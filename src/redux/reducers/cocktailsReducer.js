import { GET_COCKTAILS_FAILURE, GET_COCKTAILS_REQUEST, GET_COCKTAILS_SUCCESS } from "../actions/cocktailsActions"

const initialState = {
    cocktails: [],
    error: ''
}

const cocktailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COCKTAILS_REQUEST:
            return {
                ...state,
                error: ''
            }

        case GET_COCKTAILS_SUCCESS:
            return {
                ...state,
                cocktails: action.payload
            }

        case GET_COCKTAILS_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}
export default cocktailsReducer
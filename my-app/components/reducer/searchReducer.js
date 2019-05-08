
const initialState = {
    movie: '',
    data: []
}


export default (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_CHANGE':
            return {
                ...state,
                movie: action.payload
            }
        case 'MOVIES_FETCHED':
        console.log(action.payload)
            return {
                ...state,
                data: action.payload
            }

        case 'MOVIES_FAILOAD':
            return {
                ...state
            }
        default: return state
    }
}
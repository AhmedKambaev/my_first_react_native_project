const searchChange = (text) => {
    return {
        type: 'SEARCH_CHANGE',
        payload: text
    }
}

const getMovies = (text) => async (dispatch) => {
    function onSuccess(success) {
        dispatch({type: 'MOVIES_FETCHED', payload: success})
        return success
    }
    function onError(err) {
        dispatch({type: 'MOVIED_FAILOAD', payload: err})
    }

    try {
        let URL = ''
        if(text !== '') 
            URL = `https://api.tvmaze.com/search/shows?q=${text}`
        else URL = `https://api.tvmaze.com/search/shows?q=stargate`
        const res = await fetch(URL, {
            method: 'GET'
        })
        const success = await res.json()
        return onSuccess(success)
    } catch(err) {
        return onError(err)
    }
} 


export {
    searchChange,
    getMovies
}
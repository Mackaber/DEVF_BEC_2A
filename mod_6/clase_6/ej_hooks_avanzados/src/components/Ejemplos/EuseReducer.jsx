import { useEffect, useReducer, useCallback } from "react";

const initialState = {
  loading: false,
  error: null,
  data: null
}

function reducer(state, action) {
  switch(action.type) {
    case 'FETCH_START':
      return {...state, loading: true, error: null }
    case 'FETCH_SUCCESS':
      return {...state, loading: false, data: action.payload }
    case 'FETCH_ERROR':
      return {...state, loading: false, error : action.error }
    default: 
      return state
  }
}

function EuseReducer() {
  //const [isLoading, setIsLoading] = useState(false)
  //const [error, setError] = useState(null)
  //const [data, setData] = useState(null)

  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = useCallback(async () => {
    dispatch({ type: 'FETCH_START' })
      try {
        const response = await fetch(`https://httpbin.org/status/200`)
        dispatch({ type: 'FETCH_SUCCESS', payload: await response.json() })
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error })
      }
  }, [state.loading])

  useEffect(() => {
    fetchData() 
  }, [fetchData])

  return (
    <div className="cajita">
     <h2>Contra ejemplo de Reducer</h2>
     <p>{JSON.stringify(state)}</p>
     <p>Is Loading?  {state.loading ? "Loading" : "Loaded"}</p>
     <p>ERROR: {state.error}</p>
    </div> 
  )
}

export default EuseReducer
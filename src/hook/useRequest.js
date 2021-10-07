import {useState,useEffect} from 'react';

function useRequest(request) {
    
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')

    useEffect(() => {
        setLoading(true)
        request()
            .then(response => setData(response.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return [data,loading,error]
}

export default useRequest;
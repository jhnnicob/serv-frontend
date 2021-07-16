import {useState, useEffect} from 'react';
import ApiService from '../services/apiService';

export default function useGetData(url) {
    const [response, setResponse] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        ApiService.getAll(url)
        .then(response => {
            setIsLoading(false);
            console.log(response.data)
            setResponse(response.data);
        })
        .catch(e => {
            setIsLoading(false);
            console.log(e);
        })
    }, []);

    return {response, isLoading};
}
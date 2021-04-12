import { useState, useEffect } from 'react'
import API_KEY from "./keys"

const CONTEXT_KEY = "ce0f694cb1b42d9c1"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    // I parse in term inside of this hook and whenever term changes i'm going
    // to fire off this code inside of here
    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData();
    }, [term])

    return { data }

}

export default useGoogleSearch

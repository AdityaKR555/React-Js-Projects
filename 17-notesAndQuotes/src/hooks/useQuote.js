import React, {useState, useEffect} from 'react'

function useQuote(trigger) {

    const [data, setData] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/quotes/random")
        .then(res => res.json())
        .then(res => setData(res.quote))
        .catch(() => setData("Failed to load quote"));
    }, [trigger])

  
    return data;
}

export default useQuote

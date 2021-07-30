import { useState, useEffect } from "react";

const useFetchData = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            console.log(data);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        })
    },
    [url]);
    return {data, isPending, error};
}
 
export default useFetchData;
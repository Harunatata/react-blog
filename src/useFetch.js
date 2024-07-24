import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [Data, setData] = useState (null);
    const [IsPending, setIsPending] = useState(true);
    const [error, setError ] = useState(false);

    useEffect  (()=> {
        setTimeout (() => {
          fetch (url)
          .then(res => {
           
            if(!res.ok){
              throw Error("cant fetch the file");
            }
            return res.json();
          })
          .then(Data => {
            setData(Data);
            setIsPending(false);
            setError(null);
          }) 
        .catch(err => {
          setError(err.message);
          setIsPending(false);
        })
          
        }, 1000);
        }, [url]);
       
    return {error, IsPending, Data}
}
 
export default useFetch;

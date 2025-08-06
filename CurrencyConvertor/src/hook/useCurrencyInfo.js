// import { useEffect,useState } from "react";

// // custom hook is nothing it just a customised function that returns you some kind of work as like the other hook does


// function useCurrencyInfo(currency){
//     const[data, setData] = useState({})
//     useEffect(()=>{
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res)=> res.json())
//         .then((res)=> setData(res[currency]))
//         console.log(data);
//     },[currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo; // this can give me the access to setData

import { useEffect, useState } from "react";

// custom hook is nothing it just a customised function that returns you some kind of work as like the other hook does

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
            .then((res) => res.json())
            .then((res) => setData({ ...res.rates, [currency.toUpperCase()]: 1 }))
        console.log(data);
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo; // this can give me the access to setData

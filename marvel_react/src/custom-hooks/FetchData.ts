import React, { useState, useEffect } from 'react';
import { serverCalls } from '../api'


export const useGetData = () => {
    const [marvelData, setData] = useState<any>([])
    
    async function handleDataFetch(){
        const result = await serverCalls.get();
        setData(result)
    }

    //useEffect hook to add our data to our react state
    useEffect( ()=> {
        handleDataFetch();
    }, [])

    return {marvelData, getData:handleDataFetch}
}
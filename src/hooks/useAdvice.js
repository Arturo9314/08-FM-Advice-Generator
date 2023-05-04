import { useCallback } from "react";
import { useState } from "react";
import getRandomAdvice from "../services/conectAPI";

export function useAdvice() {
    
    const [advice, setAdvice] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const getAdvice = useCallback(async()=>{
        try {
            setLoading(true)
            setError(null)
            const newAdvice = await getRandomAdvice()
            setAdvice(newAdvice)
        } catch (e) {
            setError(e.message)
        }finally{
            setLoading(false)
        }
    },[])

    return {advice, loading, getAdvice}
}
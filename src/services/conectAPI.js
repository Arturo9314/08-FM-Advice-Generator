const getRandomAdvice = async ()=>{
    const randomNumber = Math.floor(Math.random() * 2);
    const ADVICE_RANDOM = `https://api.adviceslip.com/advice?random${randomNumber}`    
    const res = await fetch(ADVICE_RANDOM)
    const data = await res.json()
    return {id: data.slip.id, advice: data.slip.advice}
}

export default getRandomAdvice;
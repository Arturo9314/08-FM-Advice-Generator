const ADVICE_RANDOM = 'https://api.adviceslip.com/advice'
const getRandomAdvice = async ()=>{
    const res = await fetch(ADVICE_RANDOM)
    const data = await res.json()
    return {id: data.slip.id, advice: data.slip.advice}
}

export default getRandomAdvice;
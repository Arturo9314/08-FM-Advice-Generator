import { useEffect, useState } from 'react'
import './App.css'
import getRandomAdvice from './services/conectAPI'
import { ReactComponent as SeparatorDesktop } from './assets/images/pattern-divider-desktop.svg'
import { ReactComponent as IconDice } from './assets/images/icon-dice.svg';
import { ReactComponent as QuoteLeft } from './assets/images/quote-left-solid.svg';
import { ReactComponent as QuoteRight } from './assets/images/quote-right-solid.svg';
function App() {

  const [adviceText, setAdviceText] = useState({
    id: '0',
    advice: 'loading...'
  })

  const handleClick = ()=>{
    getRandomAdvice().then(newAdvice=>setAdviceText(newAdvice))
  }
  useEffect(()=>{
    getRandomAdvice().then(newAdvice=>setAdviceText(newAdvice))
  },[])

  return (
    <main id='wrapper'>
      <section id='advice-box'>
        <header id='advice-id'>
          <h1>ADVICE #{adviceText.id}</h1>
        </header>
        <article id='advice-text'>
          <p id='text'>
            <QuoteLeft/>
            {adviceText.advice}
            <QuoteRight/>
          </p>
        </article>
        <footer className='buttons'>
          <SeparatorDesktop id='separator'/>
          <button id='new-advice' className='btn-advice' onClick={handleClick} >
            <IconDice />
          </button>
        </footer>
      </section>
    </main>
  )
}

export default App

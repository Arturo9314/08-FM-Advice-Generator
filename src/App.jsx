import { useEffect } from 'react'
import './App.css'
import { ReactComponent as SeparatorDesktop } from './assets/images/pattern-divider-desktop.svg'
import { ReactComponent as IconDice } from './assets/images/icon-dice.svg';
import { ReactComponent as QuoteLeft } from './assets/images/quote-left-solid.svg';
import { ReactComponent as QuoteRight } from './assets/images/quote-right-solid.svg';
import { useAdvice } from './hooks/useAdvice';
import { Jelly } from '@uiball/loaders'

function App() {

  const {advice, loading, getAdvice} = useAdvice()

  const handleClick = ()=>{
    getAdvice()
  }
  useEffect(()=>{
    getAdvice()
  },[])

  return (
    <main id='wrapper'>
      <section id='advice-box'>
      {
        loading? <Jelly 
        size={50}
        speed={0.9} 
        color="var(--Neon-Green)" 
       />:
        <>
        <header id='advice-id'>
            <h1>ADVICE #{advice.id}</h1>
          </header>
          <article id='advice-text'>
            <p id='text'>
              <QuoteLeft/>
              {advice.advice}
              <QuoteRight/>
            </p>
          </article>
          <SeparatorDesktop id='separator'/>
          <button id='new-advice' className='btn-advice' onClick={handleClick} >
            <IconDice />
          </button>
        </>  
      }
      </section>
    </main>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Header />
      <Banner />
     </div>
    </>
  )
}

export default App

import { useState } from 'react'
import Header from './components/Header'



function App() {

const [currentScore, setCurrentScore] = useState(0);
const [highScore, setHighScore] = useState(0);

currentScore > highScore ? setHighScore(currentScore) : null;

const increaseScore = () => {
  setCurrentScore(currentScore + 1);
}
const resetScore = () => {
  setCurrentScore(0);
}

  return (
    <Header currentScore = {currentScore} highScore = {highScore} />
  )
}
export default App

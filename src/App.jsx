import { useState } from 'react'
import Header from './components/Header'
import Game from './components/Game';
import "./App.css"

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
    <div className="app-container">
      <Header currentScore = {currentScore} highScore = {highScore} />
      <Game increaseScore = {increaseScore} resetScore = {resetScore} />
    </div>
  )
}
export default App

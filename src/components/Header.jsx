export default function Header({ currentScore, highScore}) {
  return (
    <div className="header">
      <h1>Memory game</h1>
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
    </div>
  )
}
import { useState, useEffect } from "react"
import { useParams, useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom' 
import { BiLike } from "react-icons/bi"

export default function Gameinfo({user}) {
  const [players, setPlayers] = useState(null);
  const [game, setGame ]= useState(null)
  const userInfo = user
  const params = useParams()
  const gameId = `${params.gameId}/`
  const navigate = useNavigate()
  const URL = `https://checkupbackend.herokuapp.com/games/${gameId}`

  const getGame = async ()=>{
    try {
      const response = await fetch(URL)
      const result = await response.json()
      setGame(result)
      setPlayers(result.players.length)
    }catch(err){
      console.log(err)
    }
  }

const removeGame = async () => {
  try {
      const options = { method: 'DELETE' }
      const response = await fetch(URL, options)
      const deletedGame = await response.json()
      console.log(deletedGame)
      navigate('/games')
  } catch (err) {
      console.log(err)
      navigate(URL)
  }
}
useEffect(()=>{
  getGame()
}, [])

const handleSubmitJoin = async (e) => {
  e.preventDefault()
  game.players.push(userInfo._id)
  const output = JSON.stringify(game)
  try {
    const options = {
      method: "PUT",
      headers: {
          "Content-Type" : "application/json"
      },
      body: output
  } 
  const response = await fetch(URL, options)
  const responseData = await response.json()
  console.log(responseData)
  setPlayers(players + 1)
  } catch(error) {
    console.log(error)
  }
} 

const handleSubmitRemove = async (e) => {
  e.preventDefault()
  const index = game.players.indexOf(userInfo._id)
  game.players.splice(index, 1)
  const output = JSON.stringify(game)
  try {
    const options = {
      method: "PUT",
      headers: {
          "Content-Type" : "application/json"
      },
      body: output
  } 
  const response = await fetch(URL, options)
  const responseData = await response.json()
  console.log(responseData)
  setPlayers(players - 1)
  } catch(error) {
    console.log(error)
  }
} 

  const loaded = () => (
   
  <div className="book-perbook" >
      <h1>{game.location}</h1>
       <h4>When: {game.time}</h4>
        <p>Player Count: {players}</p>
        {userInfo && game.players.includes(userInfo._id) ? 
        <form onSubmit={handleSubmitRemove}>
        <button className="delete" type="submit"size={30} style={{color:'rgb(107, 38, 38)',marginLeft:'1rem', borderRadius: 20 + 'px'}}><BiLike style={{color:'rgb(107, 38, 38)'}}/>   Leave </button>
        </form>
        : user ?
        <form onSubmit={handleSubmitJoin}>
         <button className="delete" type="submit"size={30} style={{color:'rgb(107, 38, 38)',marginLeft:'1rem', borderRadius: 20 + 'px'}}><BiLike style={{color:'rgb(107, 38, 38)'}}/>     Join </button>
        </form>
        : null}
    {user && user.isAdmin ?
    <div> 
        <Link to={`/games/${gameId}edit/`}><button className="delete" style={{color:'rgb(107, 38, 38)', marginBottom:'0.5rem', marginLeft:'0.5rem',marginRight:'0.5rem',marginTop:'0.5rem'}}>Edit Game</button></Link>
        <button className="delete" onClick={removeGame} style={{color:'rgb(107, 38, 38)'}}>
			Remove Game
		</button>
    </div>
    : null }
</div>
)

const loading = () => {
  return <h1>Loading.........</h1>
 
}
  return (
    <div className="game-list">{game? loaded() : loading()}
     </div>
  )
}

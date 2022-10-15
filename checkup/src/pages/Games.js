import { useState, useEffect } from "react";
import {Link} from 'react-router-dom' 
import dateFormat from 'dateformat'

export const Games = (props) => {
    const [games, setGames] = useState([])
   
    const URL = "https://checkupbackend.herokuapp.com/games" 
    const getGames = async () =>{
        try{
          const response = await fetch(URL)
          const allGames = await response.json()
          setGames(allGames)
        }catch(err){
          console.log(err)
        }
    }
 useEffect(() => { 
  getGames()
 }, [])

const loaded = ()=>{
  return (
    <>
  {games?.map((game)=>{
       return (
         <div key={game._id} className="game-card">
          <h1>{game.title}</h1>
          <Link to={`/games/${game._id}`}> 
           <h4>Game: {game.location}</h4>
           <p>Players Needed: {game.playersNeeded}</p>
           <p>Time: {game.time}</p>
           </Link>
        </div>
        )})
        } </> )}
const loading = () => (
  <section className="game-list">
    <h1>
      Loading...
      <span>
        <img
          className="spinner"
          src="https://freesvg.org/img/1544764567.png"
          alt="sipnner"
        />{" "}
      </span>
    </h1>
  </section>
);
  return (
    <div className="game-list"> {games ? loaded() : loading() }

    </div>
  )
}
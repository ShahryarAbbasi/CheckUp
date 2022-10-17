import { useState, useEffect } from "react";
import {Link} from 'react-router-dom' 

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
    <h1>Current Games</h1>
  {games?.map((game)=>{
       return (
            <div key={game._id} className="gameCard">
                <Link to={`/games/${game._id}`}> 
                    <h3>Where: {game.location}</h3>
                    <h4>When: {game.time}</h4>
                    <div className="ball">
                        <h1>🏀</h1>
                    </div>
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
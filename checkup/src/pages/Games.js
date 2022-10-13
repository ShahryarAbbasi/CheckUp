import { useState, useEffect } from "react";
import {Link} from 'react-router-dom' 
import dateFormat from 'dateformat'

export const Games = (props) => {
    const [games, setGamess] = useState([])
   
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
         <div key={book._id} className="game-card">
          <h1>{game.title}</h1>
          <Link to={`/games/${book._id}`}> 
           <h4>Author: {book.author}</h4>
           <p>Genre: {book.genre}</p>
           <p>Pages: {book.pages}</p>
           <p>Publication Date:  {dateFormat(book.publishDate, 'mmmm, dS, yyyy')}</p>
           <p>Likes: {book.likes.length}</p>
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
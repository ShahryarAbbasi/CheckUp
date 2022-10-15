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

  const getBook = async ()=>{
    try {
      const response = await fetch(URL)
      const result = await response.json()
      setBook(result)
      setLikes(result.likes.length)
    }catch(err){
      console.log(err)
    }
  }

const removeGame = async () => {
  try {
      const options = { method: 'DELETE' }
      const response = await fetch(URL, options)
      const deletedBook = await response.json()
      console.log(deletedBook)
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
  setLikes(likes + 1)
  } catch(error) {
    console.log(error)
  }
} 

const handleSubmitRemove = async (e) => {
  e.preventDefault()
  const index = book.likes.indexOf(userInfo._id)
  game.players.splice(index, 1)
  const output = JSON.stringify(book)
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
  setPlayers(likes - 1)
  } catch(error) {
    console.log(error)
  }
} 

  const loaded = () => (
   
  <div className="book-perbook" >
      <h1>{book.title}</h1>
       <img src={book.image}  alt="book"/>
       <h4>Author: {book.author}</h4>
        <p>Genre: {book.genre}</p>
        <p>Pages: {book.pages}</p>
        <p>{book.description}</p>
        <p>Publication Date: {dateFormat(book.publishDate, 'mmmm, dS, yyyy')}</p>
        <a href={book.link} style={{color:'rgb(107, 38, 38)',textDecorationLine:'underline', fontWeight: 'bold'}}>Buy </a>
        <p>Likes: {likes}</p>
        {userInfo && book.likes.includes(userInfo._id) ? 
        <form onSubmit={handleSubmitUnlike}>
        <button className="delete" type="submit"size={30} style={{color:'rgb(107, 38, 38)',marginLeft:'1rem', borderRadius: 20 + 'px'}}><BiLike style={{color:'rgb(107, 38, 38)'}}/>   Unlike </button>
        </form>
        : user ?
        <form onSubmit={handleSubmitLike}>
         <button className="delete" type="submit"size={30} style={{color:'rgb(107, 38, 38)',marginLeft:'1rem', borderRadius: 20 + 'px'}}><BiLike style={{color:'rgb(107, 38, 38)'}}/>     Like </button>
        </form>
        : null}
    {user && user.isAdmin ?
    <div> 
        <Link to={`/books/${bookId}edit/`}><button className="delete" style={{color:'rgb(107, 38, 38)', marginBottom:'0.5rem', marginLeft:'0.5rem',marginRight:'0.5rem',marginTop:'0.5rem'}}>Edit book</button></Link>
        <button className="delete" onClick={removeBook} style={{color:'rgb(107, 38, 38)'}}>
									Remove Book
				</button>
    </div>
    : null }
</div>
)

const loading = () => {
  return <h1>Loading.........</h1>
 
}
  return (
    <div className="book-list">{game? loaded() : loading()}
     </div>
  )
}

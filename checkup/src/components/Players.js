import {useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {BsFillEmojiSmileFill, BsFillEmojiExpressionlessFill} from 'react-icons/bs'


function Players({user}){
    const [variable, setVariable] = useState([]);
    const params = useParams();
    const gameId = `${params.gameId}/`

    useEffect(()=> {
        fetch(`https://mybooksy-project.herokuapp.com/players/${gameId}`)
        .then((res) => res.json())
        .then((json) => {
            setVariable(json)
          
        })
    })
    return (
      <div className='game-players'>
        <h4>Players:</h4>
        { user ?
         <Link to={`/players/${gameId}add/`}><button className='delete' style={{color:'rgb(107, 38, 38)', marginBottom:'2rem', marginLeft:'0.5rem',marginRight:'0.5rem',marginTop:'0.5rem'}}>Add Player</button></Link>
        : null }
        {variable.map((player, idx) => { 
          return (
            <div className='player-wrapper'>
              <p>{player.name}</p>
              {user ?
              <>
              <button className="delete" style={{color:'rgb(107, 38, 38)', marginBottom:'3rem', marginLeft:'0.5rem',marginRight:'0.5rem',marginTop:'0.5rem'}} onClick={async ()=> {
                const options = {method: 'DELETE'}
                const response = await fetch(`https://checkupbackend.herokuapp.com/players/${player._id}`, options)
                const deletedReview = await response.json()
              }}>Remove Player</button>
              </>
              : null }
            </div>
          )
        })}
      </div>
    )
}

export default Players
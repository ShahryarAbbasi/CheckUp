import {useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'


function Players({user}){
    const [variable, setVariable] = useState([]);
    const params = useParams();
    const gameId = `${params.gameId}/`

    useEffect(()=> {
        fetch(`https://checkupbackend.herokuapp.com/players/${gameId}`)
        .then((res) => res.json())
        .then((json) => {
            setVariable(json)
          
        })
    })
    return (
      <div className='gamePlayers'>
        { user ?
         <Link to={`/players/${gameId}add/`}><button className='submit'>Add Player</button></Link>
        : null }
        <h4>Game Waitlist:</h4>
        {variable.map((player, idx) => { 
          return (
            <div className='player-wrapper'>
              <p>{player.name}
              {user ?
              <>
              <button className="submit" onClick={async ()=> {
                const options = {method: 'DELETE'}
                const response = await fetch(`https://checkupbackend.herokuapp.com/players/${player._id}`, options)
                const deletedPlayer = await response.json()
              }}>Remove Player</button>
              </>
              : null }
              </p>
            </div>
          )
        })}
      </div>
    )
}

export default Players
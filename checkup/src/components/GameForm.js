import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_URL || "http://localhost:4000/";

const getGames = async (fn) => {
    try{
        const response = await fetch(BASE_URL + "games");
        const allGames = await response.json();
        fn(allGames)
    } catch (error){
        console.log(error)
    }
}
function GameForm(props) {
    const navigate = useNavigate()

    const initForm = {
        location: '',
        time: ''
    }

    const [gameForm, setGameForm] = useState(initForm);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newGame = { ...gameForm }
            const output = JSON.stringify(newGame)
            const options = {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: output
            }
            const URL = BASE_URL + "games"
            const response = await fetch(URL, options)
            const responseData = await response.json()
            setGameForm(initForm)
            navigate('/games')

        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const data = { ...gameForm, [e.target.name]: e.target.value }
        setGameForm(data)
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
            <h1>Add Game!</h1>
            <div class="gameForm">
             <label>
            Where: <input type="text" required name="location" placeholder="Where is this game going to be played?" onChange={handleChange} value={gameForm.location} />
                </label>
                <br></br>
                <label>
            When: <input type="text" required name="time" placeholder="What time will this game be played?" onChange={handleChange} value={gameForm.time} />
                </label>
                </div>
                <button className="delete"  style={{color:'rgb(107, 38, 38)', margin:"0 auto", width:'150px', height: '50px'}}  name="Submit" id="button" value="Add Game">Add Game</button>
            </form>
        </>
    )
}

export default GameForm
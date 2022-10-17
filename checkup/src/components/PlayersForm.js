import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
const BASE_URL = "https://checkupbackend.herokuapp.com/"

function ReviewForm(props) {
    const params = useParams();
    const gameId = params.gameId;
    const navigate = useNavigate();
    const initForm = {
        name: '',
        game: gameId,
    }
    const [playerForm, setPlayerForm] = useState(initForm);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newPlayer = {...playerForm}
            const output = JSON.stringify(newPlayer)
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: output
            }
            const URL = BASE_URL + "players"
            const response = await fetch(URL, options)
            const responseData = await response.json()
            setPlayerForm(initForm)
            navigate(`/games/${gameId}`)
        } catch (error) {
            console.log(error)
        }   
    }
    
    const handleChange = (e) => {
        const data = {...playerForm, [e.target.name]: e.target.value}
        setPlayerForm(data)
    }

    return (
        <div className="form">
            <h1>Add your name!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <h4>Name:</h4>
                    <br></br>
                <input style={{width:'250px', height: '25px', resize:'none'}}  type="text" required name="name" placeholder="Enter your name" onChange={handleChange} value={playerForm.name}/>
                </label>
                <input className="submit" style={{ marginLeft: '2rem'}} type='Submit' value="Add to Queue" />
            </form>
        </div>
    )
}

export default ReviewForm;
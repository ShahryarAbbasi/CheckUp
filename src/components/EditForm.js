import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BASE_URL =  "https://checkupbackend.herokuapp.com/";

  function EditForm(props) {

    const navigate = useNavigate()
    const [editForm, setEditForm] = useState(null);
    const params = useParams()
    const gameId = params.gamesId
    const URL = BASE_URL + `games/${gameId}`  


    const getGame = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setEditForm(data)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const output = JSON.stringify(editForm)
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
            navigate(`/games/${gameId}`)

        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const data = { ...editForm, [e.target.name]: e.target.value }
        setEditForm(data)
    }

    useEffect (() => {
        getGame()
    }, [])

    return (
        <>
            {editForm ?
            <>
           <form className="form" onSubmit={handleSubmit}>
           <h1>Edit Game</h1>
            <label>
            Where: <input style={{width:'250px', height: '25px', resize:'none'}} type="text" required name="location" placeholder="Enter book name" onChange={handleChange} value={editForm.location} />
            </label>
            <br></br>
            <label>
            When: <input style={{width:'250px', height: '25px', resize:'none'}} type="text" required name="time" placeholder="http://..." onChange={handleChange} value={editForm.time} />
            </label>
            <br></br>
            <input className="submit" type="Submit" value="Submit Changes" />
            </form>
           </> : null}
        </>
    )
}

export default EditForm
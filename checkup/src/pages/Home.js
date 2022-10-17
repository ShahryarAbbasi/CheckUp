import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <h1>Welcome To CheckUp!</h1>
            <h2>The app for your pickup basketball needs</h2>
            <Link to="/games">
            <button>Go to game feed</button>
            </Link>
        </div>
    )
}
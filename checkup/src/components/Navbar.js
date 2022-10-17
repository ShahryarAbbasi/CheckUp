import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar({handleLogout, user}) {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <header className='header'>
        <Link to="/"></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        { user ?
        <li>CheckUp {user.username}!</li>
        : null} 
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/games">Games</Link>
        </li>
        { user && user.isAdmin ? 
        <li>
            <Link to="/games/add">Start A New Game</Link>
        </li>
        : null } 
        { user ? (<li><Link onClick={handleLogout} to="/">Logout</Link></li>) :
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </>
        }
        </ul>
    </header>
  )
}

export default Navbar
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
        <li size={60} style={{color:'#fff'}}>Welcome!  {user.username}</li>
        : null} 
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/games">Games</Link>
        </li>
        { user ? (<Link onClick={handleLogout} to="/">Logout</Link>) :
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </>
        }
        { user && user.isAdmin ? 
        <li>
            <Link to="/games/add">Start A New Game</Link>
        </li>
        : null } 
        </ul>
        <div className='hamburger' onClick={handleClick}> 
          {click ? (<FaTimes size={20} style={{color:'#fff'}}/>) : (<FaBars size={20} style={{color:'#fff'}} />)} 
        </div>
    </header>
  )
}

export default Navbar
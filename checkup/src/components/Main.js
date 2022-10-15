import { Routes, Route, Outlet } from "react-router-dom";
import { Games } from "../pages/Games";
import {Show} from "../pages/Show";
import GameForm  from "./GameForm"
import PlayersForm from "./PlayersForm"
import EditForm from "./EditForm";
import EditPlayer from "./EditPlayer";
import Home from "../pages/Home";
import AuthForm from "./AuthForm";


function Main({currentUser, getUser, handleLogin, handleSignup, isAuthenticated, user}) {
 
    return ( 
       <>
       <Outlet/>
       <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/games" element={<Games />} />  
        <Route exact path="/games/:gameId" element={<Show user={user}/>}/> 
        <Route exact path="/games/add" element={<GameForm />}/>
        <Route exact path="/players/:gameId/add" element={<PlayersForm />} />
        <Route exact path="/players/:playerId/edit" element={<EditPlayer />} />
        <Route exact path="/games/:gamesId/edit" element={<EditForm />}/>
        <Route exact path="/login" element={<AuthForm signal={handleLogin} login/>} />
        <Route exact path="/register" element={<AuthForm signal={handleSignup} />} />

      </Routes>
     </>
     )
  }
  
  export default Main;
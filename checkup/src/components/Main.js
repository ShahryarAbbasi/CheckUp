import { Routes, Route, Outlet } from "react-router-dom";
import { Games } from "../pages/Games";
import {Show} from "../pages/Show";
import BookForm  from "./BookForm"
import ReviewForm from "./ReviewForm"
import EditForm from "./EditForm";
import EditReview from "./EditReview";
import Home from "./Home";
import AuthForm from "./AuthForm";


function Main({currentUser, getUser, handleLogin, handleSignup, isAuthenticated, user}) {
 
    return ( 
       <>
       <Outlet/>
       <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/games" element={<Books />} />  
        <Route exact path="/games/:gameId" element={<Show user={user}/>}/> 
        <Route exact path="/games/add" element={<BookForm />}/>
        <Route exact path="/players/:gameId/add" element={<ReviewForm />} />
        <Route exact path="/players/:playerId/edit" element={<EditReview />} />
        <Route exact path="/games/:gamesId/edit" element={<EditForm />}/>
        <Route exact path="/login" element={<AuthForm signal={handleLogin} login/>} />
        <Route exact path="/register" element={<AuthForm signal={handleSignup} />} />

      </Routes>
     </>
     )
  }
  
  export default Main;
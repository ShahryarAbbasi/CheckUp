import decode from "jwt-decode"
import {getUserToken, setUserToken, clearUserToken} from "./utils/authToken"
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';


function App() {
 const URL = "https://checkupbackend.herokuapp.com/"
 const [currentUser, setCurrentUser] =  useState(null);
 const [isAuthenticated, setIsAuthenticated] = useState(false);

 const registerUser = async (data) => {
  try {
    const configs = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type" : "application/json",
      },
    };
    const newUser = await fetch(URL+"auth/register", configs)
    const parsedUser = await newUser.json();
    setUserToken(parsedUser.token)
    setCurrentUser(parsedUser.user)
    setIsAuthenticated(parsedUser.isLoggedIn)
    return parsedUser
  } catch(error){
    console.log(error)
    clearUserToken();
    setIsAuthenticated(false);
    return false;
  }
}
const loginUser = async (data) => {
  try {
    const configs = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  const response = await fetch(URL+"auth/login", configs)
  const user = await response.json();
  setUserToken(user.token);
  setCurrentUser(user.user);
  setIsAuthenticated(user.isLoggedIn);
  return user;
  }catch(error){
    clearUserToken();
    setCurrentUser(null);
    setIsAuthenticated(false)
    return false;
  }
}
const getUser = async () => {
  const token = getUserToken();
  try {
    if (token) {
      const user = decode(token);
      const response = await fetch(URL+`auth/user/${user.id}`, {headers: {"Authorization": `bearer ${token}`}})
      const foundUser = await response.json();
      setCurrentUser(foundUser)
      setIsAuthenticated(true)
    }else {
      setCurrentUser(null)
      setIsAuthenticated(false)
    }
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=> {
  getUser();
}, [currentUser?._id])

const logoutUser = () => {
  clearUserToken();
  setCurrentUser(null);
  setIsAuthenticated(false);
}
return (
  <div className="App">
    <Navbar user={currentUser} handleLogout={logoutUser} getUser={getUser} isAuthenticated={isAuthenticated}/>
    <Main 
      getUser={getUser} 
      user={currentUser}
      isAuthenticated={isAuthenticated}
      handleLogout={logoutUser}
      handleLogin={loginUser}
      handleSignup={registerUser}
    />
  </div>
); 
}
export default App;

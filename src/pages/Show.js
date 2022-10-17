import Players from "../components/Players";

import Gameinfo from "../components/Gameinfo"

export const Show = ({user}) => {
  
  return (

    <div>
      <div> 
        <Gameinfo user={user}/> 
      </div>
      <div>
        <Players user={user}/> 
      </div>
    </div>

    
  )
}

export default Show
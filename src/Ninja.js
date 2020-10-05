import React ,{Component} from 'react';


//this is functional component but example 2 is class bassed 
const Ninja = ({ninjas, deleteNinja }) =>{   // ninja is used instate of props

    const ninjaList = ninjas.map(ninja =>{

      return(
        <div className= "ninja" key = {ninja.id}>
          <div>Today list: {ninja.todo} 
        
          <button className="btn" onClick = {() => {deleteNinja(ninja.id)}} > ⌫ </button> 
          </div> 
        </div> 
          )
    })

      return(
        <div className ="ninja-list">
          {ninjaList} 
        </div>
      )
}

export default Ninja;
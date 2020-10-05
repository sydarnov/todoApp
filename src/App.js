import React ,{Component} from 'react';
import Ninja from './Ninja';
import index from './index';
import AddForm from './AddForm';


class App extends Component{

  state = {
    ninjas: [
      {todo:'walk',id:1},


    ]
  }

  addNinja =(ninja) =>{  //add new details in array
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas,ninja]
    this.setState({
      ninjas:ninjas
    })
  }
  deleteNinja = (id) => {

    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id 
    });
    this.setState({
      ninjas: ninjas 
    })
  }


  render(){
    return (
      <div className="App">
        <h1 className="centr">This is my first react app </h1>
        <p className="centr">Welcome ;)</p>
        <Ninja deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddForm addNinja={this.addNinja} /> 

      </div>
    );

  }
}

export default App;

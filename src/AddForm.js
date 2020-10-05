import React ,{Component} from 'react';


class AddForm extends Component{
    state ={
        todo: null,
    }

    handleCng= (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label   htmlFor= "todo" ></label>
                <input className="inputbox" placeholder="Type here.." type ="text"  id = "todo" onChange={this.handleCng}/> 

                <button className="btn">✓</button>
    
            </form>
        </div>
            
        );

    }


}
export default AddForm;
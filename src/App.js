import React , {  Component } from "react";
import TodoItem from "./Component/todoitem/todoitem"
import Additem from "./Component/Additem/Additem"
import './App.css'


    


class App extends Component {
    state ={
        items : [
            {id: 1,name:'mohmmed',age: 21},
            {id: 2,name:'ahmed',age: 23},
            {id: 3,name:'Brianna ',age: 30},
            
        ],
        
    }

     deleteTtem = (id) => {
      
        let items = this.state.items.filter(
            item => {
                return item.id !== id
            }) 
            this.setState({items})
    }   
    
    Additem = (item) => {
        item.id = Math.random();
        let items = this.state.items;
        items.push(item);
        this.setState({items})
    }

    render(){
        return (
            <div className="App container">
            <h1 className="text-center" > Todo List</h1>
             <TodoItem items={this.state.items}  deleitem={this.deleteTtem}/>
              <Additem Additem={this.Additem}/>
            
             </div>
    );

    }
}

export default App;
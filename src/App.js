import React, { Component } from 'react';
import Resize from './Resize';
import './App.css';

class App extends Component{
  constructor () {
    super ()

    this.state = {
      columns: [],
      colors: ["red", "orange", "yellow", "green", "blue", "purple", "indigo"],
      total_columns: 0,
      maximize: null
    };

  }

  addColumn = () => {

    if (this.state.columns.length > 0) {

        let num = this.state.total_columns + 1;

        this.setState(prevState => ({
          columns: prevState.columns.concat("C" + num),
          total_columns: num
        }))

      

    } else {

      this.setState(prevState => ({
        columns: prevState.columns.concat("C0")
      }))

    }

  }

  deleteColumn = (name) => {

    console.log(name);

    this.setState(prevState => ({
      columns: prevState.columns.filter( item => item !== name )
    }))

  }

  render() {

    const { colors, columns, maximize } = this.state;

    return (

      <div>
        <button className="button right" onClick={this.addColumn}>Add Column</button>
        
        {columns && <Resize total = {columns.length} max = {maximize}>

          {
            columns.map((item, index) => 
              <div
                key={index}
                style={{backgroundColor: `${colors[index % 7]}`}}
                className="column"
                onDoubleClick={ () => this.setState({ maximize: index })}
              >
                <label>{item}</label>
                <small 
                  style ={{cursor: 'pointer'}}
                  onClick={this.deleteColumn.bind(this, item)}>x</small>
              </div>
            )
          }
          
        </Resize> }
      </div>

    )
  }

}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Link  } from 'react-router-dom';


export default class extends Component{
  state={
    writersSet:[]
  }

  async componentDidMount(){
    const writers = await (await fetch('http://localhost:3004/writers')).json();

    // console.log(writers);
    this.setState({
      writersSet: writers 
    })
    
  }

    render(){
      return (
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <link to="/">Home</link>
              </li>
              <li>
                <link to="/writers">Writer</link>
              </li>
            </ul>
          </div>
        </BrowserRouter>
      )
    }
}
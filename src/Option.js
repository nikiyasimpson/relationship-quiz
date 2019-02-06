import React, { Component } from 'react'
import './App.css';

class Option extends Component {
  constructor() {
    super();

    this.optionClick = this.optionClick.bind(this);


  }


/*Sets function for what happens if button is clicked*/

  componentDidMount(){
    console.log(this.props);
  }

  optionClick()  {
      console.log(this.props);
      this.props.setAnswer(this.props.question, this.props.option);

    }

    render() {
      return(
        <button className="quiz-option" onClick ={this.optionClick}>{this.props.option}</button>
      )
     }

}

 export default Option

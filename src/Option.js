import React, { Component } from 'react'
import './App.css';


class Option extends Component {


    /*Sets function for what happens if button is clicked*/
  onClick = (e) => {
    this.props.optionClick();
  }

    optionClick(option)  {
        if(this.props.question === '1')
          {
            this.props.setAnswer(this.props.answer1,option)
          }
    }

    render() {
      return(
        <button className="quiz-option" onClick = {() => this.optionClick(this.props.option)}>{this.props.option}</button>
      )
     }

}

 export default Option

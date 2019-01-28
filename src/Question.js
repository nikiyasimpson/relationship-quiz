/*This component is for the book*/
import React, { Component } from 'react'

class Question extends Component {

  render() {
    /* Renders question component */

     return (
          <div className="question">
            {this.props.question}
            <div className="options">
              {this.props.answers}
            </div>
          </div>
     )
   }
 }

 export default Question

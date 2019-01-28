
import React, { Component } from 'react'


class Question extends Component {
  MakeItem(X) {
               return <option>{X}</option>;
           };


  render() {
    /* Renders question component */


     return (
          <div className="question">
            {this.props.question.question}
            <div className="options">
            <select>{this.props.question.options.map(this.MakeItem)}</select>;
            </div>
          </div>
     )
   }
 }

 export default Question

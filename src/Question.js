
import React, { Component } from 'react'


class Question extends Component {
  MakeItem(X) {
               return <option>{X}</option>;
           };

  ShowQuestion() {
    if(this.props.questions[0].answer === '') {
      return this.props.questions[0];
    }
    if(this.props.questions[0].answer === 'Yes') {
      return this.props.questions[1];
    }

  }

  /*NextQuestion()
  {
    if(question.no === 1) {
      if (question.answer == "") {
        return question;
      }
      else if (question.answer === "No") {
      return this.props.questions[2];
      }
      else if(question.answer ==="Yes" || question.answer=="Unsure") {
      return this.props.questions[1];
      }
    }

  };*/


  render() {
    /* Renders question component */
    let firstquestion = this.ShowQuestion();

     return (
          <div className="question">
            {firstquestion.question}
            <div className="options">
            <select>{firstquestion.options.map(this.MakeItem)}</select>
            </div>
          </div>
     )
   }
 }

 export default Question


import React, { Component } from 'react'
import './App.css';
import Option from './Option'

class Question extends Component {

  constructor() {
    super();
    this.state = {
      question : '1'
    }
  }

  showQuestion(){
    if(this.props.answer1 === '')
      {
        let question = 'Are you currently in a relationship?';
        console.log(question);
        return question;

      }
    else if (this.props.answer2 === '')
      {
        return 'Are you currently married?';
      }
    else if (this.props.answer3 === '')
        {
          return 'Are you experiencing any of the following issues?';
        }
    else if (this.props.answer4 === '')
        {
          return 'oes your partner/spouse want counseling also?';
        }
    else if (this.props.answer5 === '')
        {
          return 'Are there other family members that you would like to include in your sessions (e.g. children, parents)?';
        }
    else if (this.props.answer6 === '')
        {
           return 'Are you dealing with a lot of pain in your relationship?';
        }
    else if (this.props.answer7 === '')
        {
            return 'We prefer to have our counseling sessions ...';
        }
    else if (this.props.answer8 === '')
        {
            return 'Both of us are ready to end this relationship?';
        }
    else if (this.props.answer9 === '')
        {
            return 'Would your partner/spouse be able to go to counseling with you?';
        }
  }



  showOptions()
  {
    let q = this.state.question;
    const yesNoOptions = ['Yes','No','Unsure'];
    const officeTypes = ['In-Office','Phone','Online','At our home'];
    const issues = ['Infidelity','Trust','Death of a Loved One', 'Communication','Addiction','Intimacy'];

    if( q === '3')
        return issues;
    else if (q === '7')
        return officeTypes;
    else
        return yesNoOptions;
  }


  render() {
    /* Renders question component */
    let question = this.showQuestion();
    let options = this.showOptions();

     return (
          <div className="question">
            {question}
            <div>
              {options.map((option) => <Option {...this.props} question = {this.state.question} key={option} option={option} />
                )}
            </div>
          </div>
     )
   }
 }

 export default Question

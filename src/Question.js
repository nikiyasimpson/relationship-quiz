
import React, { Component } from 'react'
import './App.css';
import Option from './Option'

class Question extends Component {

  constructor() {
    super();
    this.state = {
      question : null,
      questionText: null
    }

    this.setQuestions = this.setQuestions.bind(this);


  }

  setQuestions() {
    if(this.props.relationship === '')
      {
        this.setState({question: 'relationship'});
        this.setState({questionText: 'Are you currently in a relationship?'});

      }
    else if (this.props.relationship === 'No' && this.props.issues === '')
      {
        this.setState({question: 'issues'});
        this.setState({questionText: 'Are you experiencing any of the following issues?'});


      }
    else if (this.props.married === '')
      {
        this.setState({question: 'married'});
        this.setState({questionText:  'Are you currently married?'});

      }
    else if (this.props.issues === '')
        {
          this.setState({question: 'issues'});
          this.setState({questionText: 'Are you experiencing any of the following issues?'});

        }
    else if ((this.props.relationship === 'Yes' || this.props.relationship === 'Unsure') && this.props.partner === '')
        {
          this.setState({question: 'partner'});
          this.setState({questionText: 'Does your partner/spouse want counseling also?'});

        }
    else if (this.props.family === '')
        {
          this.setState({question: 'family'});
          this.setState({questionText: 'Are there other family members that you would like to include in your sessions (e.g. children, parents)?'});

        }
    else if (this.props.pain === '')
        {
          this.setState({question: 'pain'});
          this.setState({questionText: 'Are you dealing with a lot of pain in your relationship?'});

        }
    else if (this.props.where === '')
        {
          this.setState({question: 'where'});
          this.setState({questionText: 'We prefer to have our counseling sessions ...'});

        }
    else if ((this.props.relationship === 'Yes' || this.props.relationship === 'Unsure') && this.props.end === '')
        {
          this.setState({question: 'end'});
          this.setState({questionText: 'Both of us are ready to end this relationship?'});

        }
    else if ((this.props.relationship === 'Yes' || this.props.relationship === 'Unsure') && this.props.able === '')
        {
          this.setState({question: 'able'});
          this.setState({questionText: 'Would your partner/spouse be able to go to counseling with you?'});

        }
  }

  componentWillMount(){
    this.setQuestions();

  }

  componentDidMount(){
    console.log('Question State:');
    console.log(this.state);
  }

  componentDidUpdate(){
    console.log('Question State:');
    console.log(this.state);
    console.log(this.props);
  }


  showOptions()
  {
    let q = this.state.question;
    const yesNoOptions = ['Yes','No','Unsure'];
    const officeTypes = ['In-Office','Phone','Online','At our home'];
    const issues = ['Infidelity','Trust','Death of a Loved One', 'Communication','Addiction','Intimacy'];

    if( q === 'issues')
        return issues;
    else if (q === 'where')
        return officeTypes;
    else
        return yesNoOptions;
  }




  render() {
    /* Renders question component */
    let question = this.state.questionText;
    let options = this.showOptions();



     return (
          <div className="question">
            {question}
            <div className="options-area">
              {options.map((option) =>
                <Option {...this.state} key={option} setAnswer={this.props.setAnswer.bind(this)}  option={option}/>
                )}
            </div>
            {this.state.question === 'able' ? <button className = 'next-button'>Submit</button> : <button className = 'next-button' onClick={this.setQuestions}>Next Question</button>
            }
            
            
          </div>
     )
   }
 }

 export default Question

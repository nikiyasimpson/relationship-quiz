import React, { Component } from 'react';
import './App.css';
import Question from './Question'

class App extends Component {

	  constructor() {
				super();

				//Answers to the quiz questions
				this.state = {
					relationship : '',
					married : '',
					issues : '',
					partner : '',
					family : '',
					pain : '',
					where : '',
					end : '',
					able: ''
			}

		}
		//Runs after component is rendered
		componentDidMount() {
			console.log('Quiz Answers State: ');
			console.log(this.state);
		}

		//Assigns for answers for each question
		setAnswer(question, answer){
			if (question === 'relationship')
					this.setState({relationship:  answer});
			else if (question === 'married')
					this.setState({married: answer});
			else if (question === 'issues')
					this.setState({issues: answer});
			else if (question === 'partner')
					this.setState({partner: answer});
			else if (question === 'family')
					this.setState({family: answer});
			else if (question === 'pain')
					this.setState({pain: answer});
			else if (question === 'where')
					this.setState({where: answer});
			else if (question === 'end')
					this.setState({end: answer});
			else if (question === 'able')
					this.setState({able: answer});
			else {
				console.log("Question not recognized");
			}
		}

//This part tells us what is shown on the screen
  render() {
    return (
      <div className="App">
          <header className="App-header">
					    <h1>What Type of Counseling is Best for You?</h1>
          </header>
       			<Question {...this.state} setAnswer={this.setAnswer.bind(this)}/>
						
       		<footer className="App-footer">
            	<p>Arkansas Relationship Counseling Center</p>
          </footer>
      </div>
    );
  }
}

export default App;

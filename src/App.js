import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import question from './Question'

class App extends Component {

	  constructor() {
      super();
      this.state = {
        
          answers: [],
        

          updateSuperState: obj => {
            this.setState(obj);
          }
        };

      const questions = [ 

      { number: 1,
      	question: 'Are you currently in a relationship?',
      	options: ['Yes','No','Unsure']
      },

      { number: 2,
      	question: 'Are you currently married?',
      	options: ['Yes','No','Unsure']
      },

      { number: 3,
      	question: 'Are you experiencing any of the following issues?'
      	options: ['Infidelity','Trust','Death of a Loved One', 'Communication','Addiction','Intimacy']
      },

      { number: 4,
      	question: 'Does your partner/spouse want counseling also?',
      	options: ['Yes','No','Unsure']
      },

      { number: 5,
      	question: 'Are there other family members that you would like to include in your sessions (e.g. children, parents) ?',
      	options: ['Yes','No','Unsure']
      },

      { number: 6,
      	question: 'Are you dealing with a lot of pain in your relationship?',
      	options: ['Yes','No','Unsure']
      },

      { number: 7,
      	question: 'We prefer to have our counseling sessions ...'
      	options: ['In-Office','Phone','Online','At our home']
      },

      { number: 8,
      	question: 'Both of us are ready to end this relationship?',
      	options: ['Yes','No','Unsure']
      },

      { number: 9,
      	question: 'Would your partner/spouse be able to go to counseling with you?',
      	options: ['Yes','No','Unsure']
      }

      ]
      
    }


  render() {
    return (
      <div className="App">
          <header className="App-header">
            <h1>What Type of Counseling Do You Need?</h1>
       		</header>

       		<footer>
            	<p>Nikiya M. Simpson, Arkansas Relationship Counseling Center</p>
          	</footer>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Question from './Question'

class App extends Component {


	  constructor() {
				super();

				this.state = {

					answer1 : '',
					answer2 : '',
					answer3 : '',
					answer4 : '',
					answer5 : '',
					answer6 : '',
					answer7 : '',
					answer8 : '',
					answer9: ''
			}

}

	componentDidMount() {
		console.log(this.state);
	}

setAnswer(q, a){
		this.setState({q:  a});
		console.log(this.state);

}




//This part tells us what is shown on the screen
  render() {

    return (
      <div className="App">

          <header className="App-header">
					    <h1>What Type of Counseling is Best for You?</h1>
          </header>

					<form>
       		<Question {...this.state} setAnswer={this.setAnswer}/>
					</form>

       		<footer className="App-footer">
            	<p>Arkansas Relationship Counseling Center</p>
          </footer>
      </div>
    );
  }
}

export default App;

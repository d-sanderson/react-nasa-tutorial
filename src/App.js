import React, {Component} from 'react';


import Title from './Title/Title'
import Background from './Background/Background'
import Grid from './Grid/Grid'
import Rocket from './Rocket/Rocket'
import Smoke from './Rocket/Smoke'

import facts from '../public/resources/NASA_facts'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
		 facts,
	 };
    }

    updateClicked(id) {
    let stateCopy = Object.assign({}, this.state);
       stateCopy.facts[id].clicked = true;
       this.setState(stateCopy)
    }
  render() {
    return (
      <div>
      <Title />
      <Background />
      <Grid facts={this.state.facts} updateClicked={this.updateClicked.bind(this)}/>
      <Rocket />
      <Smoke />




      </div>
    )
  }
}
export default App;

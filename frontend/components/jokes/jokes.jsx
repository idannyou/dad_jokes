import React from 'react';
import JokesListItem from './jokes_list';
import JokesForm from './jokes_form';


class Jokes extends React.Component {
  
  render(){
    const jokes = this.props.jokes;
    return (
      <div>
        <JokesForm
          receiveJoke = {this.props.receiveJoke}
          />
        <ul>
          {
            jokes.map((joke) =>(
              <JokesListItem
                key = {joke.id}
                joke = {joke}
                removeJoke = {this.props.removeJoke}
                receiveJoke = {this.props.receiveJoke}
                />
            ))
          }
        </ul>
      </div>
    );

  }

}

export default Jokes;

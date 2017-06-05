import React from 'react';
import JokesListItem from './jokes_list';
import JokesForm from './jokes_form';


class Jokes extends React.Component {

  render(){
    const jokes = this.props.jokes;
    return (
      <div>
        <ul>
          {
            jokes.map((joke) =>(
              <JokesListItem
                key = {joke.id}
                joke = {joke}
                removeJoke = {this.props.removeJoke}
                />
            ))
          }
        </ul>
        <JokesForm
          receiveJoke = {this.props.receiveJoke}
          />
      </div>
    );

  }

}

export default Jokes;

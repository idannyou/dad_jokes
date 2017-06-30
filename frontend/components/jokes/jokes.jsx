import React from 'react';
import JokesListItem from './jokes_list';
import JokesForm from './jokes_form';


class Jokes extends React.Component {

  componentDidMount(){
    this.props.fetchJokes();
  }

  render(){
    const jokes = this.props.jokes;
    return (
      <div className= 'jokes-container'>
        <JokesForm
          receiveJoke = {this.props.receiveJoke}
          createJoke = {this.props.createJoke}
          />
        <ul>
          {
            jokes.map((joke) =>(
              <JokesListItem
                key = {joke.id}
                joke = {joke}
                deleteJoke = {this.props.deleteJoke}
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

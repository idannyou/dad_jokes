import React from 'react';

class JokesListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: this.props.joke.joke
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.toggleFunny = this.toggleFunny.bind(this);
  }

  toggleDisplay(){
      let display = (this.state.display === this.props.joke.joke)?
                    this.props.joke.answer : this.props.joke.joke;
      this.setState({
        display: display
      });
  }

  toggleFunny(){
    const joke = Object.assign({}, this.props.joke, {funny: !this.props.joke.funny});
    this.props.receiveJoke(joke);
  }


  render(){
    return(
      <li className='joke-container'>
        <h2
          onClick = {this.toggleDisplay}
          className='joke'
          >
          {this.state.display}
        </h2>
        <h3
          onClick = {() => this.props.deleteJoke(this.props.joke.id)}
          className='joke-delete'
          >
          Delete
        </h3>
        <h3
          onClick = {this.toggleFunny}
          className='joke-toggle'
          >
          {(this.props.joke.funny)? 'Funny':'Not Funny'}
        </h3>
      </li>
    );
  }

}

export default JokesListItem;

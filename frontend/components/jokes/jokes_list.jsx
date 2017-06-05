import React from 'react';

class JokesListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: this.props.joke.joke
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay(){
      let display = (this.state.display === this.props.joke.joke)?
                    this.props.joke.answer : this.props.joke.joke;
      this.setState({
        display: display
      });
  }


  render(){
    return(
      <li>
        <h2
          onClick = {this.toggleDisplay}
          >
          {this.state.display}
        </h2>
        <h3
          onClick = {() => this.props.removeJoke(this.props.joke.id)}
          >
          Delete
        </h3>
      </li>
    );
  }

}

export default JokesListItem;

import React from 'react';

class JokesListItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const joke = this.props.joke;
    return(
      <li>
        {joke.joke}
        {joke.answer}
      </li>
    );
  }

}

export default JokesListItem;

import React from 'react';

class JokesForm extends React.Component{

  constructor(){
    super();
    this.state = {
      id: -1,
      joke: '',
      answer: '',
      funny: false
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // create uniqueId for form testing
  uniqueId() {
    return new Date().getTime();
  }
  //

  update(field, event){
    event.preventDefault();
    this.setState({[field]: event.target.value});
  }

  // can write update by returning event without event being input
  // update(field){
  //   return event => this.setState({[field]: event.target.value});
  // }

  handleSubmit(){
    let id = this.uniqueId();
    const joke = Object.assign({}, this.state, {id: id});
    this.props.receiveJoke(joke);
    this.setState(
      {
        joke: '',
        answer: ''
      }
    );
  }



  render(){
    return(
      <div>
        <input
          type = 'text'
          placeholder = 'Type in Joke'
          value = {this.state.joke}
          onChange = {(e) => this.update('joke', e)}
          />
        <input
          type = 'text'
          placeholder = 'Type in Answer'
          value = {this.state.answer}
          onChange = {(e) => this.update('answer', e)}
          />
        <input
          type = 'button'
          value = 'Create Joke'
          onClick = {this.handleSubmit}
          />
      </div>
    );


  }


}

export default JokesForm;

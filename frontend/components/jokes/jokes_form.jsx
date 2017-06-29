import React from 'react';

class JokesForm extends React.Component{

  constructor(){
    super();
    this.state = {
      joke: '',
      answer: '',
      funny: false
    };


    // // need babel plug in for the update function to work
    // // outside the constructor
    // this.handleSubmit = (event) => {
    //   event.preventDefault();
    //   let id = this.uniqueId();
    //   const joke = Object.assign({}, this.state, {id: id});
    //   this.props.receiveJoke(joke);
    //   this.setState(
    //     {
    //       joke: '',
    //       answer: ''
    //     }
    //   );
    // };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  // // create uniqueId for form testing
  // uniqueId() {
  //   return new Date().getTime();
  // }
  // //

  update(field){
    return (event) => {
      event.preventDefault();
      this.setState({[field]: event.target.value});
    };
  }

  handleSubmit(event){
    event.preventDefault();
    // let id = this.uniqueId();
    // const joke = Object.assign({}, this.state, {id: id});
    // this.props.receiveJoke(joke);
    this.props.createJoke(this.state);
    this.setState(
      {
        joke: '',
        answer: ''
      }
    );
  }



  render(){
    return(
      <div className='jokeform-container'>
        <form onSubmit={this.handleSubmit}>
          <input
            className = 'jokeform-joke'
            type = 'text'
            placeholder = 'Type in Joke'
            value = {this.state.joke}
            onChange = {this.update('joke')}
            required
            />
          <input
            className = 'jokeform-answer'
            type = 'text'
            placeholder = 'Type in Answer'
            value = {this.state.answer}
            onChange = {this.update('answer')}
            required
            />
          <input
            className = 'jokeform-submit'
            type = 'submit'
            value = 'Create Joke'
            />

        </form>
      </div>
    );


  }


}

export default JokesForm;

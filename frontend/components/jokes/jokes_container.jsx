import { connect } from 'react-redux';
import Jokes from './jokes';
import {allJokes} from '../../reducers/selectors.js';
import {
  receiveJokes,
  receiveJoke
} from '../../actions/joke_actions';

const mapStateToProps = state => ({
  jokes: allJokes(state)
});

const mapDispatchToProps = dispatch => ({
  receiveJokes: () => dispatch(receiveJokes()),
  receiveJoke: (joke) => dispatch(receiveJoke(joke))
});

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);

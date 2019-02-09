import React, { Component } from "react";
import Movies from '../components/Movies';
import { connect } from "react-redux";
import { movieslist, directorlist } from "../actions";
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount() {
    // this.props.getDirectors();
    // this.props.getMovies();
    this.props.directorlist();
    this.props.movieslist();
  }

  render() {
    return (
      <Movies {...this.props} />
    )
  }
}

// connect store state with props
const mapStateToProps = state => {
  return {
    data: state.movies
  };
};

// correct way to dispatch actions and connect it to props
// const mapDispatchToProps = dispatch => {
//   return {
//     getMovies: () => {
//       dispatch(movieslist());
//     },
//     getDirectors: () => {
//       dispatch(directorlist());
//     }
//   }
// }

// Another way to dispatch to props when you have a lot of actions
// this is less complicated than above
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    movieslist, directorlist
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component,Fragment } from 'react';
import Dashboard from './components/Dashboard';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import PostNewTweet from './components/PostNewTweet';
import AllTweets from './components/AllTweets';
import { CURRENTUSER} from './store/actions/authActions';
import Reply from './components/Reply';
import allReplies from './components/allReplies';

class App extends Component {
  componentDidMount(){
    this.props.currentUser();
    
  }
  render() {
    return (
      <div className="App">
        {this.props.user ? (<Router>
          <Fragment>
            <NavBar />
          <Switch>
            <Route exact path="/" component={AllTweets} />
            <Route exact path="/newTweet" component={PostNewTweet} />
            <Route exact path="/reply/:id" component={Reply} />
            <Route exact path="/allReplies/:id" component={allReplies} />
          </Switch>
          </Fragment>
        </Router>): (<Dashboard />)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    user: state.auth.currentUser,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: () => dispatch(CURRENTUSER()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

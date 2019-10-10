import React, { Component } from 'react'
import './App.css'
import diagram from './assets/redux-demo-diagram.png'

// Redux
import { connect } from 'react-redux'
import { setUserName, setUserAge} from './redux/user/user.actions'

import UserJob from './components/user-job.component'

class App extends Component {

  setUserName = (event) => {
    this.props.setUserName(event.target.value)
  }
  setUserAge = () => {
    this.props.setUserAge(this.props.userage + 1)
  }
  render() {
    return (
      <div className="app">

        <div className="app-wrap">

          <h1>React Redux Reselect Demo</h1>

          <div>
            <span>Default Userage:</span> 
            {this.props.userage}
          </div> 
          <button onClick={this.setUserAge}>Increment user age by 1</button>
          
          <div>
            <span>Default Username:</span> 
            {this.props.username}
          </div>

          <label htmlFor="changeUserName">
            <span>Enter a new username:</span>
            <input 
              onChange={this.setUserName}
              type="text"
              id="changeUserName"
            />
          </label>
          <UserJob />
          <h2>React / Redux Flow</h2>
          <img className="diagram" src={diagram} alt="Diagram" />

        </div>  
      </div>
    )
  }
}

// mapStateToProps: gets props passed from root-reducers.js > store.js (via connect)
/*
  Note:
  - username: and userage: keys are ARBITRARY names - they could be anything.
  -- These keys are then used as props within this (App.js) document.
  - currentUser comes from root-reducer.js 
  - .username and .userage come from INITIAL_STATE of username.reducer.js
*/
// const mapStateToProps = state => ({
//   username: state.currentUser.username,
//   userage: state.currentUser.userage
// })

/**
 * DESTRUCTURED version of code above:
 */
const mapStateToProps = ({ currentUser: {username, userage}}) => ({
  username,
  userage
})

// mapDispatchToProps: Send changed props via username.actions.js to username.reducer.js > root-reducers.js > store.js (via connect)
/*
  Note:
  - setUserName: and setUserAge: are imported from username.actions.js
  - In this particular case, updatedUserName and updatedUserAge values are ARBITRARY names - they could be anything.
  -- However, if an array was being passed down as a prop from another component, we'd
     put the name of that prop in the place where updatedUserName/Age is being used.
*/
const mapDispatchToProps = dispatch => ({
  setUserName: updatedUserName => dispatch(setUserName(updatedUserName)),
  setUserAge: updatedUserAge => dispatch(setUserAge(updatedUserAge))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

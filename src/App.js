import React, { Component } from 'react'
import './App.css'
import diagram from './assets/redux-demo-diagram.png'

// Redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectUserNameStateOnly, selectUserAgeStateOnly, selectUserJobStateOnly } from './redux/user/user.selectors'
import { setUserName, setUserAge} from './redux/user/user.actions'

class App extends Component {

  setUserName = (event) => {
    this.props.setUserName(event.target.value)
  }
  setUserAge = () => {
    this.props.setUserAge(this.props.userAge + 1)
  }
  render() {
    return (
      <div className="app">

        <div className="app-wrap">

          <h1>React Redux Reselect Demo</h1>

          <div>
            <span>Default Userage:</span> 
            {this.props.userAge}
          </div> 
          <button onClick={this.setUserAge}>Increment user age by 1</button>
          
          <div>
            <span>Default Username:</span> 
            {this.props.userName}
          </div>

          <label htmlFor="changeUserName">
            <span>Enter a new username:</span>
            <input 
              onChange={this.setUserName}
              type="text"
              id="changeUserName"
            />
          </label>
          <div className="user-job">
            <p><span>User Job Description:</span> {this.props.jobDescription}</p>
          </div>
          <h2>Reminder: React / Redux Flow</h2>
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
//   userage: state.currentUser.userage,
//   userjob: state.currentUser.userjob
// })

/**
 * DESTRUCTURED version of code above:
 */
// const mapStateToProps = ({ currentUser: {username, userage, userjob}}) => ({
//   username,
//   userage,
//   userjob
// })


/**
 * SELECTORS version of code above:
 * (import { selectUserNameStateOnly, selectUserAgeStateOnly, selectUserJobStateOnly } from './redux/user/user.selectors')
 */
// const mapStateToProps = state => ({
//   userName: selectUserNameStateOnly(state),
//   userAge: selectUserAgeStateOnly(state),
//   jobDescription: selectUserJobStateOnly(state)
// })



/**
 * createStructuredSelector version of code above:
 * import { createStructuredSelector } from 'reselect'
 */
const mapStateToProps = createStructuredSelector ({
  userName: selectUserNameStateOnly,
  userAge: selectUserAgeStateOnly,
  jobDescription: selectUserJobStateOnly
})



// mapDispatchToProps: Send changed props via username.actions.js to username.reducer.js > root-reducers.js > store.js (via connect)
/*
  Note:
  - setUserName: and setUserAge: are imported from username.actions.js
  - as are updatedUserName and updatedUserAge - they are the values of the payload key from their respective actions.

*/
const mapDispatchToProps = dispatch => ({
  setUserName: updatedUserName => dispatch(setUserName(updatedUserName)),
  setUserAge: updatedUserAge => dispatch(setUserAge(updatedUserAge))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

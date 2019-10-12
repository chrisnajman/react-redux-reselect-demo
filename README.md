# React/Redux/Reselect Demo

Very simple demo to clarify and demonstrate the function of each file (store.js, root-reducer.js, etc, etc.) and
to give an example of using a selector with `reselect`

## Setup
`git clone git@github.com:chrisnajman/react-redux-demo.git`

`cd react-redux-reselect-demo`

`npm install`

## Memoization with 'reselect'

Memoization caches a value. If the value doesn't change, the cached value is returned.

In React terms it means that the component will not re-render unless the value has changed.

I'm using a selector inside `mapStateToProps`.
Normally, it would be used to ensure that the component would not re-render unless there
were changes.

In this example, nothing can change - I'm just returning the original `state` (of `userjob`). 

The purpose of this demo is solely to show the mechanics of how, using `reselect`, props can be passed via `user.selectors.js` to `/components/user-job.component.js`.

### createStructuredSelector
Importing this allows us to tidy up the selectors used in `mapStateToProps`, by omitting `state`.

#### Code
mapStateToProps: gets props passed from root-reducers.js > store.js (via connect)

##### Simple version (no selectors)
Note:
- username: and userage: keys are ARBITRARY names - they could be anything.
-- These keys are then used as props within this (App.js) document.
- currentUser comes from root-reducer.js 
- .username and .userage come from INITIAL_STATE of username.reducer.js

```
const mapStateToProps = state => ({
    username: state.currentUser.username,
    userage: state.currentUser.userage,
    userjob: state.currentUser.userjob
})
```

##### Destructured version (no selectors)
```
const mapStateToProps = ({ currentUser: {username, userage, userjob}}) => ({
    username,
    userage,
    userjob
})
```

##### Selectors version
(import { selectUserNameStateOnly, selectUserAgeStateOnly, selectUserJobStateOnly } from './redux/user/user.selectors')
```
const mapStateToProps = state => ({
    userName: selectUserNameStateOnly(state),
    userAge: selectUserAgeStateOnly(state),
    jobDescription: selectUserJobStateOnly(state)
})
```

##### createStructuredSelectors version
(import { createStructuredSelector } from 'reselect')
```
const mapStateToProps = createStructuredSelector ({
  userName: selectUserNameStateOnly,
  userAge: selectUserAgeStateOnly,
  jobDescription: selectUserJobStateOnly
})
```

## Reminder: React / Redux Flow

![React/Redux Demo Diagram](https://chris-najman.co.uk/react-redux-demo-diagram/redux-demo-diagram.png)

## Note
In *store.js* you'll find the following code:

```
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

```

`window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()` is optional. It's used to enable Redux Dev Tools, available from the Chrome Store.

If you don't want to use it, rewrite the *store.js* code as:

`const store = createStore(rootReducer)`


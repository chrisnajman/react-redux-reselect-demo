# React/Redux/Reselect Demo

Very simple demo to clarify and demonstrate the function of each file (store.js, root-reducer.js, etc, etc.) and
to give an example of using a selector with `reselect`

## Setup
`git clone git@github.com:chrisnajman/react-redux-demo.git`

`cd react-redux-reselect-demo`

`npm install`

## Reselect
This allows us to use a selector inside `mapStateToProps`.
Normally, it would be used to ensure that the reducer would not fire if there were no changes.

In this example, nothing can change - I'm just returning the original `state` (of `userjob`). 

The purpose of this demo is to show the mechanics of how, using `reselect`, props can be passed via `user.selectors.js` to `/components/user-job.component.js`.

## Redux Flow

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


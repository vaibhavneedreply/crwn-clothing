# Make react state to be more scalable
# Why redux
  - Good to managing large state
  - Useful for sharing data between components
  - Predictable state management using 3 principles
    - Single source of truth 
    - State is read only 
    - Changes using pure functions

# Action 
# Root Reducer 
# Store DOM 
# Changes

Action which user does like user click button, when user click or take any action it goes to reducer is pure function which take input (user action) and produce output as store (state) which is entire state of the app, If changes make in DOM change.

# Redux uses flux pattern 

Action -> Dispatcher -> Store -> View (one way data flow)

# Redux working

component  ---\       ----------------------->  Home Reducer  ---\              ---------------------->  Component 
component ---  Action --Update Reducer state->  Shop Reducer ---   Root Reducer --Pass state As Props->  Component
component  ---/       ----------------------->  User Reducer  ---/              ---------------------->  Component

# Actions
 - Are objects 
 eg: {
   type: string,
   payload: any
 }

 component --trigger action [SET_CURRENT_UAER]--> {               --Update User Reducer with payload--> user Reducer --> components
                                                    type: string,
                                                    payload: any
                                                  }

# Reducer eg: Reducer is an function which takes currentState and action as parameter, based on actions decide weather to render the page or not and return the object

const userReducer = (state, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      };
    default: 
      return state;
  }
}

# middleware

# setting up redux
1: include everything inside <provider></provider> in index.js which we get from react-redux
2: write the store -> create folder redux inside src, 
    root-reducer.js
    all other reducers

- provider (in index.js)
- combineReducers (in root reducer to combine all)
- createStore (to create a new store )
- connect (Higher order function which let us modify our component to have access to things related to redux)


Higher order function is function which takes components as arrgument and return soopup component

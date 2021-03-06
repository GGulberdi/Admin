// import { createStore } from 'redux'

// const initialState = {
//   : 'responsive'
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return {...state, ...rest }
//     default:
//       return state
//   }
// }

// const store = createStore(changeState)
// export default store

import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';



const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store
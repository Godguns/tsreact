import { combineReducers } from 'redux';
import loginReducer from 'Src/pages/login/store/reducer';
// import headerReducer from 'Src/components/header/store/reducer';

const reducer = combineReducers({
  login: loginReducer,
  // header: headerReducer,
});

export default reducer;

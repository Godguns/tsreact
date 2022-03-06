import { fromJS } from 'immutable';
import * as constants from './constants';
// 初始默认的state
const defaultState = fromJS({
  myHeaderData: null,
});
const getData = (state: any, action: { type: any; data: null }) => {
  return state.set('myLoginData', action.data);
};
const headerReducer = (state = defaultState, action: { type: any; data: null }) => {
  // 由于state是引用型，不能直接修改，否则是监测不到state发生变化的。因此需要先复制一份进行修改，然后再返回新的state。
  // const newState = { ...state };
  switch (action.type) {
    case constants.SET_DATA:
      // newState.myHeaderData = action.data;
      // return newState;
      return getData(state, action);
    default:
      return state;
  }
};

export default headerReducer;

import { fromJS } from 'immutable';
import * as constants from './constants';

// 初始默认的state
const defaultState = {
  myLoginData: 'hello',
};
const loginReducer = (state = defaultState, action: { type: any; data: any }) => {
  // 由于state是引用型，不能直接修改，否则是监测不到state发生变化的。因此需要先复制一份进行修改，然后再返回新的state。
  const newState = { ...state };
  switch (action.type) {
    case constants.SET_DATA:
      newState.myLoginData = action.data;
      return newState;
    default:
      return state;
  }
};

export default loginReducer;

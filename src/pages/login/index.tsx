import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const { myLoginData, setData } = this.props;
    return (
      <div>
        <h1>hello im login</h1>
        <div className='ipt-con'>login store: myData = {myLoginData}</div>
        <div className='ipt-con'>
          <button
            type='button'
            onClick={() => {
              setData('123456');
            }}
          >
            更改login store的myData
          </button>
        </div>
      </div>
    );
  }
}
// 把store中的数据映射到组件的props
const mapStateToProps = (state: any) => {
  return {
    // 数组第一个元素的login，对应的是src/store/reducer.js中定义的login分库名称
    myLoginData: state.login.myLoginData,
  };
};

// 把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispatch: any) => ({
  setData(data: any) {
    const action = actionCreators.setData(data);
    dispatch(action);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

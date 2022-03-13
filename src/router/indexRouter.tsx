import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import FindPage from 'Src/pages/FindPage';


class indexRouter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path='/login' element={} />
          <Route path='/' element={<FindPage />} />
        </Routes>
      </HashRouter>
    );
  }
}
export default connect()(indexRouter);

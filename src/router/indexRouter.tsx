import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import FindPage from 'Src/pages/FindPage';

class indexRouter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Link to='/reactMicroApp'> 基座应用</Link>
        {/* <Route path='/login' component={React.lazy(() => import('Src/pages/Login'))} /> */}
        <Route path='/' exact component={FindPage} />
      </BrowserRouter>
    );
  }
}
export default indexRouter;

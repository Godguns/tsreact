import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import FindPage from 'Src/pages/FindPage';

class indexRouter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <Route path='/login' component={React.lazy(() => import('Src/pages/Login'))} />
        <Route path='/' component={FindPage} />
      </HashRouter>
    );
  }
}
export default indexRouter;

import React, { Component } from 'react';
import { connect } from 'react-redux';

class FindPage extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>FindPage</div>;
  }
}
export default connect()(FindPage);

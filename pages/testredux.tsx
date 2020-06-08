import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testRedux } from 'redux/actions/TestActions';
import Link from 'next/link'

class TestRedux extends Component {
  componentDidMount() {
    this.props.testRedux('Selina mau balik jakarta');
  }
  
  render() {
    return (
      <div>
        <h1>Test Redux</h1>
        <Link href="/testreadredux">read</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  testRedux: (value: string) =>  dispatch(testRedux(value))
});

export default connect(null, mapDispatchToProps)(TestRedux);
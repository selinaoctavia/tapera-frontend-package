import React, { Component } from 'react';
import { connect } from 'react-redux';

class TestReadRedux extends Component {

  render() {
  // eslint-disable-next-line no-console
  console.log(`resp: ${this.props.response}`);
    return (
      <div>
        <h1>
          Test Read Redux
        </h1>
        <p>
          Nilai redux : { this.props.response }
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  response: state.test.response,
})

export default connect(mapStateToProps)(TestReadRedux);

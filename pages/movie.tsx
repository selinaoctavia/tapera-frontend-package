import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import { nowPlayingFetch } from 'redux/actions/MovieActions';
import { NOWPLAYINGSUCCESS, NOWPLAYINGFAIL } from 'redux/constants/MovieConstants';

class Movie extends Component<any, any> {
    constructor(props: any) {
      super(props);
    }
  
    componentDidMount() {
      const start = Moment().startOf('month');
      const end   = Moment(start).add(2, 'month');
      const data = {
        'primary_release_date.gte': start.format('YYYY-MM-DD'),
        'primary_release_date.lte': end.format('YYYY-MM-DD'),
      };
      this.props.onRequest(data);
    }
  
    render() {
      const { response, error } = this.props;
      console.log(response);
      return (
         
        response.map((movie: any, key: number) => {
            return (
            <div>{movie.title}</div>
            )
        })
        );
    }
  }
  
  const mapStateToProps = (state: any) => ({
    fetch: state.nowPlaying.fetch,
    response: state.nowPlaying.response,
    error: state.nowPlaying.error,
    action: state.nowPlaying.action,
  });
  
  const mapDispatchToProps = (dispatch: any) => ({
    onRequest: (value: object) => dispatch(nowPlayingFetch(value)),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
  
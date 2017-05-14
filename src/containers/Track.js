import React from 'react';
import {connect} from 'react-redux';
import {container} from './About.css';


const Track = ({track}) =>
  (<div className={container}>{track.name} typeof track.id={typeof track.id}</div>);

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps);
  return {
    track: state.tracks.find( track =>
      track.id===Number(ownProps.params.id))
  };
};
export default connect(mapStateToProps)(Track);

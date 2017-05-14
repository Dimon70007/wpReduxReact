import React from 'react';
import {connect} from 'react-redux';
import {/*withRouter*/Link} from 'react-router';
import {container} from './App.css';
import {getTracks} from '../actions/tracks';

const App = (props) => {
  const {tracks, onAddTrack,
      onFindTrack, onGetTracks, ownProps} = props;
      console.log('ownProps ',ownProps,'\nprops ',props);
  let trackInput='';
  let searchInput='';

  const addTrack = () => {
    console.log('addTrack', trackInput.value);
    onAddTrack(trackInput.value);
    trackInput.value = '';
  };

  const findTrack = () => {
    console.log('findTrack', searchInput.value);
    onFindTrack(searchInput.value);
    // searchInput.value = '';
  };

  return (
    <div className={container}>
      <div>
        <input type='text' ref={input => trackInput = input}/>
        {/* мы прост хотим: когда проходит функция render чтобы
          в this.trackInput было записано значение переменной input
        вместо ref можно использовать state, но тогда будет больше кода*/}
        <button onClick={addTrack}>Add track</button>
      </div>
      <div>
        <input type='text' ref={input => searchInput = input}/>
        <button onClick={findTrack}>Find track</button>
      </div>
      <div>
        <button onClick={onGetTracks}>Get tracks</button>
        {/* don't need bind onGetTracks because it doesn't use any function */}
      </div>
      <ul>
        {tracks.map((track) =>
          <li key={track.id}>
            <Link to={`/tracks/${track.id}`}>{track.name}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  tracks: state.tracks.filter(
    track => track.name.includes(state.filterTracks),
  ownProps
) // includes is a function that finds chars in string
});

const connectApp = connect(mapStateToProps, dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: 'ADD_TRACK', payload });
    },
    onFindTrack: (name) => {
      dispatch({ type: 'FIND_TRACK', payload: name});
    },
    onGetTracks: () => {
      dispatch(getTracks())
    }
  })
)(App);

export default connectApp;//withRouter(connectApp);

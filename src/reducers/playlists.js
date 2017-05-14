const initialState = [
    'My home playlist',
    'My work playlist'
];
const ADD_PLAYLIST = 'ADD_PLAYLIST';
const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export default function playlists(state = initialState, action) {
  switch(action.type) {
    case ADD_PLAYLIST:
      return state;
    case DELETE_PLAYLIST:
      return state
    default:
      return state;
  }
}

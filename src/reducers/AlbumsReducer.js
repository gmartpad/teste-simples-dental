const initialState = {
    albums: [],
    currentAlbum: 1,
};

const AlbumsReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_ALBUMS':
            return {...state, albums: action.payload.albums}
        case 'SET_CURRENT_ALBUM':
            return {...state, currentAlbum: action.payload.currentAlbum}
        default:
            break;
    }

    return state;

}

export default AlbumsReducer;
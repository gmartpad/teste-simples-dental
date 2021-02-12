const initialState = {
    currentAlbum: 1,
};

const AlbumsReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_CURRENT_ALBUM':
            return {...state, currentAlbum: action.payload.currentAlbum}
        default:
            break;
    }

    return state;

}

export default AlbumsReducer;
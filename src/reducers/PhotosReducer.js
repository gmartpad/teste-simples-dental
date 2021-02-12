const initialState = {
    photos: [],
};

const PhotosReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_PHOTOS':
            return {...state, photos: action.payload.photos}
        default:
            break;
    }

    return state;

}

export default PhotosReducer;
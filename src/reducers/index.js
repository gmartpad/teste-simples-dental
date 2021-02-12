import { combineReducers } from 'redux';

import AlbumsReducer from './AlbumsReducer';
import PhotosReducer from './PhotosReducer';

export default combineReducers({
    albums: AlbumsReducer,
    photos: PhotosReducer,
});
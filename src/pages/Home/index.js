import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import AlbumsAPI from '../../helpers/AlbumsAPI';
import PhotosAPI from '../../helpers/PhotosAPI';

import { SET_CURRENT_ALBUM, SET_PHOTOS } from '../../constants/ActionTypes';

import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        minWidth: 300,
        width: '100%',
        padding: '26px',
    },
    albumButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        width: '24%',
        marginBottom: '13px',

        [theme.breakpoints.down('sm')]: {
            width: '32%',
        },
        [theme.breakpoints.down('600')]: {
            width: '49%',
        },
        [theme.breakpoints.down('375')]: {
            width: '100%',
        },
    },
    albumButtonContent: {
        marginRight: 'auto',
    },
    albumButtonLink: {
        textDecoration: 'none !important',
        color: 'rgba(0, 0, 0, 0.87)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
    },
    albumButtonActionArea: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
    }
}))

const Home = () => {

    //-----------------------------------------------

    const dispatch = useDispatch();

    // dispatcher

    const setCurrentAlbum = (currentAlbum) => dispatch({
        type: SET_CURRENT_ALBUM,
        payload: {
            currentAlbum
        }
    })

    const setPhotos = (photos) => dispatch({
        type: SET_PHOTOS,
        payload: {
            photos
        }
    })

    //-----------------------------------------------

    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [thumbnails, setThumbnails] = useState([]);

    const albumsApi = AlbumsAPI();
    const photosApi = PhotosAPI();

    const getAlbums = async () => {
        const albumsData = await albumsApi.getAlbums();
        setAlbums(albumsData);
    }

    const getPhotos = async () => {
        const photosData = await photosApi.getPhotos();
        setPhotos(photosData);
    }

    const allocateThumbnails = () => {

        let currentAlbum = 0;

        const thumbnailsArray = photos.filter(el=>{
            if(currentAlbum !== el.albumId){
                currentAlbum = el.albumId;
                return true;
            }
        })

        setThumbnails(thumbnailsArray);

    }

    useEffect(()=>{
        getAlbums();
        getPhotos();
        allocateThumbnails();
        setPhotos(photos);
    }, [photos])

    const classes = useStyles();

    return(
        <Container 
            maxWidth="md"
            className={classes.root}
        >
            { thumbnails !== [] ?
                albums.map((i, k) => 
                    <Card 
                        className={classes.albumButton}
                        onClick={setCurrentAlbum(k+1)}
                    >
                        <Link 
                            className={classes.albumButtonLink}
                            to={{pathname: "/album"}}  
                        >
                            <CardActionArea
                                className={classes.albumButtonActionArea}
                            >
                                <CardMedia
                                    component="img"
                                    alt={thumbnails[k] ? thumbnails[k].thumbnailUrl : null}
                                    height="150"
                                    image={thumbnails[k] ? thumbnails[k].thumbnailUrl : null}
                                    title={thumbnails[k] ? thumbnails[k].thumbnailUrl : null}
                                />
                                <CardContent
                                    className={classes.albumButtonContent}
                                >
                                    <Typography
                                        gutterBottom 
                                        variant="h6" 
                                        component="h2"
                                    >
                                        {i.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                )
                                :
                null
            }
        </Container>
    );
}

export default Home;
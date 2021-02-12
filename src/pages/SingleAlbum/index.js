import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        minWidth: 300,
        width: '100%',
        padding: '26px',
        marginTop: '48px',
    },
    albumTitle: {
        textAlign: 'center',
        fontSize: '5vw',
        [theme.breakpoints.down('600')]: {
            fontSize: '7vw',
        }
    },
    imageBodySpan: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '48px',
    },
    imageBox: {
        marginBottom: '13px',
        width: '24%',
        [theme.breakpoints.down('sm')]: {
            width: '32%',
        },
        [theme.breakpoints.down('600')]: {
            width: '49%',
        }
    },
    image: {
        display: 'block',
        width: '100%',
        height: 'auto',
        borderRadius: '5px',
    }
}))

const SingleAlbum = props => {

    //-----------------------------------------------------------

    const albums = useSelector(state => state.albums.albums);
    const photos = useSelector(state => state.photos.photos);
    const currentAlbum = useSelector(state => state.albums.currentAlbum);

    //-----------------------------------------------------------

    const currentAlbumObject = albums.filter(function (el) {
        return el.id === currentAlbum;
    })

    const currentPhotos = photos.filter(function (el) { 
        return el.albumId === currentAlbum; 
    })

    const [tenPhotos, setTenPhotos] = useState(currentPhotos.slice([0], [10]));

    const classes = useStyles();

    return (
        <Container 
            maxWidth="md"
            className={classes.root}
        >
            <Typography
                className={classes.albumTitle}
                variant="h2" 
                color="inherit"
            >
                {currentAlbumObject[0].title}
            </Typography>
            <Box
                component="span"
                className={classes.imageBodySpan}
            >
            {
                tenPhotos.map((i, k) =>
                    <Box
                        key={k}
                        className={classes.imageBox}
                    >
                        <img 
                            src={i.url}
                            className={classes.image}
                        />
                    </Box>
                )
            }
            </Box>

        </Container>
    )
}

export default SingleAlbum;
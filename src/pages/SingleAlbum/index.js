import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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
    }
}))

const SingleAlbum = props => {

    //-----------------------------------------------------------

    const currentAlbum = useSelector(state => state.albums.currentAlbum);
    const photos = useSelector(state => state.photos.photos);

    //-----------------------------------------------------------

    const [tenPhotos, setTenPhotos] = useState(photos.slice([0], [10]));

    const classes = useStyles();

    return (
        <Container 
            maxWidth="md"
            className={classes.root}
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
            {/* <Typography>
                SingleAlbum - {currentAlbum}
            </Typography>
            <Typography>
                {JSON.stringify(photos)}
            </Typography> */}

        </Container>
    )
}

export default SingleAlbum;
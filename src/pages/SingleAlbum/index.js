import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        minWidth: 300,
        width: '100%',
        padding: '26px',
    },
}))

const SingleAlbum = props => {

    

    const classes = useStyles();

    return (
        <Container 
            maxWidth="md"
            className={classes.root}
        >

            <Typography>
                SingleAlbum
            </Typography>

        </Container>
    )
}

export default SingleAlbum;
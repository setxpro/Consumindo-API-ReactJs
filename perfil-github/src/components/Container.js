import React from 'react';

import Search from './Search';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    area: {
        background: '#64ffda',
    },
    root: {
        width: 1041,
        height: '100vh',
        margin: 'auto',
        background: '#020c1b',
        color: '#8892b0',
    },
    title: {
        fontSize:40,
        textAlign: 'center',
        padding: '5rem',
    }
});

export default function Container() {

    const classes = useStyles();

    return (
        <div className={classes.area}>
            <div className={classes.root}>
                <h1 className={classes.title}>GitHube profile</h1>
                <Search/>
            </div>
        </div>
    );
}